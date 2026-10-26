// Draws a simple, honest glasses silhouette on a canvas, positioned and
// rotated from real eye landmarks every frame. This is a procedural
// illustration of the selected frame's shape and colour, not a photo of the
// product, because the catalogue's product photography isn't shot as
// alignable cutouts. See the Virtual Try-On feature notes for why.

function roundedRect(ctx, x, y, w, h, r) {
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
}

function lensPath(ctx, cx, cy, w, h, shape) {
  ctx.beginPath()
  switch (shape) {
    case "Round":
      ctx.ellipse(cx, cy, w / 2, w / 2, 0, 0, Math.PI * 2)
      break
    case "Square":
    case "Rectangle": {
      const r = Math.min(w, h) * 0.18
      roundedRect(ctx, cx - w / 2, cy - h / 2, w, h, r)
      break
    }
    case "Cat-eye":
      ctx.moveTo(cx - w / 2, cy + h * 0.32)
      ctx.quadraticCurveTo(cx - w / 2, cy - h / 2, cx, cy - h * 0.46)
      ctx.quadraticCurveTo(
        cx + w * 0.42,
        cy - h * 0.58,
        cx + w / 2,
        cy - h * 0.1,
      )
      ctx.quadraticCurveTo(cx + w / 2, cy + h / 2, cx, cy + h / 2)
      ctx.quadraticCurveTo(cx - w * 0.3, cy + h / 2, cx - w / 2, cy + h * 0.32)
      break
    case "Aviator":
      ctx.ellipse(cx, cy + h * 0.06, w / 2, h / 2, 0, 0, Math.PI * 2)
      break
    case "Oval":
    default:
      ctx.ellipse(cx, cy, w / 2, h / 2, 0, 0, Math.PI * 2)
      break
  }
  ctx.closePath()
}

/**
 * @param ctx 2D canvas context, already sized to the video's native pixels
 * @param eyeMetrics { leftEye, rightEye, eyeDistance, rotation, midpoint } — all in canvas pixel space
 * @param frame { shape, colorHex }
 */
export function drawGlassesOverlay(ctx, eyeMetrics, frame) {
  if (!eyeMetrics || !frame || !eyeMetrics.eyeDistance) return
  const { eyeDistance, rotation, midpoint } = eyeMetrics

  const lensWidth = eyeDistance * 0.62
  const lensHeight = lensWidth * (frame.shape === "Aviator" ? 0.82 : 0.66)
  const halfGap = eyeDistance / 2

  ctx.save()
  ctx.translate(midpoint.x, midpoint.y)
  ctx.rotate(rotation)

  ctx.lineWidth = Math.max(2, lensWidth * 0.07)
  ctx.strokeStyle = frame.colorHex || "#242322"
  ctx.fillStyle = "rgba(255,255,255,0.07)"
  ctx.shadowColor = "rgba(0,0,0,0.35)"
  ctx.shadowBlur = lensWidth * 0.08

  lensPath(ctx, -halfGap, 0, lensWidth, lensHeight, frame.shape)
  ctx.fill()
  ctx.stroke()

  lensPath(ctx, halfGap, 0, lensWidth, lensHeight, frame.shape)
  ctx.fill()
  ctx.stroke()

  ctx.shadowBlur = 0

  // Bridge between the lenses
  ctx.beginPath()
  ctx.moveTo(-halfGap + lensWidth / 2 - eyeDistance * 0.02, -lensHeight * 0.12)
  ctx.quadraticCurveTo(
    0,
    -lensHeight * 0.34,
    halfGap - lensWidth / 2 + eyeDistance * 0.02,
    -lensHeight * 0.12,
  )
  ctx.stroke()

  // Temple-arm stubs running toward the ears
  ctx.beginPath()
  ctx.moveTo(-halfGap - lensWidth / 2, 0)
  ctx.lineTo(-halfGap - lensWidth * 0.9, -lensHeight * 0.1)
  ctx.moveTo(halfGap + lensWidth / 2, 0)
  ctx.lineTo(halfGap + lensWidth * 0.9, -lensHeight * 0.1)
  ctx.stroke()

  ctx.restore()
}
