import { useState } from "react"
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
  Link,
  useNavigate,
} from "react-router"
import Layout from "./components/Layout"
import SmoothScroll from "./components/SmoothScroll"

// Direct imports eliminate dynamic chunk loading errors during dev/reload
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CataloguePage from "./pages/CataloguePage"
import ContactPage from "./pages/ContactPage"
import ServicesPage from "./pages/ServicesPage"
import VirtualTryOnPage from "./pages/VirtualTryOnPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import FoldText from "./components/FoldText"
import ProductCard from "./components/ProductCard"
import TryOnModal from "./components/TryOnModal"
import { products } from "./data/products"
import { useWishlist } from "./context/WishlistContext"

function RouteErrorBoundary() {
  const error = useRouteError()
  console.error("Route navigation error:", error)

  return (
    <div
      className="section"
      style={{
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="eyebrow">VIZHEN PLUS OPTICS</p>
      <h2 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
        Something went wrong loading this view
      </h2>
      <p
        style={{
          maxWidth: "480px",
          color: "var(--muted)",
          marginBottom: "2rem",
        }}
      >
        Please refresh the page to restore your view, or return to our optical
        homepage.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => window.location.reload()}
          className="button button-accent"
        >
          Reload Page
        </button>
        <Link to="/" className="button button-dark">
          Return Home
        </Link>
      </div>
    </div>
  )
}

function CartPlaceholder() {
  return (
    <div
      className="content-page"
      style={{ padding: "6rem 2rem", textAlign: "center", minHeight: "55vh" }}
    >
      <p className="eyebrow">Shopping Cart</p>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>
        <FoldText text="Your bag is empty" trigger="mount" splitBy="word" />
      </h1>
      <p
        style={{
          maxWidth: "440px",
          margin: "0 auto 2rem",
          color: "var(--muted)",
        }}
      >
        Explore our curated collection of optical glasses and designer
        sunglasses to find your perfect fit.
      </p>
      <Link to="/eyeglasses" className="button button-accent">
        Explore Eyeglasses
      </Link>
    </div>
  )
}

function WishlistPlaceholder() {
  const { wishlistIds } = useWishlist()
  const savedProducts = products.filter((p) => wishlistIds.includes(p.id))
  const navigate = useNavigate()
  const [tryOn, setTryOn] = useState(null)

  if (savedProducts.length > 0) {
    return (
      <div
        className="content-page"
        style={{
          padding: "4rem 2rem 6rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Saved Frames
        </p>
        <h1
          style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "3rem",
            fontFamily: "var(--font-editorial)",
          }}
        >
          Your Curated Wishlist ({savedProducts.length})
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {savedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetails={(p) => navigate(`/product/${p.id}`)}
              onTry={setTryOn}
            />
          ))}
        </div>
        {tryOn && <TryOnModal product={tryOn} onClose={() => setTryOn(null)} />}
      </div>
    )
  }

  return (
    <div
      className="content-page"
      style={{ padding: "6rem 2rem", textAlign: "center", minHeight: "55vh" }}
    >
      <p className="eyebrow">Saved Frames</p>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>
        <FoldText
          text="Your wishlist is empty"
          trigger="mount"
          splitBy="word"
        />
      </h1>
      <p
        style={{
          maxWidth: "440px",
          margin: "0 auto 2rem",
          color: "var(--muted)",
        }}
      >
        Save your favorite frames while browsing to compare styles and book an
        in-store trial.
      </p>
      <Link to="/eyeglasses" className="button button-accent">
        Discover Frames
      </Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Navigation Routes requested
      {
        path: "new-arrivals",
        element: <CataloguePage category="new-arrivals" />,
      },
      {
        path: "brands",
        element: <CataloguePage category="brands" />,
      },
      {
        path: "catalogue",
        element: <CataloguePage category="all" />,
      },
      {
        path: "eyeglasses",
        element: <CataloguePage category="eyeglasses" />,
      },
      {
        path: "sunglasses",
        element: <CataloguePage category="sunglasses" />,
      },
      {
        path: "kids",
        element: <CataloguePage category="kids" />,
      },
      {
        path: "smart-glasses",
        element: <CataloguePage category="smart-glasses" />,
      },
      {
        path: "powered-sunglasses",
        element: <CataloguePage category="powered-sunglasses" />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "contact-lenses",
        element: <ServicesPage />,
      },
      {
        path: "computer-glasses",
        element: <CataloguePage category="computer-glasses" />,
      },
      {
        path: "reading-glasses",
        element: <CataloguePage category="reading-glasses" />,
      },
      {
        path: "virtual-try-on",
        element: <VirtualTryOnPage />,
      },
      {
        path: "scan-face",
        element: <VirtualTryOnPage />,
      },
      {
        path: "face-detector",
        element: <VirtualTryOnPage />,
      },
      {
        path: "eye-care",
        element: <ServicesPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "our-story",
        element: <AboutPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "visit",
        element: <ContactPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "book-eye-test",
        element: <ServicesPage />,
      },
      {
        path: "cart",
        element: <CartPlaceholder />,
      },
      {
        path: "wishlist",
        element: <WishlistPlaceholder />,
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

export default function App() {
  return (
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  )
}
