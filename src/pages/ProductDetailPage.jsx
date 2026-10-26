import { useState, useRef, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router"
import {
  Heart,
  Glasses,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Award,
  Tag,
  Lock,
  Truck,
  Clock,
  ArrowLeftRight,
  Home,
  Users,
  Bell,
  ChevronDown,
  ChevronUp,
  Share2,
  MapPin,
  Check,
} from "lucide-react"
import { products } from "../data/products"
import { useWishlist } from "../context/WishlistContext"
import { useHomeLoader } from "../context/LoadingScreenContext"
import { buildWhatsAppUrl } from "../data/config"
import "./ProductDetailPage.css"

const BRAND_LOGOS = {
  TITAN: "/logos/processed/titan-eyewear-dark.png",
  "CALVIN KLEIN": "/logos/processed/calvin-klein.png",
  CARRERA: "/logos/processed/carrera.png",
  BOSS: "/logos/processed/boss.png",
  "RAY-BAN": "/logos/processed/ray-ban.png",
  "RAY BAN": "/logos/processed/ray-ban.png",
  OAKLEY: "/logos/processed/oakley.png",
  "TOM FORD": "/logos/processed/tom-ford.png",
  VERSACE: "/logos/processed/versace.png",
  PERSOL: "/logos/processed/persol.png",
  ARNETTE: "/logos/processed/arnette.png",
  COACH: "/logos/processed/coach.png",
  DIESEL: "/logos/processed/diesel-eyewear.png",
  "DOLCE & GABBANA": "/logos/processed/dolce-gabbana.png",
  "EMPORIO ARMANI": "/logos/processed/emporio-armani.png",
  FCUK: "/logos/processed/fcuk-vision.png",
  FOSSIL: "/logos/processed/fossil.png",
  "HACKETT LONDON": "/logos/processed/hackett-london.png",
  MONTBLANC: "/logos/processed/montblanc.png",
  NAUTICA: "/logos/processed/nautica.png",
  NIKE: "/logos/processed/nike-vision.png",
  POLAROID: "/logos/processed/polaroid.png",
  SILHOUETTE: "/logos/processed/silhouette.png",
  "UNITED COLORS OF BENETTON": "/logos/processed/united-colors-benetton.png",
  BENETTON: "/logos/processed/united-colors-benetton.png",
  VOGUE: "/logos/processed/vogue-eyewear.png",
  WEB: "/logos/processed/web-eyewear-dark.png",
  "WILLIAM MORRIS": "/logos/processed/william-morris.png",
  XIT: "/logos/processed/xit-eyewear-dark.png",
}

function getBrandLogo(brand) {
  if (!brand) return null
  const key = brand.toUpperCase().trim()
  if (BRAND_LOGOS[key]) return BRAND_LOGOS[key]
  for (const [k, v] of Object.entries(BRAND_LOGOS)) {
    if (key.includes(k) || k.includes(key)) return v
  }
  return null
}

function parseDimensions(sizeStr, eyeSize) {
  const parts = sizeStr ? sizeStr.split(/[–\-—\s/]+/).filter(Boolean) : []
  const lens = eyeSize || parts[0] || "52"
  const bridge = parts[1] || "18"
  const temple = parts[2] || "140"

  const lensNum = parseInt(lens, 10)
  let frameSize = "Medium"
  if (!isNaN(lensNum)) {
    if (lensNum < 50) frameSize = "Small"
    else if (lensNum > 54) frameSize = "Wide / Large"
    else frameSize = "Medium"
  }
  return { frameSize, lens, bridge, temple }
}

function getRecommendedFaceShape(shape) {
  const s = (shape || "").toLowerCase()
  if (s.includes("square") || s.includes("rectangle"))
    return "Round, Oval, Heart"
  if (s.includes("round") || s.includes("oval"))
    return "Square, Rectangle, Diamond"
  if (s.includes("aviator") || s.includes("pilot")) return "Oval, Heart, Square"
  if (s.includes("cat") || s.includes("butterfly"))
    return "Round, Oval, Diamond"
  if (s.includes("geometric") || s.includes("hexagon")) return "Round, Oval"
  return "Round, Oval, Heart"
}

function getRimType(frameType) {
  const f = (frameType || "").toLowerCase()
  if (f.includes("rimless")) return "Rimless"
  if (f.includes("semi") || f.includes("half")) return "Semi-Rimless"
  return "Full Rim"
}

function getLensDetails(product) {
  const isSun = product.category === "sunglasses"
  const lensColor = isSun
    ? product.color
      ? `${product.color}, Tinted UV400`
      : "Grey / Green Tinted"
    : "Clear Optical / Blue-Cut UV"
  const lensMaterial = "High-Index Polycarbonate / CR-39"
  const lensProperty =
    product.lensOptions && product.lensOptions.length > 0
      ? product.lensOptions.join(", ")
      : isSun
        ? "100% UV Protection, Anti-Glare & Polarized"
        : "100% UV400 Protection, Anti-Scratch & Anti-Reflective"
  return { lensColor, lensMaterial, lensProperty }
}

function getLifestyleImage(product) {
  if (
    product.category === "sunglasses" ||
    (product.brand && product.brand.toUpperCase() === "AKILA")
  ) {
    return "/images/lifestyle/reference-model.jpg"
  }
  if (product.gender === "Women") {
    return "/images/lifestyle/indoor-shot-smart-successful-female-entrepreneur-sharing-ways-success-touching-frames-checking-glasses-smiling-delighted-accomplished-as-gazing-self-assured-camera-against-white-wall.jpg"
  }
  if (product.gender === "Kids") {
    return "/images/featured-collection/kids.jpg"
  }
  if (product.gender === "Men") {
    return "/images/lifestyle/charming-man-with-fashion-glasses.jpg"
  }
  return "/images/lifestyle/reference-model.jpg"
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const { triggerHomeLoader } = useHomeLoader()
  const technicalRef = useRef(null)

  // Scroll to top upon page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Resolve product from inventory data
  const product =
    products.find(
      (p) =>
        p.id === id ||
        p.barcode === id ||
        (p.productCode &&
          p.productCode.replace(/\s+/g, "-").toLowerCase() ===
            (id || "").toLowerCase()),
    ) || products[0]

  const wishlisted = isWishlisted(product.id)

  // Swatches / Colors
  const swatches = product.swatches || [
    {
      name: product.color || "Black",
      hex: "#111827",
      available: product.available !== false,
    },
  ]
  const [selectedColor, setSelectedColor] = useState(
    product.color || (swatches[0] ? swatches[0].name : "Black"),
  )
  const [activeImage, setActiveImage] = useState(product.image)

  // Sync state if product changes
  useEffect(() => {
    setSelectedColor(
      product.color || (swatches[0] ? swatches[0].name : "Black"),
    )
    setActiveImage(product.image)
  }, [product])

  // Compare & Notification States
  const [compareCount, setCompareCount] = useState(0)
  const [notified, setNotified] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  // Pincode Delivery Checker State
  const [pincode, setPincode] = useState("")
  const [deliveryResult, setDeliveryResult] = useState("")

  // Accordion Sections State (Technical Information is OPEN by default matching Reference Screenshot 2)
  const [openSections, setOpenSections] = useState({
    delivery: false,
    technical: true,
    description: false,
    returns: false,
  })

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(""), 3500)
  }

  const handleNotifyMe = () => {
    setNotified(true)
    showToast(
      "✓ Notification active! We'll alert you as soon as this frame is restocked.",
    )
  }

  const handleToggleCompare = () => {
    const nextCount = compareCount === 0 ? 1 : 0
    setCompareCount(nextCount)
    showToast(
      nextCount === 1 ? "Added to compare list" : "Removed from compare list",
    )
  }

  const handleCheckDelivery = (e) => {
    e.preventDefault()
    if (!pincode || pincode.trim().length !== 6) {
      setDeliveryResult(
        "Please enter a valid 6-digit Indian PIN code (e.g. 560001).",
      )
      return
    }
    setDeliveryResult(
      `✓ Delivery available for ${pincode} within 48–72 hours. Cash on delivery & store trial available.`,
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.brand || "ViZHan"} ${product.name}`,
          text: `Check out ${product.name} at ViZHan Plus Optics!`,
          url: window.location.href,
        })
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard?.writeText(window.location.href)
      showToast("✓ Product link copied to clipboard!")
    }
  }

  const handleSizeGuideClick = () => {
    setOpenSections((prev) => ({ ...prev, technical: true }))
    setTimeout(() => {
      technicalRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const brandName = product.brand || "TITAN"
  const brandLogoSrc = getBrandLogo(brandName)
  const isOutOfStock = product.available === false

  const formattedPrice =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : product.price || "₹5,300"

  const whatsAppMessage = `Hello ViZHan Plus Optics, I am inquiring about the ${brandName} ${product.name} (Code: ${product.productCode || product.barcode || ""}). Could you please share live pictures and availability?`

  // Technical calculations derived from inventory data
  const { frameSize, lens, bridge, temple } = parseDimensions(
    product.size,
    product.eyeSize,
  )
  const rimType = getRimType(product.frameType)
  const faceShape = getRecommendedFaceShape(product.shape)
  const { lensColor, lensMaterial, lensProperty } = getLensDetails(product)
  const lifestyleImage = getLifestyleImage(product)

  return (
    <div className="product-detail-fullpage">
      {/* ==========================================================================
          LUXURY BRAND HEADER STRIP (Matches Reference 1: Cartier, Gucci, Prada, etc.)
          ========================================================================== */}
      <div className="pdp-brand-marquee-bar">
        <div className="pdp-container pdp-marquee-inner">
          <div className="pdp-marquee-brands">
            <span>CARTIER</span>
            <span>GUCCI</span>
            <span>PRADA</span>
            <span>MATSUDA</span>
            <span>{brandName.toUpperCase()}</span>
            <span>RAY-BAN</span>
            <span>TOM FORD</span>
          </div>
          <div className="pdp-marquee-right">
            <span className="pdp-badge-status">
              Official Authorized Retailer
            </span>
            <Link to="/catalogue" className="pdp-back-link">
              ← Return to Catalogue
            </Link>
          </div>
        </div>
      </div>

      <div className="pdp-container">
        {/* ==========================================================================
            1. TOP BREADCRUMBS ROW (Matches Reference Screenshot 1)
            ========================================================================== */}
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb navigation">
          <Link
            to="/"
            onClick={triggerHomeLoader}
            className="pdp-breadcrumb-home"
            title="Home"
          >
            <Home size={14} />
          </Link>
          <span className="pdp-breadcrumb-sep">&gt;</span>
          <Link
            to={`/catalogue?brand=${encodeURIComponent(brandName)}`}
            className="pdp-breadcrumb-brand"
          >
            {brandName}
          </Link>
          <span className="pdp-breadcrumb-sep">&gt;</span>
          <span className="pdp-breadcrumb-name">{product.name}</span>
        </nav>

        {/* ==========================================================================
            2. MAIN 2-COLUMN UPPER SECTION (Product Gallery & Information)
            ========================================================================== */}
        <section className="pdp-main-grid" aria-label="Product overview">
          {/* --- LEFT COLUMN: PRODUCT IMAGE GALLERY --- */}
          <div className="pdp-gallery-column">
            <div className="pdp-gallery-card">
              {/* Category / Gender Badge (Top-Left Lavender Pill) */}
              <div className="pdp-gender-badge">
                <Users size={13} />
                <span>{product.gender || "Unisex"}</span>
              </div>

              {/* Centered High-Res Eyewear Image (Uncropped, pure white background) */}
              <div className="pdp-image-container">
                <img
                  src={activeImage || product.image}
                  alt={`${brandName} ${product.name}`}
                  className="pdp-glasses-image"
                />
              </div>

              {/* Bottom-Left Floating Compare Pill */}
              <button
                type="button"
                className="pdp-compare-button"
                onClick={handleToggleCompare}
                aria-label="Compare this frame"
              >
                <ArrowLeftRight size={13} />
                <span>COMPARE</span>
                <span className="pdp-compare-badge">{compareCount}</span>
              </button>
            </div>

            {/* Optional Thumbnail Strip if swatches or multiple angles exist */}
            {swatches.length > 1 && (
              <div className="pdp-thumbnails-strip">
                {swatches.map((swatch, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pdp-thumb-button ${
                      selectedColor === swatch.name ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedColor(swatch.name)
                      if (swatch.image) setActiveImage(swatch.image)
                    }}
                    title={swatch.name}
                  >
                    <img
                      src={swatch.image || product.image}
                      alt={swatch.name}
                      className="pdp-thumb-img"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* --- RIGHT COLUMN: PRODUCT INFORMATION & ACTIONS --- */}
          <div className="pdp-info-column">
            {/* Brand Logo & Name Header + Wishlist Heart Button */}
            <div className="pdp-brand-row">
              <div className="pdp-brand-info">
                {brandLogoSrc ? (
                  <img
                    src={brandLogoSrc}
                    alt={brandName}
                    className="pdp-brand-logo-img"
                  />
                ) : null}
                <span className="pdp-brand-title">{brandName}</span>
              </div>

              <button
                type="button"
                className={`pdp-wishlist-button ${wishlisted ? "active" : ""}`}
                onClick={() => toggleWishlist(product)}
                aria-label={
                  wishlisted
                    ? `Remove ${product.name} from wishlist`
                    : `Add ${product.name} to wishlist`
                }
                title={wishlisted ? "Saved in wishlist" : "Add to wishlist"}
              >
                <Heart
                  size={18}
                  fill={wishlisted ? "#e04b4b" : "none"}
                  color={wishlisted ? "#e04b4b" : "#475569"}
                  strokeWidth={1.8}
                />
              </button>
            </div>

            {/* Large Bold Product Title */}
            <h1 className="pdp-product-title">{product.name}</h1>

            {/* Stock Status Indicator with colored dot */}
            <div className="pdp-stock-row">
              <span
                className={`pdp-stock-dot ${
                  isOutOfStock ? "out-of-stock" : "in-stock"
                }`}
              />
              <span className={isOutOfStock ? "pdp-stock-out" : "pdp-stock-in"}>
                {isOutOfStock ? "Out of stock" : "In stock"}
              </span>
            </div>

            {/* Prominent Price Section */}
            <div className="pdp-price-row">
              <span className="pdp-price-current">{formattedPrice}</span>
              {product.originalPrice && (
                <span className="pdp-price-original">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="pdp-price-tax-note">Incl. of all taxes</span>
            </div>

            {/* Color Selection & Size Guide Row */}
            <div className="pdp-color-heading-row">
              <span className="pdp-color-label">
                COLOR: <strong>{selectedColor.toUpperCase()}</strong>
              </span>
              <button
                type="button"
                className="pdp-size-guide-btn"
                onClick={handleSizeGuideClick}
              >
                SIZE GUIDE
              </button>
            </div>

            {/* Clickable Image Swatches (Matches Reference Screenshot 1) */}
            <div
              className="pdp-swatches-grid"
              role="radiogroup"
              aria-label="Color options"
            >
              {swatches.map((swatch, idx) => {
                const isActive = selectedColor === swatch.name
                const isSwatchUnavailable = swatch.available === false
                return (
                  <button
                    key={swatch.name || idx}
                    type="button"
                    className={`pdp-swatch-box ${isActive ? "active" : ""} ${
                      isSwatchUnavailable ? "out-of-stock" : ""
                    }`}
                    onClick={() => {
                      setSelectedColor(swatch.name)
                      if (swatch.image) setActiveImage(swatch.image)
                    }}
                    title={swatch.name}
                    role="radio"
                    aria-checked={isActive}
                  >
                    <img
                      src={swatch.image || product.image}
                      alt={swatch.name}
                      className="pdp-swatch-glasses-thumb"
                    />
                    {isSwatchUnavailable && (
                      <span className="pdp-swatch-slash" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Dual Action Buttons (In-stock vs Out-of-stock from Reference 1) */}
            {isOutOfStock ? (
              <div className="pdp-actions-row">
                <button type="button" disabled className="pdp-btn-soldout">
                  SOLD OUT
                </button>

                <button
                  type="button"
                  className="pdp-btn-notify"
                  onClick={handleNotifyMe}
                >
                  <Bell size={16} strokeWidth={2.2} />
                  <span>{notified ? "NOTIFICATION SET ✓" : "Notify Me"}</span>
                </button>
              </div>
            ) : (
              <div className="pdp-actions-row">
                <button
                  type="button"
                  className="pdp-btn-tryon"
                  onClick={() => navigate("/virtual-try-on")}
                >
                  <Glasses size={17} strokeWidth={2} />
                  <span>TRY ON IN 3D</span>
                </button>

                <button
                  type="button"
                  className="pdp-btn-primary"
                  onClick={() => navigate("/contact")}
                >
                  <Calendar size={17} strokeWidth={2} />
                  <span>BOOK APPOINTMENT</span>
                </button>
              </div>
            )}

            {/* Product Assurance Section (6-Grid with Purple Circular Icons) */}
            <div className="pdp-assurance-grid">
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <ShieldCheck size={15} strokeWidth={2.2} />
                </span>
                <span>100% Original</span>
              </div>
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <Award size={15} strokeWidth={2.2} />
                </span>
                <span>1 Year Warranty</span>
              </div>
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <Tag size={15} strokeWidth={2.2} />
                </span>
                <span>50+ Brands</span>
              </div>
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <Lock size={15} strokeWidth={2.2} />
                </span>
                <span>100% secure payment</span>
              </div>
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <Truck size={15} strokeWidth={2.2} />
                </span>
                <span>48-72 hours delivery</span>
              </div>
              <div className="pdp-assurance-card">
                <span className="pdp-assurance-icon-circle">
                  <Clock size={15} strokeWidth={2.2} />
                </span>
                <span>30+ Years Experience</span>
              </div>
            </div>

            {/* Bottom Expert Help Bar with WhatsApp Integration */}
            <div className="pdp-expert-bar">
              <div className="pdp-expert-text-group">
                <MessageCircle size={16} color="#0d9488" strokeWidth={2} />
                <span>Need help or live pictures?</span>
                <a
                  href={buildWhatsAppUrl(whatsAppMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="pdp-expert-link"
                >
                  CHAT WITH AN EXPERT
                </a>
              </div>
              <div className="pdp-expert-socials">
                <button
                  type="button"
                  className="pdp-social-btn"
                  onClick={handleShare}
                  title="Share or copy link"
                  aria-label="Share product link"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. LOWER PRODUCT DETAILS SECTION (Matches Reference Screenshot 2)
            Two-column full-page layout:
            - Left: Expandable accordions (Check Delivery, Technical Info, Description, Warranty)
            - Right: Large lifestyle photograph of model wearing style of eyewear
            ========================================================================== */}
        <section
          className="pdp-lower-grid"
          ref={technicalRef}
          aria-label="Specifications and details"
        >
          {/* --- LEFT COLUMN: ACCORDIONS --- */}
          <div className="pdp-accordions-column">
            {/* Accordion 1: CHECK DELIVERY */}
            <div className="pdp-accordion-item">
              <button
                type="button"
                className="pdp-accordion-trigger"
                onClick={() => toggleSection("delivery")}
                aria-expanded={openSections.delivery}
              >
                <span>CHECK DELIVERY</span>
                {openSections.delivery ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {openSections.delivery && (
                <div className="pdp-accordion-content">
                  <form
                    onSubmit={handleCheckDelivery}
                    className="pdp-delivery-form"
                  >
                    <MapPin size={16} className="pdp-pin-icon" />
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 6-digit Pincode"
                      value={pincode}
                      onChange={(e) =>
                        setPincode(e.target.value.replace(/\D/g, ""))
                      }
                      className="pdp-delivery-input"
                    />
                    <button type="submit" className="pdp-delivery-submit-btn">
                      Check
                    </button>
                  </form>
                  {deliveryResult && (
                    <p className="pdp-delivery-result-msg">{deliveryResult}</p>
                  )}
                  <div className="pdp-delivery-perks">
                    <p>• Standard Delivery: 48–72 Hours across India</p>
                    <p>
                      • Free In-Store Trial &amp; Precision Optometrist Fitting
                    </p>
                    <p>• Cash on Delivery &amp; Contactless UPI Available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: TECHNICAL INFORMATION (OPEN BY DEFAULT - Matches Reference 2) */}
            <div className="pdp-accordion-item">
              <button
                type="button"
                className="pdp-accordion-trigger"
                onClick={() => toggleSection("technical")}
                aria-expanded={openSections.technical}
              >
                <span>TECHNICAL INFORMATION</span>
                {openSections.technical ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {openSections.technical && (
                <div className="pdp-accordion-content pdp-specs-table">
                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Frame Size</span>
                    <span className="pdp-spec-value">{frameSize}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Lens Size</span>
                    <span className="pdp-spec-value">{lens} mm</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Nose Bridge Length</span>
                    <span className="pdp-spec-value">{bridge} mm</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Temple Length</span>
                    <span className="pdp-spec-value">{temple} mm</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Brand</span>
                    <span className="pdp-spec-value">{brandName}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Frame Color</span>
                    <span className="pdp-spec-value">
                      {product.color || "Black"}
                    </span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Frame Shape</span>
                    <span className="pdp-spec-value">
                      {product.shape || "Square"}
                    </span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Frame Material</span>
                    <span className="pdp-spec-value">
                      {product.material || "Acetate & Metal"}
                    </span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Frame Style</span>
                    <span className="pdp-spec-value">
                      {product.frameType || "Classic"}
                    </span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Rim Type</span>
                    <span className="pdp-spec-value">{rimType}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Lens Color</span>
                    <span className="pdp-spec-value">{lensColor}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Lens Material</span>
                    <span className="pdp-spec-value">{lensMaterial}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Lens Property</span>
                    <span className="pdp-spec-value">{lensProperty}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Face Shape</span>
                    <span className="pdp-spec-value">{faceShape}</span>
                  </div>

                  <div className="pdp-spec-row">
                    <span className="pdp-spec-label">Ideal Setting</span>
                    <span className="pdp-spec-value">
                      Daily wear, Streetwear, Outdoor/Sport
                    </span>
                  </div>

                  {product.productCode && (
                    <div className="pdp-spec-row">
                      <span className="pdp-spec-label">Product Code</span>
                      <span className="pdp-spec-value">
                        {product.productCode}
                      </span>
                    </div>
                  )}

                  {product.barcode && (
                    <div className="pdp-spec-row">
                      <span className="pdp-spec-label">Barcode / SKU</span>
                      <span className="pdp-spec-value">{product.barcode}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Accordion 3: PRODUCT DESCRIPTION */}
            <div className="pdp-accordion-item">
              <button
                type="button"
                className="pdp-accordion-trigger"
                onClick={() => toggleSection("description")}
                aria-expanded={openSections.description}
              >
                <span>PRODUCT DESCRIPTION</span>
                {openSections.description ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {openSections.description && (
                <div className="pdp-accordion-content">
                  <p className="pdp-desc-text">
                    {product.description ||
                      `${brandName} eyewear crafted with superior precision engineering, ensuring lightweight comfort and ergonomic optical alignment for daily wear.`}
                  </p>
                  {product.features && product.features.length > 0 && (
                    <div className="pdp-features-wrap">
                      <h4 className="pdp-features-heading">
                        Features &amp; Craftsmanship:
                      </h4>
                      <ul className="pdp-features-list">
                        {product.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Accordion 4: RETURNS & WARRANTY */}
            <div className="pdp-accordion-item">
              <button
                type="button"
                className="pdp-accordion-trigger"
                onClick={() => toggleSection("returns")}
                aria-expanded={openSections.returns}
              >
                <span>RETURNS &amp; WARRANTY</span>
                {openSections.returns ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {openSections.returns && (
                <div className="pdp-accordion-content pdp-warranty-cards-group">
                  <div className="pdp-warranty-card">
                    <strong className="pdp-warranty-heading">
                      1 Year Official Brand Warranty
                    </strong>
                    <p className="pdp-warranty-desc">
                      100% genuine manufacturer guarantee covering frame build,
                      precision barrel hinges, and surface finishing against
                      manufacturing defects.
                    </p>
                  </div>
                  <div className="pdp-warranty-card">
                    <strong className="pdp-warranty-heading">
                      14-Day Free Exchange &amp; Return
                    </strong>
                    <p className="pdp-warranty-desc">
                      Try your frames with complete peace of mind. Exchange or
                      return unworn frames with original packaging within 14
                      days at any ViZHan Plus Optics boutique or request
                      doorstep return.
                    </p>
                  </div>
                  <div className="pdp-warranty-card">
                    <strong className="pdp-warranty-heading">
                      Lifetime Free In-Store Maintenance
                    </strong>
                    <p className="pdp-warranty-desc">
                      Complimentary ultrasonic cleaning, screw adjustment,
                      temple tightening, and nose pad replacement at all our
                      optical locations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* --- RIGHT COLUMN: LIFESTYLE PHOTOGRAPH (Matches Reference 2) --- */}
          <div className="pdp-lifestyle-column">
            <div className="pdp-lifestyle-card">
              <img
                src={lifestyleImage}
                alt={`${brandName} eyewear lifestyle editorial`}
                className="pdp-lifestyle-image"
              />
              <div className="pdp-lifestyle-overlay">
                <span className="pdp-lifestyle-brand-badge">{brandName}</span>
                <span className="pdp-lifestyle-subtitle">
                  Designed for effortless distinction
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dynamic Toast Feedback Alert */}
      {toastMessage && (
        <div className="pdp-toast-alert" role="status">
          <Check size={15} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}
