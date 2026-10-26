import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { Link } from "react-router"
import { PREMIUM_BRANDS, BRAND_FILTERS } from "../../data/premiumBrandsData"
import "./PremiumBrandsCarousel.css"

/* ════════════════════════════════════════════════════════════════
   Brand Card Component
   - Tall arched card with rounded top
   - Full eyewear photography inside arch
   - Dark bottom gradient
   - Dedicated clean real brand logo area (object-fit: contain)
   - Subtle accent line
   - 2-line uppercase tagline
════════════════════════════════════════════════════════════════ */
function BrandCard({ brand }) {
  const [logoError, setLogoError] = useState(false)

  return (
    <Link
      to={brand.route}
      className="pb-card"
      aria-label={`Shop ${brand.name} collection`}
      draggable="false"
    >
      {/* Editorial Eyewear Photography Filling The Arch */}
      <img
        src={brand.photo}
        alt={`${brand.name} eyewear campaign`}
        className="pb-card-img"
        loading="lazy"
        draggable="false"
        onError={(e) => {
          // Fallback to verified local eyewear portrait if path fails
          e.currentTarget.src = "/images/brands/ray-ban.jpg"
        }}
      />

      {/* Dark Bottom Gradient for Logo & Tagline Legibility */}
      <div className="pb-card-gradient" aria-hidden="true" />

      {/* Card Content Overlay */}
      <div className="pb-card-overlay">
        <div className="pb-card-logo-container" aria-label={brand.name}>
          {brand.logo && !logoError ? (
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="pb-card-logo-img"
              loading="lazy"
              draggable="false"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="pb-card-logo-fallback">{brand.name}</span>
          )}
        </div>

        {/* Subtle Accent Divider Line */}
        <div className="pb-card-divider" aria-hidden="true" />

        {/* Uppercase Tagline */}
        <p className="pb-card-tagline">{brand.tagline}</p>
      </div>
    </Link>
  )
}

/* ════════════════════════════════════════════════════════════════
   Main Trending Brands Carousel
   - Auto slide card-by-card
   - Pauses for 0.5s when slide stops, then continues repeat
   - Smooth infinite loop at end
   - Pause on hover, drag or tab hidden
════════════════════════════════════════════════════════════════ */
export default function PremiumBrandsCarousel() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeDot, setActiveDot] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const isHoveredRef = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const animFrameRef = useRef(null)
  const isAnimatingRef = useRef(false)
  const autoSlideTimerRef = useRef(null)

  // Keep isHoveredRef in sync
  useEffect(() => {
    isHoveredRef.current = isHovered
  }, [isHovered])

  /* Filtered Brand List */
  const visibleBrands = useMemo(() => {
    if (activeFilter === "all") return PREMIUM_BRANDS
    return PREMIUM_BRANDS.filter((b) => b.category === activeFilter)
  }, [activeFilter])

  /* Cloned display brands for seamless infinite loop */
  const displayBrands = useMemo(() => {
    if (visibleBrands.length === 0) return []
    // Ensure sufficient cards for smooth endless looping
    const repeatCount = Math.max(2, Math.ceil(16 / visibleBrands.length))
    const list = []
    for (let r = 0; r < repeatCount; r++) {
      visibleBrands.forEach((brand, idx) => {
        list.push({
          ...brand,
          cloneKey: `${brand.id}-rep${r}-${idx}`,
        })
      })
    }
    return list
  }, [visibleBrands])

  /* Dot Pagination Count */
  const dotCount = useMemo(
    () => Math.max(1, Math.ceil(visibleBrands.length / 5)),
    [visibleBrands.length],
  )

  /* Compute dynamic step and single-set dimensions */
  const getStepMetrics = useCallback(() => {
    const el = trackRef.current
    if (!el) return { cardStep: 285, singleSetWidth: 0 }
    const card = el.querySelector(".pb-card")
    const style = window.getComputedStyle(el)
    const gap = parseFloat(style.columnGap || style.gap) || 20
    const cardWidth = card ? card.offsetWidth : 265
    const cardStep = cardWidth + gap
    const singleSetWidth = visibleBrands.length * cardStep
    return { cardStep, singleSetWidth }
  }, [visibleBrands.length])

  /* Cancel active animation frame */
  const cancelAnimation = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = null
    }
    isAnimatingRef.current = false
  }, [])

  /* Ultra-smooth hardware-accelerated scroll tween */
  const smoothScrollTo = useCallback(
    (targetX, duration = 700) => {
      return new Promise((resolve) => {
        const el = trackRef.current
        if (!el) {
          resolve()
          return
        }

        cancelAnimation()
        isAnimatingRef.current = true

        const startXPos = el.scrollLeft
        const distance = targetX - startXPos

        if (Math.abs(distance) < 0.5) {
          el.scrollLeft = targetX
          isAnimatingRef.current = false
          resolve()
          return
        }

        let startTime = null

        // easeInOutCubic: gentle start, silky fluid glide, soft cushioned landing
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp
          const elapsed = timestamp - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = easeInOutCubic(progress)

          el.scrollLeft = startXPos + distance * eased

          if (progress < 1) {
            animFrameRef.current = requestAnimationFrame(step)
          } else {
            el.scrollLeft = targetX
            isAnimatingRef.current = false
            animFrameRef.current = null
            resolve()
          }
        }

        animFrameRef.current = requestAnimationFrame(step)
      })
    },
    [cancelAnimation],
  )

  /* Continuous Auto-Slide loop: smooth slide -> stop 0.5s -> repeat */
  const runSlideLoop = useCallback(() => {
    if (autoSlideTimerRef.current) {
      clearTimeout(autoSlideTimerRef.current)
    }

    autoSlideTimerRef.current = setTimeout(
      async () => {
        const el = trackRef.current
        if (
          !el ||
          isHoveredRef.current ||
          isDragging.current ||
          document.visibilityState === "hidden"
        ) {
          return
        }

        const { cardStep, singleSetWidth } = getStepMetrics()
        if (!cardStep) return

        // Seamless infinite normalize before slide if past one full set
        if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth) {
          el.scrollLeft -= singleSetWidth
        }

        const targetX = el.scrollLeft + cardStep

        // 1. Silky smooth glide to next card (700ms)
        await smoothScrollTo(targetX, 700)

        // 2. Seamless infinite normalize after arrival if reached boundary
        if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth) {
          el.scrollLeft -= singleSetWidth
        }

        // 3. Slide has stopped: wait 0.5s (500ms), then continue repeating
        if (
          !isHoveredRef.current &&
          !isDragging.current &&
          document.visibilityState === "visible"
        ) {
          runSlideLoop()
        }
      },
      500,
    )
  }, [getStepMetrics, smoothScrollTo])

  /* Sync Scroll Boundaries and Active Dot */
  const syncScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el

    const { singleSetWidth } = getStepMetrics()
    const effectiveWidth =
      singleSetWidth > 0 ? singleSetWidth : scrollWidth - clientWidth
    if (effectiveWidth > 0) {
      const normalized = scrollLeft % effectiveWidth
      const pct = Math.max(0, Math.min(1, normalized / effectiveWidth))
      setActiveDot(Math.min(dotCount - 1, Math.round(pct * (dotCount - 1))))
    }
  }, [dotCount, getStepMetrics])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    syncScroll()
    el.addEventListener("scroll", syncScroll, { passive: true })
    window.addEventListener("resize", syncScroll)
    return () => {
      el.removeEventListener("scroll", syncScroll)
      window.removeEventListener("resize", syncScroll)
    }
  }, [syncScroll])

  /* Reset Scroll and initialize auto-slide on filter change or mount */
  useEffect(() => {
    cancelAnimation()
    if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)

    if (trackRef.current) {
      trackRef.current.scrollLeft = 0
    }
    setActiveDot(0)

    // Start auto-slide after initial 500ms pause
    runSlideLoop()

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        runSlideLoop()
      } else {
        cancelAnimation()
        if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      cancelAnimation()
      if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [activeFilter, cancelAnimation, runSlideLoop])

  /* Dot Click Jump */
  const jumpToDot = useCallback(
    async (idx) => {
      const el = trackRef.current
      if (!el) return
      cancelAnimation()
      if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)

      const { singleSetWidth } = getStepMetrics()
      const max =
        singleSetWidth > 0 ? singleSetWidth : el.scrollWidth - el.clientWidth
      const targetX = (idx / (dotCount - 1 || 1)) * max
      await smoothScrollTo(targetX, 750)

      // Resume auto-slide after 0.5s pause if not hovered
      if (!isHoveredRef.current) {
        runSlideLoop()
      }
    },
    [cancelAnimation, dotCount, getStepMetrics, smoothScrollTo, runSlideLoop],
  )

  /* Smooth Mouse Pointer Drag */
  const onPointerDown = (e) => {
    cancelAnimation()
    if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = trackRef.current?.scrollLeft ?? 0
    trackRef.current?.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return
    const dist = e.pageX - startX.current
    trackRef.current.scrollLeft = scrollStart.current - dist
  }

  const onPointerUp = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    try {
      trackRef.current?.releasePointerCapture(e.pointerId)
    } catch {}

    const el = trackRef.current
    if (el) {
      const { singleSetWidth } = getStepMetrics()
      if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth) {
        el.scrollLeft -= singleSetWidth
      } else if (singleSetWidth > 0 && el.scrollLeft < 0) {
        el.scrollLeft += singleSetWidth
      }
    }

    // Resume auto-slide after 0.5s pause if not hovered
    if (!isHoveredRef.current) {
      runSlideLoop()
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    isHoveredRef.current = true
    if (autoSlideTimerRef.current) clearTimeout(autoSlideTimerRef.current)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    isHoveredRef.current = false
    runSlideLoop()
  }

  return (
    <section className="pb-section" aria-labelledby="pb-heading">
      {/* ── Centered Heading Area ── */}
      <div className="pb-heading-area">
        <h2 className="pb-title" id="pb-heading">
          Trending <em>Brands</em>
        </h2>
        <p className="pb-subtitle">Discover the Most Trending Eyewear Brands</p>
        <div className="pb-accent-bar" aria-hidden="true" />

        {/* ── Category Filter Pills ── */}
        <div
          className="pb-filters"
          role="group"
          aria-label="Filter brands by category"
        >
          {BRAND_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`pb-filter-btn${
                activeFilter === f.id ? " active" : ""
              }`}
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Carousel Wrapper with hover pause ── */}
      <div
        className="pb-carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Arched Cards Track */}
        <div
          ref={trackRef}
          className="pb-track"
          role="region"
          aria-label="Trending brands carousel"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {displayBrands.map((brand) => (
            <BrandCard key={brand.cloneKey} brand={brand} />
          ))}
        </div>
      </div>

      {/* ── Sliding Dot Pagination ── */}
      {dotCount > 1 && (
        <div className="pb-dots" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={`pb-dot${activeDot === i ? " active" : ""}`}
              onClick={() => jumpToDot(i)}
              aria-selected={activeDot === i}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
