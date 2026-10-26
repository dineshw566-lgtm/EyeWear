// Lightweight, dependency-free helpers that turn raw MediaPipe FaceLandmarker
// output (468-point face mesh) into the handful of measurements this feature
// needs: where the eyes are, how far apart they are, how the head is
// tilted, and a rough face-shape estimate.
//
// The landmark index groups below are copied from MediaPipe's own published
// topology (FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE / LEFT_EYE / FACE_OVAL),
// not guessed. See:
// https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker

const RIGHT_EYE = [
  33, 7, 163, 144, 145, 153, 154, 155, 133, 173, 157, 158, 159, 160, 161, 246,
]
const LEFT_EYE = [
  263, 249, 390, 373, 374, 380, 381, 382, 362, 398, 384, 385, 386, 387, 388,
  466,
]

// A handful of points from the official face-oval contour, used as simple
// width/length landmarks for a rough shape estimate.
const FOREHEAD_TOP = 10
const CHIN_BOTTOM = 152
const CHEEK_RIGHT = 234
const CHEEK_LEFT = 454
const JAW_RIGHT = 172
const JAW_LEFT = 397
const TEMPLE_RIGHT = 54
const TEMPLE_LEFT = 284

function toPixel(landmark, width, height) {
  return { x: landmark.x * width, y: landmark.y * height }
}

function average(landmarks, indices, width, height) {
  let x = 0
  let y = 0
  for (const i of indices) {
    const p = toPixel(landmarks[i], width, height)
    x += p.x
    y += p.y
  }
  return { x: x / indices.length, y: y / indices.length }
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

/**
 * Derives eye position, spacing and head rotation from one frame of
 * landmarks, converted into the video's own pixel space so downstream
 * drawing can place the overlay directly in canvas pixels.
 */
export function getEyeMetrics(landmarks, width, height) {
  const rightEye = average(landmarks, RIGHT_EYE, width, height)
  const leftEye = average(landmarks, LEFT_EYE, width, height)
  const eyeDistance = distance(leftEye, rightEye)
  const rotation = Math.atan2(leftEye.y - rightEye.y, leftEye.x - rightEye.x)
  const midpoint = {
    x: (leftEye.x + rightEye.x) / 2,
    y: (leftEye.y + rightEye.y) / 2,
  }
  return { leftEye, rightEye, eyeDistance, rotation, midpoint }
}

// Typical width/length signatures for each shape, expressed as ratios to
// cheekbone width. Approximate — treated as a style suggestion, never a
// guaranteed classification.
const SHAPE_SIGNATURES = {
  Oblong: { lengthToWidth: 1.65, jawToCheek: 0.95, foreheadToCheek: 0.95 },
  Round: { lengthToWidth: 1.05, jawToCheek: 0.9, foreheadToCheek: 0.9 },
  Square: { lengthToWidth: 1.1, jawToCheek: 1.0, foreheadToCheek: 0.98 },
  Heart: { lengthToWidth: 1.25, jawToCheek: 0.75, foreheadToCheek: 1.0 },
  Oval: { lengthToWidth: 1.35, jawToCheek: 0.85, foreheadToCheek: 0.92 },
}

/**
 * Rough, heuristic face-shape estimate from classic width/length ratios
 * computed off real facial landmarks. Returns null if the landmarks are
 * incomplete for this frame.
 */
export function estimateFaceShape(landmarks, width, height) {
  const p = (i) => toPixel(landmarks[i], width, height)
  const cheekWidth = distance(p(CHEEK_RIGHT), p(CHEEK_LEFT))
  if (!cheekWidth) return null

  const faceLength = distance(p(FOREHEAD_TOP), p(CHIN_BOTTOM))
  const jawWidth = distance(p(JAW_RIGHT), p(JAW_LEFT))
  const foreheadWidth = distance(p(TEMPLE_RIGHT), p(TEMPLE_LEFT))

  const measured = {
    lengthToWidth: faceLength / cheekWidth,
    jawToCheek: jawWidth / cheekWidth,
    foreheadToCheek: foreheadWidth / cheekWidth,
  }

  let best = "Oval"
  let bestScore = Infinity
  for (const [shape, signature] of Object.entries(SHAPE_SIGNATURES)) {
    const score =
      Math.abs(measured.lengthToWidth - signature.lengthToWidth) +
      Math.abs(measured.jawToCheek - signature.jawToCheek) +
      Math.abs(measured.foreheadToCheek - signature.foreheadToCheek)
    if (score < bestScore) {
      bestScore = score
      best = shape
    }
  }
  return best
}

/** Picks the value that appears most often in a list of samples. */
export function mostFrequent(values) {
  const counts = new Map()
  let best = null
  let bestCount = 0
  for (const value of values) {
    const count = (counts.get(value) || 0) + 1
    counts.set(value, count)
    if (count > bestCount) {
      bestCount = count
      best = value
    }
  }
  return best
}
