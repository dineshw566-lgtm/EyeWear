import { useEffect, useRef } from "react"
import { Link } from "react-router"
import "./HeroSlider.css"

export default function HeroSlider() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure DOM properties are set for strict mobile & desktop autoplay policy
    video.defaultMuted = true
    video.muted = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may wait for user interaction or page focus; silent catch prevents console error
      })
    }
  }, [])

  return (
    <section
      className="hero hero-slider"
      tabIndex={0}
      aria-label="Vizhen Plus Optics Hero Section"
    >
      {/* Background Video */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/videos/BG%20VIDEO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle cinematic overlay for readability while preserving luxury atmosphere */}
      <div className="hero-cinematic-overlay" />

      {/* Centered Moon Shoe style Hero Content */}
      <div className="hero-centered-content">
        <h1 className="hero-main-heading">MADE TO BE SEEN</h1>
        <p className="hero-subtitle">Luxury eyewear. Timeless vision.</p>
        <div className="hero-cta-group">
          <Link to="/eyeglasses" className="hero-btn hero-btn-primary">
            Explore Collection
          </Link>
          <Link to="/sunglasses" className="hero-btn hero-btn-secondary">
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  )
}
