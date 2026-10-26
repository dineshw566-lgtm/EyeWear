import { useEffect, useRef, useState } from "react"

const WASM_BASE =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.1.1/wasm"
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"

/**
 * Lazily loads MediaPipe's FaceLandmarker (dynamically imported, so it is
 * code-split into its own chunk and never adds weight to the main bundle)
 * and exposes a stable `detect(video, timestampMs)` function for a
 * requestAnimationFrame loop to call every frame. Face processing stays
 * entirely on-device — nothing is uploaded or stored.
 */
export default function useFaceLandmarker() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)
  const landmarkerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const { FaceLandmarker, FilesetResolver } = await import(
          "@mediapipe/tasks-vision"
        )
        const filesetResolver = await FilesetResolver.forVisionTasks(WASM_BASE)
        const baseOptions = { modelAssetPath: MODEL_URL, delegate: "GPU" }

        let landmarker
        try {
          landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
            baseOptions,
            runningMode: "VIDEO",
            numFaces: 1,
          })
        } catch {
          // Some browsers/devices reject the GPU delegate — fall back to CPU.
          landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
            baseOptions: { ...baseOptions, delegate: "CPU" },
            runningMode: "VIDEO",
            numFaces: 1,
          })
        }

        if (cancelled) {
          landmarker.close()
          return
        }
        landmarkerRef.current = landmarker
        setReady(true)
      } catch (err) {
        if (!cancelled) setError(err)
      }
    }

    load()
    return () => {
      cancelled = true
      landmarkerRef.current?.close()
      landmarkerRef.current = null
    }
  }, [])

  function detect(video, timestampMs) {
    if (!landmarkerRef.current) return null
    return landmarkerRef.current.detectForVideo(video, timestampMs)
  }

  return { ready, error, detect }
}
