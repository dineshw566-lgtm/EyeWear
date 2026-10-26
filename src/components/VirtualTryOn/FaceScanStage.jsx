import { useEffect, useRef, useState } from "react"
import {
  Camera,
  CameraOff,
  RotateCcw,
  ShieldCheck,
  Video,
  VideoOff,
} from "lucide-react"
import useFaceLandmarker from "../../hooks/useFaceLandmarker"
import {
  estimateFaceShape,
  getEyeMetrics,
  mostFrequent,
} from "../../utils/faceAnalysis"
import { drawGlassesOverlay } from "../../utils/drawGlassesOverlay"
import FoldText from "../FoldText"

// Consecutive frames with a face found before we trust a shape reading —
// a real, measured progress signal rather than a timer standing in for one.
const SCAN_LOCK_FRAMES = 24
const FACE_SHAPES = ["Oval", "Round", "Square", "Heart", "Oblong"]

export default function FaceScanStage({ selectedFrame, onFaceShapeDetected }) {
  // idle | requesting | denied | unavailable | loading | model-error | searching | tracking
  const [stage, setStage] = useState("idle")
  const [progress, setProgress] = useState(0)
  const [locked, setLocked] = useState(false)
  const [hideOverlay, setHideOverlay] = useState(false)

  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)
  const rafRef = useRef(null)
  const lockFramesRef = useRef(0)
  const shapeSamplesRef = useRef([])
  const shapeSettledRef = useRef(false)
  const selectedFrameRef = useRef(selectedFrame)
  const hideOverlayRef = useRef(hideOverlay)
  const stageRef = useRef(stage)

  const { ready: modelReady, error: modelError, detect } = useFaceLandmarker()

  useEffect(() => {
    selectedFrameRef.current = selectedFrame
  }, [selectedFrame])

  useEffect(() => {
    hideOverlayRef.current = hideOverlay
  }, [hideOverlay])

  useEffect(() => {
    stageRef.current = stage
  }, [stage])

  const stopCamera = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }

  useEffect(() => stopCamera, [])

  const resetScanProgress = () => {
    lockFramesRef.current = 0
    shapeSamplesRef.current = []
    shapeSettledRef.current = false
    setProgress(0)
    setLocked(false)
  }

  const loop = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(loop)
      return
    }

    if (
      canvas.width !== video.videoWidth ||
      canvas.height !== video.videoHeight
    ) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
    }
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const result = detect(video, performance.now())
    const landmarks = result?.faceLandmarks?.[0]

    if (landmarks) {
      if (stageRef.current !== "tracking") setStage("tracking")

      if (!shapeSettledRef.current) {
        lockFramesRef.current += 1
        const sample = estimateFaceShape(landmarks, canvas.width, canvas.height)
        if (sample) shapeSamplesRef.current.push(sample)
        setProgress(Math.min(lockFramesRef.current / SCAN_LOCK_FRAMES, 1))
        if (lockFramesRef.current >= SCAN_LOCK_FRAMES) {
          shapeSettledRef.current = true
          setLocked(true)
          onFaceShapeDetected?.(mostFrequent(shapeSamplesRef.current))
        }
      }

      if (!hideOverlayRef.current && selectedFrameRef.current) {
        const eyeMetrics = getEyeMetrics(landmarks, canvas.width, canvas.height)
        drawGlassesOverlay(ctx, eyeMetrics, selectedFrameRef.current)
      }
    } else if (stageRef.current === "tracking") {
      setStage("searching")
    }

    rafRef.current = requestAnimationFrame(loop)
  }

  useEffect(() => {
    const active = ["loading", "model-error", "searching", "tracking"].includes(
      stage,
    )
    if (active) rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  useEffect(() => {
    if (stage !== "loading") return
    if (modelReady) setStage("searching")
    else if (modelError) setStage("model-error")
  }, [modelReady, modelError, stage])

  const start = async () => {
    setStage("requesting")
    if (!navigator.mediaDevices?.getUserMedia) {
      setStage("unavailable")
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 } },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play().catch(() => {})
      }
      resetScanProgress()
      setStage(modelReady ? "searching" : "loading")
    } catch (error) {
      setStage(error.name === "NotAllowedError" ? "denied" : "unavailable")
    }
  }

  const restart = () => {
    resetScanProgress()
    if (stage === "tracking") setStage("searching")
  }

  const stop = () => {
    stopCamera()
    resetScanProgress()
    setStage("idle")
  }

  const isLive = ["loading", "model-error", "searching", "tracking"].includes(
    stage,
  )

  return (
    <div className="tryon-camera-wrap">
      {isLive ? (
        <>
          <div className="tryon-camera-stage camera-stage">
            <video ref={videoRef} muted playsInline />
            <canvas ref={canvasRef} aria-hidden="true" />
            {!locked && <div className="tryon-face-guide" aria-hidden="true" />}
            <div className="tryon-status-banner" aria-live="polite">
              <span className="live-dot" />
              {stage === "loading" && "Loading face detection…"}
              {stage === "model-error" &&
                "Camera is live — face tracking failed to load"}
              {stage === "searching" && "Position your face in the frame"}
              {stage === "tracking" && "Face detected · tracking live"}
            </div>
            {!locked && (stage === "searching" || stage === "tracking") && (
              <div className="tryon-progress-track" aria-hidden="true">
                <div
                  className="tryon-progress-fill"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            )}
          </div>
          <div className="tryon-camera-controls">
            <button
              type="button"
              className="button button-light"
              onClick={restart}
            >
              <RotateCcw /> Restart scan
            </button>
            <button
              type="button"
              className="button button-ghost"
              onClick={() => setHideOverlay((v) => !v)}
            >
              {hideOverlay ? <Video /> : <VideoOff />}
              {hideOverlay ? "Show glasses" : "Remove glasses"}
            </button>
            <button type="button" className="button button-dark" onClick={stop}>
              <CameraOff /> Stop camera
            </button>
          </div>
        </>
      ) : (
        <div className="try-content tryon-intro">
          <div className="try-icon">
            {stage === "denied" || stage === "unavailable" ? (
              <CameraOff />
            ) : (
              <Camera />
            )}
          </div>
          <p className="eyebrow">Virtual try-on</p>
          <h2>
            <FoldText
              key={stage}
              text={
                stage === "requesting"
                  ? "Opening your camera…"
                  : stage === "denied"
                    ? "Camera access needed"
                    : stage === "unavailable"
                      ? "Camera unavailable"
                      : "Find Your Perfect Frames"
              }
              trigger="mount"
              splitBy="word"
            />
          </h2>
          {stage === "idle" && (
            <p>
              Your camera stays on this device — nothing is recorded, uploaded
              or stored. We read real facial landmarks to estimate your face
              shape and preview frames live.
            </p>
          )}
          {stage === "denied" && (
            <p>
              Camera permission was denied. Allow camera access in your browser
              settings, then try again.
            </p>
          )}
          {stage === "unavailable" && (
            <p>
              A camera could not be opened on this device. Pick your face shape
              below instead to see matching frames.
            </p>
          )}
          <div className="privacy-note">
            <ShieldCheck /> Private, on-device camera preview
          </div>
          {stage !== "requesting" && (
            <button
              type="button"
              className="button button-accent"
              onClick={start}
            >
              <Camera />
              {stage === "idle" ? "Start Face Scan" : "Try again"}
            </button>
          )}
          <div className="tryon-manual-shape">
            <p>Prefer not to use your camera? Choose your face shape:</p>
            <div className="tryon-manual-shape-options">
              {FACE_SHAPES.map((shape) => (
                <button
                  key={shape}
                  type="button"
                  className="button button-ghost"
                  onClick={() => onFaceShapeDetected?.(shape)}
                >
                  {shape}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
