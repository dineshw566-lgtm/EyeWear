import React, { useState, useMemo } from "react"
import { Link } from "react-router"
import { ChevronRight, CheckCircle } from "lucide-react"

/* -----------------------------------------------------------------------
   Inline SVG frame thumbnail — no external images required
   Uses varied abstract frame shapes per genderTag
----------------------------------------------------------------------- */
function FrameThumb({ genderTag, index, size = 52 }) {
  const palettes = {
    MEN: ["#2d4a46", "#1a3530", "#3d6b63"],
    WOMEN: ["#7b3fa0", "#a855c4", "#9333a8"],
    KIDS: ["#c47f17", "#d4941f", "#b87016"],
    BOYS: ["#1d5ea8", "#2568b8", "#1850a0"],
    GIRLS: ["#b5399c", "#c748ad", "#a02d8e"],
    CARE: ["#173f38", "#1d5048", "#254f48"],
    SPECIAL: ["#444444", "#333333", "#555555"],
    OPTICAL: ["#173f38", "#2d4a46", "#3d6b63"],
    SUN: ["#7b3fa0", "#9333a8", "#a855c4"],
    TRENDS: ["#c47f17", "#d4941f", "#b87016"],
    LUXE: ["#6f0c23", "#8b1836", "#a02446"],
    ATELIER: ["#1d2c42", "#253b59", "#324d73"],
  }
  const colors = palettes[genderTag] || palettes.MEN
  const c = colors[index % colors.length]

  const shapes = [
    // Shape A — rectangular frames
    <svg
      key="a"
      width={size}
      height={size * 0.55}
      viewBox="0 0 52 29"
      fill="none"
    >
      <rect
        x="1"
        y="4"
        width="20"
        height="13"
        rx="3"
        stroke={c}
        strokeWidth="2"
      />
      <rect
        x="31"
        y="4"
        width="20"
        height="13"
        rx="3"
        stroke={c}
        strokeWidth="2"
      />
      <path d="M21 10.5h10" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <line
        x1="0"
        y1="10.5"
        x2="1"
        y2="10.5"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="51"
        y1="10.5"
        x2="52"
        y2="10.5"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>,
    // Shape B — round frames
    <svg
      key="b"
      width={size}
      height={size * 0.55}
      viewBox="0 0 52 29"
      fill="none"
    >
      <circle cx="11" cy="11" r="9" stroke={c} strokeWidth="2" />
      <circle cx="41" cy="11" r="9" stroke={c} strokeWidth="2" />
      <path d="M20 11h12" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Shape C — aviator frames
    <svg
      key="c"
      width={size}
      height={size * 0.6}
      viewBox="0 0 52 31"
      fill="none"
    >
      <path
        d="M1 8c0-3 2-6 9-6s11 3 11 8-4 12-11 12S1 13 1 8z"
        stroke={c}
        strokeWidth="2"
      />
      <path
        d="M51 8c0-3-2-6-9-6S31 5 31 10s4 12 11 12 9-7 9-14z"
        stroke={c}
        strokeWidth="2"
      />
      <path d="M21 10h10" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Shape D — cat-eye
    <svg
      key="d"
      width={size}
      height={size * 0.55}
      viewBox="0 0 52 29"
      fill="none"
    >
      <path
        d="M1 14C1 8 4 3 11 3c5 0 9 2 10 6 1 4-1 9-8 11-5 1.5-12-1-12-6z"
        stroke={c}
        strokeWidth="2"
      />
      <path
        d="M51 14c0-6-3-11-10-11-5 0-9 2-10 6-1 4 1 9 8 11 5 1.5 12-1 12-6z"
        stroke={c}
        strokeWidth="2"
      />
      <path d="M21 10h10" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Shape E — wayfarer
    <svg
      key="e"
      width={size}
      height={size * 0.55}
      viewBox="0 0 52 29"
      fill="none"
    >
      <path
        d="M1 6h18c1 0 2 1 2 3v5c0 3-3 8-9 8-5 0-11-3-11-9V6z"
        stroke={c}
        strokeWidth="2"
      />
      <path
        d="M51 6H33c-1 0-2 1-2 3v5c0 3 3 8 9 8 5 0 11-3 11-9V6z"
        stroke={c}
        strokeWidth="2"
      />
      <path d="M21 9.5h10" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>,
  ]

  return (
    <div className="mega-menu-thumb" aria-hidden="true">
      {shapes[index % shapes.length]}
    </div>
  )
}

/* -----------------------------------------------------------------------
   PromoCard — heading area at top of each column
----------------------------------------------------------------------- */
function PromoCard({ column }) {
  const displayTitle =
    column.genderTag && column.heading.startsWith(column.genderTag + " ")
      ? column.heading.replace(column.genderTag + " ", "")
      : column.heading

  return (
    <Link
      to={column.href}
      className="mega-menu-promo-card"
      style={{ background: column.promoColor }}
    >
      <div className="mega-menu-promo-text">
        <span className="mega-menu-promo-gender">{column.genderTag}</span>
        <span className="mega-menu-promo-title">{displayTitle}</span>
        <span className="mega-menu-promo-tag">
          <CheckCircle size={12} strokeWidth={2.5} />
          {column.tagline}
        </span>
      </div>
      <div className="mega-menu-promo-art" aria-hidden="true">
        <FrameThumb genderTag={column.genderTag} index={0} size={62} />
      </div>
    </Link>
  )
}

/* -----------------------------------------------------------------------
   MegaMenuItem — single product/category row
----------------------------------------------------------------------- */
export function MegaMenuItem({ item, genderTag, index }) {
  return (
    <Link to={item.href} className="mega-menu-item">
      <div className="mega-menu-item-thumb">
        <FrameThumb genderTag={genderTag} index={index + 1} size={44} />
      </div>
      <div className="mega-menu-item-info">
        <span className="mega-menu-item-label">{item.label}</span>
        <span className="mega-menu-item-price">{item.price}</span>
      </div>
      <ChevronRight
        size={15}
        strokeWidth={2}
        className="mega-menu-item-arrow"
      />
    </Link>
  )
}

/* -----------------------------------------------------------------------
   MegaMenuColumn — one column (promo card + item rows)
----------------------------------------------------------------------- */
export function MegaMenuColumn({ column }) {
  return (
    <div className="mega-menu-column">
      <PromoCard column={column} />
      <div className="mega-menu-items-list">
        {column.items.map((item, i) => (
          <MegaMenuItem
            key={item.id}
            item={item}
            genderTag={column.genderTag}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

/* -----------------------------------------------------------------------
   SimpleLinkRow — small dropdown link row
----------------------------------------------------------------------- */
function SimpleLinkRow({ link }) {
  return (
    <Link to={link.href} className="mega-simple-link">
      <span className="mega-simple-dot" aria-hidden="true" />
      <span className="mega-simple-label">{link.label}</span>
      <ChevronRight size={14} strokeWidth={2} className="mega-simple-arrow" />
    </Link>
  )
}

/* -----------------------------------------------------------------------
   BrandsDirectoryMenu — Alphabetical plain text multi-column brand mega menu
   Matching the reference screenshot: pink letter headings, plain text brand
   links, white clean background, thin divider, Category tabs (All, Luxottica,
   Life Style, Luxury, Designer, Safilo, Indian Brands, Lens Brands).
----------------------------------------------------------------------- */
export function BrandsDirectoryMenu({ data, onClose }) {
  const [activeTab, setActiveTab] = useState("all")

  const visibleBrands = useMemo(() => {
    if (!activeTab || activeTab === "all") {
      return data.brands || []
    }
    return (data.brands || []).filter(
      (b) =>
        b.category === activeTab ||
        b.brandType?.toLowerCase() === activeTab.toLowerCase(),
    )
  }, [activeTab, data.brands])

  const groupedByLetter = useMemo(() => {
    const groups = {}
    visibleBrands.forEach((b) => {
      const letter = (b.letter || b.name[0]).toUpperCase()
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(b)
    })
    return groups
  }, [visibleBrands])

  const columns = useMemo(() => {
    const letters = Object.keys(groupedByLetter).sort((a, b) => {
      if (a === "#") return 1
      if (b === "#") return -1
      return a.localeCompare(b)
    })
    const numCols = 6
    const cols = Array.from({ length: numCols }, () => [])
    const itemsPerCol = Math.ceil(letters.length / numCols) || 1
    letters.forEach((letter, idx) => {
      const colIdx = Math.min(Math.floor(idx / itemsPerCol), numCols - 1)
      cols[colIdx].push({
        letter,
        brands: groupedByLetter[letter],
      })
    })
    return cols
  }, [groupedByLetter])

  return (
    <div
      className="mega-menu-panel mega-menu-panel--brands"
      role="dialog"
      aria-label="Brands directory navigation"
    >
      <div className="mega-brands-inner">
        {/* Multi-column Alphabetical Grid */}
        <div className="mega-brands-grid">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="mega-brands-col">
              {col.map((group) => (
                <div key={group.letter} className="mega-brands-letter-group">
                  <h3 className="mega-brand-letter">{group.letter}</h3>
                  <div className="mega-brand-list">
                    {group.brands.map((b) => (
                      <Link
                        key={b.name}
                        to={b.href}
                        className="mega-brand-item"
                        onClick={onClose}
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Section with Category Tabs */}
        <div className="mega-brands-bottom-bar">
          <div className="mega-brands-tabs">
            {(data.tabs || []).map((t) => (
              <button
                key={t.id}
                type="button"
                className={`mega-brands-tab-btn ${
                  activeTab === t.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* -----------------------------------------------------------------------
   SidebarTabsMenu — Visual Categories Mega Menu
   Matching the reference screenshot:
   - Left sidebar: Gender, Collection, Shape, Style, Top Brands, Featured Brands
   - Active tab highlighted in teal with a vertical indicator bar on left edge
   - Right content panel: pale aqua background with large rounded-corner cards
   - Under Collection: Switchers, Glam, Emily In Paris, Retro
----------------------------------------------------------------------- */
export function SidebarTabsMenu({ data, onClose }) {
  const tabs = data.sidebar || []
  const [activeTabId, setActiveTabId] = useState(
    data.defaultTab || "collection",
  )

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0]

  return (
    <div
      className="mega-menu-panel mega-menu-panel--sidebar"
      role="dialog"
      aria-label="Category navigation"
    >
      <div className="mega-sidebar-container">
        {/* Left Vertical Sidebar */}
        <nav className="mega-sidebar-nav" aria-label="Eyewear categories">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId
            return (
              <button
                key={tab.id}
                type="button"
                className={`mega-sidebar-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTabId(tab.id)}
                onMouseEnter={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </nav>

        {/* Right Pale Aqua Content Panel */}
        <div className="mega-sidebar-content">
          <div className="mega-cards-row">
            {currentTab?.items?.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="mega-visual-card"
                onClick={onClose}
              >
                <div className="mega-visual-card__thumb">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mega-visual-card__img"
                      loading="lazy"
                    />
                  ) : item.logo ? (
                    <div className="mega-visual-card__logo-wrap">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="mega-visual-card__logo"
                      />
                    </div>
                  ) : null}
                </div>
                <span className="mega-visual-card__title">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* -----------------------------------------------------------------------
   MegaMenu — the main dropdown panel
   Renders "brands-directory", "sidebar-tabs", "mega" (3 col), or "simple"
----------------------------------------------------------------------- */
export default function MegaMenu({ data, onClose }) {
  if (!data) return null

  if (data.type === "sidebar-tabs") {
    return <SidebarTabsMenu data={data} onClose={onClose} />
  }

  if (data.type === "brands-directory") {
    return <BrandsDirectoryMenu data={data} onClose={onClose} />
  }

  if (data.type === "mega") {
    return (
      <div
        className="mega-menu-panel"
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="mega-menu-inner">
          <div className="mega-menu-columns">
            {data.columns.map((col) => (
              <MegaMenuColumn key={col.id} column={col} />
            ))}
          </div>

          {data.footerLinks && data.footerLinks.length > 0 && (
            <div className="mega-menu-footer">
              {data.footerLinks.map((fl) => (
                <Link
                  key={fl.href + fl.label}
                  to={fl.href}
                  className={
                    fl.highlight
                      ? "mega-footer-link mega-footer-link--highlight"
                      : "mega-footer-link"
                  }
                  onClick={onClose}
                >
                  {fl.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Simple dropdown style (Eye Care / Our Story / Visit)
  if (data.type === "simple") {
    return (
      <div
        className="mega-menu-panel mega-menu-panel--simple"
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="mega-simple-list">
          {data.links.map((link) => (
            <SimpleLinkRow key={link.href + link.label} link={link} />
          ))}
        </div>
      </div>
    )
  }

  return null
}
