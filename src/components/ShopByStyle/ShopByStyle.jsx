import { useState, useRef, useEffect, useCallback } from "react"
import { Link } from "react-router"
import { ChevronLeft, ChevronRight, Heart, Play, Pause } from "lucide-react"
import { useWishlist } from "../../context/WishlistContext"
import { shopByStyleItems } from "../../data/shopByStyleData"
import "./ShopByStyle.css"

export default function ShopByStyle() {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const trackRef = useRef(null)
  const videoRefs = useRef({})
  const userPausedRef = useRef({})
  const [playingStates, setPlayingStates] = useState({})
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Check scroll boundary to update button states
  const checkScrollBoundaries = useCallback(() => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    checkScrollBoundaries()
    track.addEventListener("scroll", checkScrollBoundaries, { passive: true })
    window.addEventListener("resize", checkScrollBoundaries)

    return () => {
      track.removeEventListener("scroll", checkScrollBoundaries)
      window.removeEventListener("resize", checkScrollBoundaries)
    }
  }, [checkScrollBoundaries])

  // IntersectionObserver to auto-play visible cards and pause off-screen cards
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.videoId
        const video = videoRefs.current[id]
        if (!video) return

        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          // If the user hasn't explicitly clicked pause, auto-play
          if (!userPausedRef.current[id]) {
            const playPromise = video.play()
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setPlayingStates((prev) => ({ ...prev, [id]: true }))
                })
                .catch(() => {
                  // Autoplay blocked or interrupted
                  setPlayingStates((prev) => ({ ...prev, [id]: false }))
                })
            }
          }
        } else {
          // Off-screen: pause to conserve CPU/GPU
          video.pause()
          setPlayingStates((prev) => ({ ...prev, [id]: false }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: trackRef.current,
      threshold: [0.1, 0.45, 0.8],
    })

    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) observer.observe(videoEl)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleScroll = (direction) => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector(".shop-by-style-card")
    const cardWidth = card ? card.offsetWidth + 20 : 300
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2

    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  const handleTogglePlay = (id, e) => {
    e.preventDefault()
    e.stopPropagation()

    const video = videoRefs.current[id]
    if (!video) return

    if (video.paused) {
      userPausedRef.current[id] = false
      video
        .play()
        .then(() => {
          setPlayingStates((prev) => ({ ...prev, [id]: true }))
        })
        .catch(() => {})
    } else {
      userPausedRef.current[id] = true
      video.pause()
      setPlayingStates((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleWishlistClick = (item, e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(item)
  }

  return (
    <section
      className="shop-by-style-section"
      aria-labelledby="shop-by-style-heading"
    >
      <div className="shop-by-style-container">
        {/* Section Header */}
        <div className="shop-by-style-header">
          <div className="shop-by-style-title-group">
            <h2 id="shop-by-style-heading">Shop By Style</h2>
            <p className="shop-by-style-subtitle">Do more, Be more</p>
          </div>

          <div className="shop-by-style-actions">
            <button
              type="button"
              className="shop-by-style-nav-btn"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous products"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="shop-by-style-nav-btn"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next products"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
            <Link to="/sunglasses" className="shop-by-style-view-all">
              View All
            </Link>
          </div>
        </div>

        {/* Carousel Row */}
        <div className="shop-by-style-carousel-wrapper">
          <div className="shop-by-style-track" ref={trackRef}>
            {shopByStyleItems.map((item) => {
              const wishlisted = isWishlisted(item.id)
              const isPlaying = !!playingStates[item.id]

              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="shop-by-style-card"
                  aria-label={`Shop ${item.brand}`}
                >
                  {/* Vertical Video Box */}
                  <div className="shop-by-style-media-box">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[item.id] = el
                      }}
                      data-video-id={item.id}
                      src={item.videoUrl}
                      className="shop-by-style-video"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() =>
                        setPlayingStates((prev) => ({
                          ...prev,
                          [item.id]: true,
                        }))
                      }
                      onPause={() =>
                        setPlayingStates((prev) => ({
                          ...prev,
                          [item.id]: false,
                        }))
                      }
                    />

                    {/* Top-Right Wishlist Heart Button */}
                    <button
                      type="button"
                      className="shop-by-style-wishlist-btn"
                      onClick={(e) => handleWishlistClick(item, e)}
                      aria-label={
                        wishlisted
                          ? `Remove ${item.modelName} from wishlist`
                          : `Add ${item.modelName} to wishlist`
                      }
                    >
                      <Heart
                        size={15}
                        fill={wishlisted ? "#e04b4b" : "none"}
                        color={wishlisted ? "#e04b4b" : "#171c1c"}
                        strokeWidth={wishlisted ? 0 : 2}
                      />
                    </button>

                    {/* Bottom-Right Play/Pause Toggle */}
                    <button
                      type="button"
                      className="shop-by-style-play-btn"
                      onClick={(e) => handleTogglePlay(item.id, e)}
                      aria-label={
                        isPlaying
                          ? `Pause video for ${item.modelName}`
                          : `Play video for ${item.modelName}`
                      }
                    >
                      {isPlaying ? (
                        <Pause size={13} fill="currentColor" />
                      ) : (
                        <Play
                          size={13}
                          fill="currentColor"
                          style={{ marginLeft: 2 }}
                        />
                      )}
                    </button>
                  </div>

                  {/* Product Details Meta */}
                  <div className="shop-by-style-meta">
                    {item.modelName && (
                      <span className="shop-by-style-model">
                        {item.modelName}
                      </span>
                    )}
                    <span className="shop-by-style-brand">{item.brand}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Bottom Controls (Arrows Left, View All Right) */}
        <div className="shop-by-style-mobile-actions">
          <div className="shop-by-style-mobile-nav">
            <button
              type="button"
              className="shop-by-style-nav-btn"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous products"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="shop-by-style-nav-btn"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next products"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
          <Link to="/sunglasses" className="shop-by-style-view-all">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
