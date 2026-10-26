import { Heart, Glasses, ScanEye } from "lucide-react"
import { useNavigate } from "react-router"
import { useWishlist } from "../context/WishlistContext"
import "./ProductCard.css"

export default function ProductCard({ product, onDetails, onTry }) {
  const navigate = useNavigate()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  const handleWishlistClick = (e) => {
    e.stopPropagation()
    toggleWishlist(product)
  }

  const handleTryOnClick = (e) => {
    e.stopPropagation()
    if (onTry) onTry(product)
    else handleCardClick()
  }

  const handleCardClick = () => {
    if (onDetails) onDetails(product)
    else navigate(`/product/${product.id}`)
  }

  const brandName = product.brand || "TITAN"
  const formattedPrice =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : product.price || "₹5,300"

  // Only display top-right 3D pill if product explicitly supports 3D view (like Card 2 in reference screenshot)
  const show3DPill = Boolean(product.has3D)

  return (
    <article
      className="titan-product-card"
      id={`product-${product.id}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick()
      }}
    >
      {/* Top-Right: 3D View Pill Button (Only when card has 3D View enabled) */}
      {show3DPill && (
        <button
          type="button"
          className="titan-card-3d-btn"
          onClick={handleTryOnClick}
          aria-label={`Open 3D View for ${product.name}`}
        >
          <Glasses size={12} strokeWidth={2} />
          <span>3D View</span>
        </button>
      )}

      {/* Centered Wide Product Image on Pure White Background */}
      <div className="titan-card-media">
        <img
          src={product.image}
          alt={`${brandName} ${product.name}`}
          loading="lazy"
          className="titan-card-img"
        />
      </div>

      {/* Product Details Area */}
      <div className="titan-card-info">
        {/* Brand Name (Bold Uppercase) */}
        <div className="titan-card-brand">{brandName}</div>

        {/* Product Title / Description (Clean 1-line truncation) */}
        <h3 className="titan-card-name" title={product.name}>
          {product.name}
        </h3>

        {/* Price & Circular Action Buttons Row */}
        <div className="titan-card-price-row">
          <div className="titan-card-price-wrap">
            <span className="titan-card-price">{formattedPrice}</span>
            <span className="titan-card-tax">Incl of taxes</span>
          </div>

          <div className="titan-card-actions">
            {/* Wishlist Heart Button */}
            <button
              type="button"
              className={`titan-circle-action-btn ${
                wishlisted ? "active" : ""
              }`}
              onClick={handleWishlistClick}
              aria-label={
                wishlisted
                  ? `Remove ${product.name} from wishlist`
                  : `Add ${product.name} to wishlist`
              }
              title={wishlisted ? "Saved in wishlist" : "Add to wishlist"}
            >
              <Heart
                size={14}
                fill={wishlisted ? "#e04b4b" : "none"}
                color={wishlisted ? "#e04b4b" : "#475569"}
                strokeWidth={1.8}
              />
            </button>

            {/* 3D / Try-On Circular Button */}
            <button
              type="button"
              className="titan-circle-action-btn"
              onClick={handleTryOnClick}
              aria-label={`Virtual Try-On for ${product.name}`}
              title="Virtual 3D Try-On"
            >
              <ScanEye size={14} color="#475569" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Bottom Offer Tag */}
        <div className="titan-card-offer">
          <span className="titan-card-offer-bullet">●</span>
          <span className="titan-card-offer-text">2 Offers Available</span>
        </div>
      </div>
    </article>
  )
}
