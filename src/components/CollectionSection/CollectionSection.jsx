import { useState } from "react"
import { Link, useNavigate } from "react-router"
import ProductCard from "../ProductCard"
import {
  COLLECTION_CATEGORIES,
  COLLECTION_DATA_MAP,
} from "../../data/collectionSectionData"
import "./CollectionSection.css"

export default function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("Men")
  const navigate = useNavigate()

  // 15 products for 5 columns x 3 full rows
  const allProducts =
    COLLECTION_DATA_MAP[activeCategory] || COLLECTION_DATA_MAP.Men
  const products = allProducts.slice(0, 15)

  return (
    <section
      className="modern-collection-section"
      aria-labelledby="collection-section-heading"
    >
      <div className="modern-collection-container">
        {/* ---- Top Bar: Category Tabs on Left + View All on Right ---- */}
        <div className="modern-collection-topbar">
          <div
            className="modern-collection-tabs"
            role="tablist"
            aria-label="Filter collection by audience"
          >
            {COLLECTION_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`modern-collection-tab${
                    isActive ? " active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  {isActive && <span className="tab-active-indicator" />}
                </button>
              )
            })}
          </div>

          <Link to="/catalogue" className="modern-collection-view-all-btn">
            View All Collection
          </Link>
        </div>

        {/* ---- 5-Column Product Grid (3 Rows x 5 Columns = 15 Products) ---- */}
        <div
          className="modern-collection-grid"
          role="region"
          aria-label={`${activeCategory} Collection`}
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onDetails={() =>
                navigate(item.link || `/eyeglasses?q=${item.id}`)
              }
              onTry={() => navigate("/virtual-try-on")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
