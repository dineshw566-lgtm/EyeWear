import { useMemo, useState, useEffect } from "react"
import {
  SlidersHorizontal,
  X,
  Glasses,
  ArrowUpRight,
  ChevronDown,
  Search,
} from "lucide-react"
import { useSearchParams, useNavigate } from "react-router"
import ProductCard from "../components/ProductCard"
import TryOnModal from "../components/TryOnModal"
import { getProducts } from "../data/products"
import { BRAND_FILTERS } from "../data/brandsData"
import usePageMeta from "../hooks/usePageMeta"
import "./CataloguePage.css"

const copy = {
  all: [
    "Product Catalogue",
    "Curated eyewear for every perspective.",
    "Eyeglasses that are lightweight, and perfect for daily use.",
  ],
  eyeglasses: [
    "Switchers",
    "Everyday frames, distinctly yours.",
    "Eyeglasses that are lightweight, and perfect for daily use.",
  ],
  sunglasses: [
    "Sunglasses",
    "Shade, with a point of view.",
    "UV-protective silhouettes with considered proportions and expressive colour.",
  ],
  kids: [
    "Kids",
    "Built for bright young minds.",
    "Comfortable, resilient frames sized for busy days, growing faces and big ideas.",
  ],
  "new-arrivals": [
    "Switchers",
    "Fresh perspectives in modern eyewear.",
    "Eyeglasses that are lightweight, and perfect for daily use.",
  ],
  brands: [
    "Brand Directory",
    "85 World-class optical and lens brands.",
    "Explore authentic frames from Luxottica, Safilo, Life Style, Luxury, Designer, Indian Brands and Precision Lenses.",
  ],
  "smart-glasses": [
    "Smart Glasses",
    "Intelligent optics for modern living.",
    "Voice, audio and augmented vision frames with seamlessly integrated technology.",
  ],
  "powered-sunglasses": [
    "Powered Sunglasses",
    "Prescription sun protection without compromise.",
    "UV400 polarized and tinted prescription optics tailored to your exact visual needs.",
  ],
  "computer-glasses": [
    "Computer Glasses",
    "Relief from digital screen fatigue.",
    "Precision blue-light filtering lenses designed for prolonged screen work and visual comfort.",
  ],
  "reading-glasses": [
    "Reading Glasses",
    "Clarity for every page and detail.",
    "Ergonomically balanced readers with crystal-clear magnification and timeless aesthetics.",
  ],
}

export default function CataloguePage({ category = "eyeglasses" }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()
  const [search, setSearch] = useState(
    searchParams.get("q") || searchParams.get("brand") || "",
  )
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") || "All",
  )
  const [selectedBrandCategory, setSelectedBrandCategory] = useState(
    searchParams.get("category") || "all",
  )
  const [gender, setGender] = useState("All")
  const [frameType, setFrameType] = useState(searchParams.get("type") || "All")
  const [shape, setShape] = useState("All")
  const [material, setMaterial] = useState("All")
  const [price, setPrice] = useState("All")
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [tryOnOnly, setTryOnOnly] = useState(false)
  const [tryOn, setTryOn] = useState(null)

  useEffect(() => {
    const q = searchParams.get("q") || ""
    const b = searchParams.get("brand") || ""
    const cat = searchParams.get("category") || "all"
    const lens = searchParams.get("lens") || ""
    const type = searchParams.get("type") || ""

    if (b) setSelectedBrand(b)
    else setSelectedBrand("All")

    if (cat) setSelectedBrandCategory(cat)
    else setSelectedBrandCategory("all")

    if (type) setFrameType(type)

    if (q) setSearch(q)
    else if (lens) setSearch(lens)
    else if (!b) setSearch("")
  }, [searchParams])

  const isExclusive = searchParams.get("collection") === "exclusive"
  const EXCLUSIVE_BRANDS = [
    "Atelier Edit",
    "Mag by Titan",
    "Miu Miu",
    "Ted Baker",
    "Tom Ford",
    "Vetra",
    "Vizhen Air",
    "WEB Eyewear",
    "William Morris",
  ]

  const [title, , intro] = copy[category] || copy.eyeglasses
  usePageMeta(title, intro)
  const base = getProducts(category)

  const visible = useMemo(() => {
    const filtered = base.filter((p) => {
      const pBrand = p.brand || ""

      // 1. Text Search
      const matchesSearch =
        search === "" ||
        `${p.name} ${p.color} ${p.shape} ${p.material} ${pBrand} ${p.barcode || ""} ${p.productCode || ""} ${p.frameType || ""} ${p.brandType || ""}`
          .toLowerCase()
          .includes(search.toLowerCase())

      // 2. Brand Name Filter
      const normPBrand = pBrand.toLowerCase().replace(/[^a-z0-9]/g, "")
      const normSelected = selectedBrand.toLowerCase().replace(/[^a-z0-9]/g, "")
      const matchesBrand =
        selectedBrand === "All" ||
        pBrand.toLowerCase() === selectedBrand.toLowerCase() ||
        normPBrand === normSelected ||
        normPBrand.includes(normSelected) ||
        normSelected.includes(normPBrand)

      // 3. Brand Category Filter
      const matchesBrandCategory =
        selectedBrandCategory === "all" ||
        p.brandCategory === selectedBrandCategory ||
        (selectedBrandCategory === "lenses" &&
          p.lensOptions &&
          p.lensOptions.length > 0) ||
        (p.brandType &&
          p.brandType.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            selectedBrandCategory.toLowerCase().replace(/[^a-z0-9]/g, ""))

      // 4. Gender Filter
      const matchesGender =
        gender === "All" ||
        p.gender === gender ||
        (p.gender === "Unisex" && (gender === "Men" || gender === "Women"))

      // 5. Frame Type Filter (supports "Switchers" / "Clip On")
      const matchesFrameType =
        frameType === "All" ||
        p.frameType === frameType ||
        (frameType === "Switchers" &&
          (p.frameType === "Switchers" ||
            p.frameType === "Clip On" ||
            p.name.toLowerCase().includes("clip") ||
            p.name.toLowerCase().includes("switcher") ||
            p.material.toLowerCase().includes("clip")))

      // 6. Shape Filter
      const matchesShape = shape === "All" || p.shape === shape

      // 7. Material Filter
      const matchesMaterial = material === "All" || p.material === material

      // 8. Price Filter
      const matchesPrice =
        price === "All" ||
        (price === "Under ₹4,000"
          ? p.price < 4000
          : price === "₹4,000 - ₹8,000"
            ? p.price >= 4000 && p.price <= 8000
            : p.price > 8000)

      // 9. Exclusive Collection Flag
      const matchesCollection =
        !isExclusive || EXCLUSIVE_BRANDS.includes(p.brand)

      // 10. Virtual Try-On filter
      const matchesTryOn = !tryOnOnly || p.featured

      return (
        matchesSearch &&
        matchesBrand &&
        matchesBrandCategory &&
        matchesGender &&
        matchesFrameType &&
        matchesShape &&
        matchesMaterial &&
        matchesPrice &&
        matchesCollection &&
        matchesTryOn
      )
    })

    return [...filtered].sort((a, b) =>
      sort === "price-low"
        ? a.price - b.price
        : sort === "price-high"
          ? b.price - a.price
          : sort === "new"
            ? Number(b.featured) - Number(a.featured)
            : Number(b.featured) - Number(a.featured),
    )
  }, [
    base,
    search,
    selectedBrand,
    selectedBrandCategory,
    gender,
    frameType,
    shape,
    material,
    price,
    sort,
    isExclusive,
    tryOnOnly,
  ])

  const clear = () => {
    setSearch("")
    setSelectedBrand("All")
    setSelectedBrandCategory("all")
    setGender("All")
    setFrameType("All")
    setShape("All")
    setMaterial("All")
    setPrice("All")
    setTryOnOnly(false)
    setSearchParams({})
  }

  // Active filter chip items matching reference screenshot (e.g. "Switchers ✕")
  const activeChips = useMemo(() => {
    const list = []
    if (frameType !== "All") {
      list.push({
        id: "frameType",
        label: frameType === "Clip On" ? "Switchers" : frameType,
        onRemove: () => setFrameType("All"),
      })
    }
    if (selectedBrand !== "All") {
      list.push({
        id: "brand",
        label: selectedBrand,
        onRemove: () => setSelectedBrand("All"),
      })
    }
    if (selectedBrandCategory !== "all") {
      const found = BRAND_FILTERS.find((b) => b.id === selectedBrandCategory)
      list.push({
        id: "brandCategory",
        label: found ? found.label : selectedBrandCategory,
        onRemove: () => setSelectedBrandCategory("all"),
      })
    }
    if (gender !== "All") {
      list.push({
        id: "gender",
        label: gender,
        onRemove: () => setGender("All"),
      })
    }
    if (shape !== "All") {
      list.push({
        id: "shape",
        label: shape,
        onRemove: () => setShape("All"),
      })
    }
    if (material !== "All") {
      list.push({
        id: "material",
        label: material,
        onRemove: () => setMaterial("All"),
      })
    }
    if (price !== "All") {
      list.push({
        id: "price",
        label: price,
        onRemove: () => setPrice("All"),
      })
    }
    if (search) {
      list.push({
        id: "search",
        label: `"${search}"`,
        onRemove: () => setSearch(""),
      })
    }
    if (tryOnOnly) {
      list.push({
        id: "tryon",
        label: "3D Try On",
        onRemove: () => setTryOnOnly(false),
      })
    }
    return list
  }, [
    frameType,
    selectedBrand,
    selectedBrandCategory,
    gender,
    shape,
    material,
    price,
    search,
    tryOnOnly,
  ])

  // Exact header title matching reference screenshot: "Switchers Eyeglasses"
  const displayTitle = useMemo(() => {
    if (
      frameType === "Switchers" ||
      frameType === "Clip On" ||
      search.toLowerCase().includes("switch") ||
      category === "eyeglasses" ||
      category === "new-arrivals"
    ) {
      return "Switchers Eyeglasses"
    }
    if (selectedBrand !== "All") {
      return `${selectedBrand} Eyeglasses`
    }
    return title.includes("Glasses") || title.includes("Sunglasses")
      ? title
      : `${title} Eyeglasses`
  }, [frameType, search, selectedBrand, category, title])

  const displaySubtitle = useMemo(() => {
    if (
      frameType === "Switchers" ||
      frameType === "Clip On" ||
      category === "eyeglasses" ||
      category === "new-arrivals"
    ) {
      return "Eyeglasses that are lightweight, and perfect for daily use."
    }
    return (
      intro || "Eyeglasses that are lightweight, and perfect for daily use."
    )
  }, [frameType, category, intro])

  const options = (key) => [
    "All",
    ...new Set(base.map((item) => item[key]).filter(Boolean)),
  ]

  const availableBrands = useMemo(() => {
    let pool = base
    if (selectedBrandCategory !== "all") {
      pool = pool.filter(
        (p) =>
          p.brandCategory === selectedBrandCategory ||
          (p.brandType &&
            p.brandType.toLowerCase().replace(/[^a-z0-9]/g, "") ===
              selectedBrandCategory.toLowerCase().replace(/[^a-z0-9]/g, "")),
      )
    }
    const set = new Set(pool.map((item) => item.brand).filter(Boolean))
    return ["All", ...Array.from(set).sort()]
  }, [base, selectedBrandCategory])

  return (
    <div className="catalogue-page-titan">
      {/* ==========================================================================
          1. TOP CONTROL BAR (Matches Titan Eyeplus Reference Screenshot)
          ========================================================================== */}
      <div className="catalogue-titan-topbar">
        <div className="catalogue-topbar-row">
          {/* Left: Show Filters Button */}
          <button
            type="button"
            className="catalogue-filter-toggle-btn"
            onClick={() => setFiltersOpen(true)}
            aria-label="Open filter options"
          >
            <SlidersHorizontal size={15} strokeWidth={2.2} />
            <span>Show Filters</span>
            {activeChips.length > 0 && (
              <span className="catalogue-filter-badge">
                {activeChips.length}
              </span>
            )}
          </button>

          {/* Center: Try It On You Interactive Pill Switch */}
          <button
            type="button"
            className={`catalogue-tryon-toggle-btn ${
              tryOnOnly ? "active" : ""
            }`}
            onClick={() => setTryOnOnly(!tryOnOnly)}
            title="Toggle Try It On You Virtual Filter"
          >
            <span className="catalogue-tryon-icon-wrap">
              <Glasses size={17} strokeWidth={2.2} />
            </span>
            <span className="catalogue-tryon-text">Try It On You</span>
            <span
              className={`catalogue-toggle-switch ${tryOnOnly ? "on" : "off"}`}
            >
              <span className="catalogue-toggle-thumb" />
            </span>
          </button>

          {/* Right: Popularity Sort Dropdown */}
          <div className="catalogue-sort-pill-wrap">
            <ArrowUpRight size={15} className="catalogue-sort-arrow" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="catalogue-sort-select"
              aria-label="Sort product catalogue"
            >
              <option value="featured">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="new">New Arrivals</option>
            </select>
            <ChevronDown size={14} className="catalogue-sort-chevron" />
          </div>
        </div>
      </div>

      {/* ==========================================================================
          2. CENTERED SECTION HEADER (Matches Reference: Switchers Eyeglasses)
          ========================================================================== */}
      <header className="catalogue-header-centered">
        <h1 className="catalogue-main-title">{displayTitle}</h1>
        <p className="catalogue-main-subtitle">{displaySubtitle}</p>
      </header>

      {/* ==========================================================================
          3. 5-COLUMN RESPONSIVE PRODUCT CARD GRID (Spacious, Wide Eyewear)
          ========================================================================== */}
      {visible.length > 0 ? (
        <section
          className="catalogue-5col-grid"
          aria-label="Product catalogue grid"
        >
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetails={(p) => navigate(`/product/${p.id}`)}
              onTry={setTryOn}
            />
          ))}
        </section>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1.5rem",
            maxWidth: "460px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            No frames in this view
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            Try resetting your filters to explore our full selection of
            precision eyewear.
          </p>
          <button
            type="button"
            className="catalogue-drawer-apply-btn"
            onClick={clear}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* ==========================================================================
          4. SLIDE-OUT FILTER DRAWER
          ========================================================================== */}
      <div
        className={`catalogue-drawer-overlay ${filtersOpen ? "open" : ""}`}
        onClick={() => setFiltersOpen(false)}
        aria-hidden={!filtersOpen}
      />
      <aside
        className={`catalogue-filter-drawer ${filtersOpen ? "open" : ""}`}
        aria-label="Filters drawer"
      >
        <div className="catalogue-drawer-header">
          <h2>Refine Filters</h2>
          <button
            type="button"
            className="catalogue-drawer-close-btn"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="catalogue-drawer-body">
          {/* Quick Search inside Drawer */}
          <div style={{ position: "relative" }}>
            <Search
              size={15}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
              }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search frame name, code..."
              style={{
                width: "100%",
                padding: "8px 10px 8px 32px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
          </div>

          {/* Frame Type (includes Switchers!) */}
          <fieldset>
            <legend>Frame Type</legend>
            <div className="catalogue-drawer-options">
              {[
                "All",
                "Switchers",
                "Full Frame",
                "Rimless",
                "Semi-Rimless",
              ].map((ft) => (
                <label key={ft} className="catalogue-drawer-label">
                  <input
                    type="radio"
                    name="frameType"
                    checked={frameType === ft}
                    onChange={() => setFrameType(ft)}
                  />
                  <span>{ft}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Brand Category */}
          <fieldset>
            <legend>Brand Category</legend>
            <div className="catalogue-drawer-options">
              {BRAND_FILTERS.map((bf) => (
                <label key={bf.id} className="catalogue-drawer-label">
                  <input
                    type="radio"
                    name="brandCategory"
                    checked={selectedBrandCategory === bf.id}
                    onChange={() => setSelectedBrandCategory(bf.id)}
                  />
                  <span>{bf.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Brand Name */}
          {availableBrands.length > 2 && (
            <fieldset>
              <legend>Brand</legend>
              <div className="catalogue-drawer-options">
                {availableBrands.map((b) => (
                  <label key={b} className="catalogue-drawer-label">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === b}
                      onChange={() => setSelectedBrand(b)}
                    />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {/* Gender */}
          <fieldset>
            <legend>Audience / Gender</legend>
            <div className="catalogue-drawer-options">
              {["All", "Men", "Women", "Unisex", "Kids"].map((g) => (
                <label key={g} className="catalogue-drawer-label">
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === g}
                    onChange={() => setGender(g)}
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Shape */}
          <fieldset>
            <legend>Shape</legend>
            <div className="catalogue-drawer-options">
              {options("shape").map((opt) => (
                <label key={opt} className="catalogue-drawer-label">
                  <input
                    type="radio"
                    name="shape"
                    checked={shape === opt}
                    onChange={() => setShape(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Price */}
          <fieldset>
            <legend>Price</legend>
            <div className="catalogue-drawer-options">
              {["All", "Under ₹4,000", "₹4,000 - ₹8,000", "₹8,000 & above"].map(
                (opt) => (
                  <label key={opt} className="catalogue-drawer-label">
                    <input
                      type="radio"
                      name="price"
                      checked={price === opt}
                      onChange={() => setPrice(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ),
              )}
            </div>
          </fieldset>
        </div>

        <div className="catalogue-drawer-footer">
          <button
            type="button"
            className="catalogue-drawer-clear-btn"
            onClick={clear}
          >
            Clear All
          </button>
          <button
            type="button"
            className="catalogue-drawer-apply-btn"
            onClick={() => setFiltersOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </aside>

      {/* 3D Virtual Try-On Modal */}
      {tryOn && <TryOnModal product={tryOn} onClose={() => setTryOn(null)} />}
    </div>
  )
}
