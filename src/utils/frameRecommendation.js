import { products } from "../data/products"

// Classic styling guidance: which frame silhouettes tend to balance which
// face shapes. Treated as suggestions, not guaranteed outcomes.
export const SHAPE_GUIDANCE = {
  Round: {
    preferredShapes: ["Rectangle", "Square", "Cat-eye"],
    tip: "Angular frames add definition to soften round curves.",
  },
  Square: {
    preferredShapes: ["Round", "Oval", "Cat-eye"],
    tip: "Curved frames ease strong jaw and forehead angles.",
  },
  Oval: {
    preferredShapes: [
      "Rectangle",
      "Round",
      "Square",
      "Cat-eye",
      "Aviator",
      "Oval",
    ],
    tip: "Balanced proportions suit nearly every silhouette.",
  },
  Heart: {
    preferredShapes: ["Oval", "Cat-eye", "Round"],
    tip: "Lighter, rounded frames balance a narrower jawline.",
  },
  Oblong: {
    preferredShapes: ["Round", "Aviator", "Square"],
    tip: "Deeper frames with more vertical height shorten the face.",
  },
}

/**
 * Picks real catalogue products (eyeglasses + sunglasses) that suit the
 * given face shape, preferring frames whose `shape` matches the styling
 * guidance above, and backfilling with other available frames if needed.
 * Never invents products or falls back to sample data.
 */
export function getRecommendedFrames(faceShape, { limit = 5 } = {}) {
  const guidance = SHAPE_GUIDANCE[faceShape] || SHAPE_GUIDANCE.Oval
  const pool = products.filter(
    (p) =>
      p.available &&
      (p.category === "eyeglasses" || p.category === "sunglasses"),
  )

  const scored = pool
    .map((product) => {
      const rank = guidance.preferredShapes.indexOf(product.shape)
      return {
        product,
        rank: rank === -1 ? guidance.preferredShapes.length : rank,
      }
    })
    .sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank
      if (a.product.featured !== b.product.featured)
        return a.product.featured ? -1 : 1
      return a.product.price - b.product.price
    })

  return scored.slice(0, Math.max(limit, 3)).map((s) => s.product)
}
