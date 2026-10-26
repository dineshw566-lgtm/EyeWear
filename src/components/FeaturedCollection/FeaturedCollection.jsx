import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import "./FeaturedCollection.css"

export default function FeaturedCollection() {
  return (
    <section
      className="featured-collection-section"
      aria-label="Featured Collection: Frames for real personalities"
    >
      <div className="featured-collection-container">
        {/* Section Header */}
        <div className="featured-collection-header">
          <div className="featured-header-left">
            <div className="featured-eyebrow-row">
              <span className="featured-eyebrow">FEATURED COLLECTION</span>
              <span className="featured-eyebrow-line" aria-hidden="true" />
            </div>
            <h2 className="featured-main-title">
              Frames <span className="featured-title-italic">for</span> real
              personalities.
            </h2>
          </div>

          <div className="featured-header-right">
            <p className="featured-description">
              Distinctive designs for the way you see the world. Eyewear that
              complements your story, every day.
            </p>
            <div className="featured-desc-accent-bar" aria-hidden="true" />
          </div>
        </div>

        {/* 3-Card Asymmetric Grid: Women, Men, Child */}
        <div className="featured-collection-grid">
          {/* 1. Left Tall Card: Women */}
          <Link
            to="/eyeglasses?gender=Women"
            className="featured-card featured-card-tall featured-card-women"
            aria-label="Explore Women: Sculptural silhouettes and graceful everyday clarity"
          >
            <div className="featured-card-image-wrap">
              <img
                src="/images/featured-collection/women-v2.jpg"
                alt="Chic woman wearing stylish luxury designer eyeglasses"
                className="featured-card-img"
                loading="eager"
              />
              <div className="featured-card-scrim" />
            </div>

            <div className="featured-card-content">
              <span className="featured-card-badge">THE EDIT</span>
              <h3 className="featured-card-title">Women</h3>
              <p className="featured-card-sub">
                Sculptural silhouettes and everyday clarity.
              </p>
              <div className="featured-card-cta-wrap">
                <span className="featured-pill-btn">
                  <span>EXPLORE WOMEN</span>
                  <ArrowRight size={13} className="featured-btn-arrow" />
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Top Right Card: Men */}
          <Link
            to="/eyeglasses?gender=Men"
            className="featured-card featured-card-men"
            aria-label="Explore Men: Architectural precision and modern sartorial styles"
          >
            <div className="featured-card-image-wrap">
              <img
                src="/images/featured-collection/men-v2.jpg"
                alt="Handsome stylish man wearing modern designer eyeglasses"
                className="featured-card-img"
                loading="lazy"
              />
              <div className="featured-card-scrim" />
            </div>

            <div className="featured-card-content">
              <span className="featured-card-badge">THE EDIT</span>
              <h3 className="featured-card-title">Men</h3>
              <p className="featured-card-sub">
                Architectural precision and modern sartorial styles.
              </p>
              <div className="featured-card-cta-wrap">
                <span className="featured-text-link">
                  <span>EXPLORE MEN</span>
                  <ArrowRight size={13} className="featured-link-arrow" />
                </span>
              </div>
            </div>
          </Link>

          {/* 3. Bottom Right Card: Child */}
          <Link
            to="/kids"
            className="featured-card featured-card-child"
            aria-label="Explore Child: Durable, featherlight frames built for bright young minds"
          >
            <div className="featured-card-image-wrap">
              <img
                src="/images/featured-collection/child-v2.jpg"
                alt="Smiling happy child wearing modern lightweight optical glasses"
                className="featured-card-img"
                loading="lazy"
              />
              <div className="featured-card-scrim" />
            </div>

            <div className="featured-card-content">
              <span className="featured-card-badge">THE EDIT</span>
              <h3 className="featured-card-title">Child</h3>
              <p className="featured-card-sub">
                Durable, featherlight frames built for bright young minds.
              </p>
              <div className="featured-card-cta-wrap">
                <span className="featured-text-link">
                  <span>EXPLORE CHILD</span>
                  <ArrowRight size={13} className="featured-link-arrow" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
