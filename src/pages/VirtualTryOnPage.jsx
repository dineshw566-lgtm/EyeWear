import { useEffect, useMemo, useState } from "react"
import { useOutletContext, useNavigate } from "react-router"
import usePageMeta from "../hooks/usePageMeta"
import FoldText from "../components/FoldText"
import FaceScanStage from "../components/VirtualTryOn/FaceScanStage"
import RecommendedFrames from "../components/VirtualTryOn/RecommendedFrames"
import { getRecommendedFrames } from "../utils/frameRecommendation"
import "../components/VirtualTryOn/VirtualTryOn.css"

export default function VirtualTryOnPage() {
  usePageMeta(
    "Virtual Try-On | Face Detector",
    "Scan your face shape on-device and preview Vizhen Plus Optics frames live on your camera — nothing recorded or uploaded.",
  )
  const navigate = useNavigate()
  const { openAppointment } = useOutletContext()

  const [faceShape, setFaceShape] = useState(null)
  const [selectedFrame, setSelectedFrame] = useState(null)

  const recommendations = useMemo(
    () => (faceShape ? getRecommendedFrames(faceShape) : []),
    [faceShape],
  )

  // Auto-select the top match the moment recommendations first arrive.
  useEffect(() => {
    if (recommendations.length > 0 && !selectedFrame) {
      setSelectedFrame(recommendations[0])
    }
  }, [recommendations, selectedFrame])

  const overlayFrame = useMemo(
    () =>
      selectedFrame
        ? {
            shape: selectedFrame.shape,
            colorHex: selectedFrame.swatches?.[0]?.hex || "#242322",
          }
        : null,
    [selectedFrame],
  )

  return (
    <div className="content-page tryon-page">
      <header className="page-hero tryon-hero">
        <p className="eyebrow">Virtual Try-On</p>
        <h1>
          <FoldText
            text="Find Your Perfect Frames"
            trigger="mount"
            splitBy="word"
          />
        </h1>
        <p>
          Scan your face shape on-device, then preview recommended frames from
          our catalogue live on your camera — no photos saved, nothing uploaded.
        </p>
      </header>

      <div className="tryon-layout">
        <FaceScanStage
          selectedFrame={overlayFrame}
          onFaceShapeDetected={setFaceShape}
        />
        <RecommendedFrames
          faceShape={faceShape}
          recommendations={recommendations}
          selectedFrame={selectedFrame}
          onSelectFrame={setSelectedFrame}
          onViewProduct={(p) => navigate(`/product/${p.id}`)}
        />
      </div>

      <div className="tryon-footer-cta">
        <p>Want a professional measurement before you order?</p>
        <button
          type="button"
          className="button button-outline"
          onClick={openAppointment}
        >
          Book an eye test
        </button>
      </div>
    </div>
  )
}
