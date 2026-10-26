import { ArrowLeft, ArrowRight, Eye, Sparkles } from "lucide-react"
import { SHAPE_GUIDANCE } from "../../utils/frameRecommendation"

export default function RecommendedFrames({
  faceShape,
  recommendations,
  selectedFrame,
  onSelectFrame,
  onViewProduct,
}) {
  if (!faceShape || recommendations.length === 0) {
    return (
      <aside className="tryon-recommend-panel tryon-recommend-empty">
        <p className="eyebrow">Recommended for you</p>
        <h3>Start a scan to see matching frames</h3>
        <p>
          Once we read your face shape, we&apos;ll surface frames from our
          catalogue that are a considered match — not guesswork.
        </p>
      </aside>
    )
  }

  const guidance = SHAPE_GUIDANCE[faceShape]
  const activeIndex = recommendations.findIndex(
    (p) => p.id === selectedFrame?.id,
  )

  const step = (delta) => {
    if (!recommendations.length) return
    const current = activeIndex === -1 ? 0 : activeIndex
    const next =
      (current + delta + recommendations.length) % recommendations.length
    onSelectFrame(recommendations[next])
  }

  return (
    <aside className="tryon-recommend-panel">
      <div className="tryon-shape-badge">
        <Sparkles /> Your face shape: <strong>{faceShape}</strong>
      </div>
      {guidance && <p className="tryon-shape-tip">{guidance.tip}</p>}

      <div className="tryon-recommend-heading">
        <h3>Recommended for You</h3>
        <div className="tryon-recommend-nav">
          <button
            type="button"
            className="icon-button"
            onClick={() => step(-1)}
            aria-label="Previous recommended frame"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={() => step(1)}
            aria-label="Next recommended frame"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="tryon-recommend-grid">
        {recommendations.map((product) => {
          const active = product.id === selectedFrame?.id
          return (
            <article
              key={product.id}
              className={`tryon-rec-card ${active ? "active" : ""}`}
            >
              <button
                type="button"
                className="tryon-rec-image"
                onClick={() => onSelectFrame(product)}
                aria-label={`Try ${product.name} on camera`}
              >
                <img
                  src={product.image}
                  alt={`${product.name} frame`}
                  loading="lazy"
                />
              </button>
              <div className="tryon-rec-body">
                <h4>{product.name}</h4>
                <p className="tryon-rec-meta">
                  {product.shape} · {product.material}
                </p>
                <p className="tryon-rec-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                {product.swatches?.length > 0 && (
                  <div className="tryon-rec-swatches" aria-hidden="true">
                    {product.swatches.map((s) => (
                      <span
                        key={s.name}
                        className="tryon-rec-swatch"
                        style={{ backgroundColor: s.hex }}
                        title={s.name}
                      />
                    ))}
                  </div>
                )}
                <div className="tryon-rec-actions">
                  <button
                    type="button"
                    className={`button tryon-rec-try ${
                      active ? "button-accent" : "button-ghost"
                    }`}
                    onClick={() => onSelectFrame(product)}
                  >
                    {active ? "Trying on" : "Try this frame"}
                  </button>
                  <button
                    type="button"
                    className="icon-button"
                    onClick={() => onViewProduct(product)}
                    aria-label={`View details for ${product.name}`}
                  >
                    <Eye />
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </aside>
  )
}
