import { useState, useMemo } from "react"
import { useNavigate, useSearchParams } from "react-router"
import { Search, X } from "lucide-react"
import { PREMIUM_BRANDS } from "../data/premiumBrandsData"
import usePageMeta from "../hooks/usePageMeta"
import "./BrandsPage.css"

/* ─── All 27 brands that have official local logo assets on this computer ─── */
const ALL_COMBINED = [...PREMIUM_BRANDS].sort((a, b) =>
  a.name.localeCompare(b.name),
)

/* ─── Alphabet letters actually present ────────────────────────────────────── */
const LETTERS = [
  ...new Set(ALL_COMBINED.map((b) => b.name[0].toUpperCase())),
].sort()

/* ─── Logos that are dark already (don't need filter inversion) ── */
const DARK_LOGOS = new Set([
  "ray-ban",
  "carrera",
  "titan-eyewear",
  "united-colors-benetton",
  "web-eyewear",
  "xit-eyewear",
  "nautica", // nautica-light = still visible on white
  "polaroid", // polaroid-light = still visible on white
  "nike-vision", // nike-vision-light = still visible
])

/* ─── Single brand card ─────────────────────────────────────────────────────── */
function BrandCard({ brand, onClick }) {
  const logoSrc = brand.logo
  return (
    <button
      className="brand-card"
      onClick={() => onClick(brand)}
      title={brand.secondaryName || brand.name}
      aria-label={`Browse ${brand.name} eyewear`}
    >
      <img
        src={logoSrc}
        alt={brand.name}
        className={`brand-card__logo ${
          DARK_LOGOS.has(brand.id)
            ? "brand-card__logo--dark"
            : "brand-card__logo--white"
        }`}
        loading="lazy"
      />
    </button>
  )
}

/* ─── Main page ─────────────────────────────────────────────────────────────── */
export default function BrandsPage() {
  usePageMeta(
    "All Brands | ViZHən Plus Optics",
    "Browse our complete collection of 85+ premium and luxury eyewear brands.",
  )

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [activeLetter, setActiveLetter] = useState("ALL")

  const filtered = useMemo(() => {
    let list = ALL_COMBINED
    if (activeLetter !== "ALL") {
      list = list.filter((b) => b.name[0].toUpperCase() === activeLetter)
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          (b.secondaryName && b.secondaryName.toLowerCase().includes(q)) ||
          (b.brandType && b.brandType.toLowerCase().includes(q)),
      )
    }
    return list
  }, [query, activeLetter])

  function handleBrandClick(brand) {
    navigate(`/eyeglasses?brand=${encodeURIComponent(brand.name)}`)
  }

  function clearSearch() {
    setQuery("")
    setActiveLetter("ALL")
  }

  return (
    <div className="brands-page">
      {/* ── HEADER ── */}
      <div className="brands-page__header">
        <p className="brands-page__eyebrow">Curated Collection</p>
        <h1 className="brands-page__title">Our Brands</h1>
        <p className="brands-page__sub">
          {ALL_COMBINED.length}+ world-class eyewear brands — 100% authentic,
          sourced direct from authorised distributors.
        </p>
      </div>

      {/* ── CONTROLS ── */}
      <div className="brands-page__controls">
        {/* Search */}
        <div className="brands-search">
          <Search size={16} className="brands-search__icon" />
          <input
            type="text"
            className="brands-search__input"
            placeholder="Search brands…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveLetter("ALL")
            }}
            aria-label="Search brands"
          />
          {query && (
            <button
              className="brands-search__clear"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Count */}
        <p className="brands-page__count">
          {filtered.length} brand{filtered.length !== 1 ? "s" : ""}
          {query || activeLetter !== "ALL" ? " found" : " total"}
        </p>
      </div>

      {/* ── A–Z NAV ── */}
      <div className="brands-az">
        <button
          className={`brands-az__btn ${activeLetter === "ALL" ? "active" : ""}`}
          onClick={() => {
            setActiveLetter("ALL")
            setQuery("")
          }}
        >
          All
        </button>
        {LETTERS.map((l) => (
          <button
            key={l}
            className={`brands-az__btn ${activeLetter === l ? "active" : ""}`}
            onClick={() => {
              setActiveLetter(l)
              setQuery("")
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* ── GRID ── */}
      {filtered.length > 0 ? (
        <div className="brands-grid">
          {filtered.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              onClick={handleBrandClick}
            />
          ))}
        </div>
      ) : (
        <div className="brands-empty">
          <p className="brands-empty__icon">🔍</p>
          <h3>No brands found</h3>
          <p>Try a different search term or browse all brands.</p>
          <button className="brands-empty__reset" onClick={clearSearch}>
            Show all brands
          </button>
        </div>
      )}
    </div>
  )
}
