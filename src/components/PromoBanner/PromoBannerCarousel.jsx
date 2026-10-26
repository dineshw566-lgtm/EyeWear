import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./PromoBannerCarousel.css"

/* ════════════════════════════════════════════════════════════════
   VIZHEN PLUS OPTICS — OFFICIAL PROMOTIONAL BANNERS CAROUSEL
   Creatives from /banners/2nd banners/ (1.png, 2.png, 3.png)
════════════════════════════════════════════════════════════════ */

const SECOND_BANNER_SLIDES = [
  {
    id: "promo-banner-precision",
    image: "/banners/2nd%20banners/1.png",
    fallback: "/banners/2nd-banner-1.png",
    alt: "viZHən PLUS OPTICS — Precision in Every Detail",
    link: "/eyeglasses",
  },
  {
    id: "promo-banner-style",
    image: "/banners/2nd%20banners/2.png",
    fallback: "/banners/2nd-banner-2.png",
    alt: "viZHən PLUS OPTICS — Style That Brings Us Closer",
    link: "/catalogue",
  },
  {
    id: "promo-banner-frame-for-every-you",
    image: "/banners/2nd%20banners/3.png",
    fallback: "/banners/2nd-banner-3.png",
    alt: "viZHən PLUS OPTICS — A Frame For Every You",
    link: "/sunglasses",
  },
]

export default function PromoBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const slideCount = SECOND_BANNER_SLIDES.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Automatic slide rotation every 5 seconds (pauses when hovered or tab hidden)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsPaused(true)
      } else {
        setIsPaused(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prevSlide()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      nextSlide()
    }
  }

  return (
    <section
      className="promo-banners-section"
      aria-label="viZHən PLUS OPTICS Promotional Banners"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ══════════════════════════════════════════════════════════════
          PROMOTIONAL BANNER CAROUSEL
          Carousel with original banner creatives from public/banners/2nd banners/
          Smooth transitions, navigation arrows, pagination dots & hover pause
          ══════════════════════════════════════════════════════════════ */}
      <div className="promo-banner-second-container">
        <div
          className="promo-banner-second-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="promo-banner-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SECOND_BANNER_SLIDES.map((slide, index) => {
              const isCurrent = index === currentIndex
              return (
                <Link
                  key={slide.id}
                  to={slide.link}
                  className="promo-banner-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slideCount}: ${slide.alt}`}
                  aria-hidden={!isCurrent}
                  tabIndex={isCurrent ? 0 : -1}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="promo-banner-slide-img"
                    onError={(e) => {
                      if (slide.fallback) {
                        e.currentTarget.src = slide.fallback
                      }
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="promo-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous promotional banner slide"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            className="promo-nav-btn next"
            onClick={nextSlide}
            aria-label="Next promotional banner slide"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div
          className="promo-indicators"
          role="tablist"
          aria-label="Promotional slide navigation"
        >
          {SECOND_BANNER_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={slide.id}
                type="button"
                className={`promo-indicator-dot ${isActive ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={isActive}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
