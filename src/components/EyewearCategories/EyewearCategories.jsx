import { useRef, useState, useEffect, useCallback } from "react"
import { Link } from "react-router"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { EYEWEAR_CATEGORIES } from "../../data/eyewearCategoriesData"
import "./EyewearCategories.css"

export default function EyewearCategories() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeDot, setActiveDot] = useState(0)

  const checkScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)

    const maxScroll = scrollWidth - clientWidth
    if (maxScroll > 0) {
      const pct = Math.max(0, Math.min(1, scrollLeft / maxScroll))
      setActiveDot(Math.round(pct * (EYEWEAR_CATEGORIES.length - 1)))
    } else {
      setActiveDot(0)
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const handleScroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector(".eyewear-cat-card")
    const step = card ? card.offsetWidth + 20 : 320
    el.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    })
  }

  const jumpToDot = (idx) => {
    const el = trackRef.current
    if (!el) return
    const cards = el.querySelectorAll(".eyewear-cat-card")
    if (cards[idx]) {
      cards[idx].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }

  return (
    <section
      className="eyewear-categories-section"
      aria-labelledby="eyewear-cat-heading"
    >
      <div className="eyewear-categories-container">
        {/* Two-Column Balanced Editorial Header */}
        <div className="eyewear-cat-header">
          <div className="eyewear-cat-header-left">
            <div className="eyewear-cat-eyebrow-row">
              <span className="eyewear-cat-eyebrow">EXPLORE BY CATEGORY</span>
              <span className="eyewear-cat-eyebrow-line" aria-hidden="true" />
            </div>
            <h2 className="eyewear-cat-main-title" id="eyewear-cat-heading">
              Curated <em>Eyewear</em> For Every Need
            </h2>
          </div>
          <div className="eyewear-cat-header-right">
            <p className="eyewear-cat-subtitle">
              From smart audio frames and glare-free computer optics to powered
              sunglasses and daily breathable lenses.
            </p>
          </div>
        </div>

        {/* 5-Card Horizontal Row Showcase */}
        <div className="eyewear-cat-wrapper">
          {/* Arrow Left (Tablet/Mobile) */}
          <button
            type="button"
            className="eyewear-cat-arrow eyewear-cat-arrow-prev"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>

          {/* Cards Track: Single 5-Card Row on Desktop */}
          <div
            ref={trackRef}
            className="eyewear-cat-track"
            role="region"
            aria-label="Eyewear category showcase"
          >
            {EYEWEAR_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className={`eyewear-cat-card eyewear-cat-card-${cat.id}`}
                aria-label={`Shop ${cat.title}`}
              >
                {/* Full-bleed Landscape Photography Filling the Card */}
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="eyewear-cat-card-img"
                  loading="lazy"
                />

                {/* Subtle Gradient Scrim at Top for Readable Typography */}
                <div className="eyewear-cat-card-gradient" aria-hidden="true" />

                {/* Floating Card Title Header with Serif Italic + Clean Sans */}
                <div className="eyewear-cat-card-header">
                  <h3 className="eyewear-cat-card-title">
                    <span className="eyewear-cat-word-italic">
                      {cat.italicWord}
                    </span>
                    <span className="eyewear-cat-word-regular">
                      {cat.regularWord}
                    </span>
                  </h3>
                  <span className="eyewear-cat-arrow-icon" aria-hidden="true">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Arrow Right (Tablet/Mobile) */}
          <button
            type="button"
            className="eyewear-cat-arrow eyewear-cat-arrow-next"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next categories"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>

        {/* Mobile / Tablet Pagination Dots */}
        <div
          className="eyewear-cat-dots"
          role="tablist"
          aria-label="Category pages"
        >
          {EYEWEAR_CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              className={`eyewear-cat-dot${activeDot === i ? " active" : ""}`}
              onClick={() => jumpToDot(i)}
              aria-selected={activeDot === i}
              aria-label={`Go to ${cat.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
