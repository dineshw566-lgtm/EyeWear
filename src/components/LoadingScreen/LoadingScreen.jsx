import React, { useEffect, useRef, useState, useCallback } from "react"
import logoAnimationImg from "../../assets/logo/logo-animation.png"
import "./LoadingScreen.css"

/* ══════════════════════════════════════════════════════════════════
   VIZHEN PLUS OPTICS — LOGO CANVAS ANIMATION
   Accurately ported from e:\0\Desktop\logo (1).html
   ══════════════════════════════════════════════════════════════════ */

const W = 1920
const H = 1080
const DURATION = 4.8 // Seconds of animation before soft fade-out
const sourceW = 921
const sourceH = 307
const split = 300 // Emblem vs Wordmark visual split
const finalW = 1000
const scale = finalW / sourceW
const finalH = sourceH * scale
const fx = (W - finalW) / 2
const fy = (H - finalH) / 2
const emblemW = split * scale
const wordW = (sourceW - split) * scale
const ex = fx
const ey = fy
const ew = emblemW
const eh = finalH
const wx = fx + emblemW
const wy = fy
const ww = wordW
const wh = finalH

const smooth = (x) => {
  x = Math.max(0, Math.min(1, x))
  return x * x * (3 - 2 * x)
}

export default function LoadingScreen({ onComplete }) {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const isCompleteRef = useRef(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const finish = useCallback(() => {
    if (isCompleteRef.current) return
    isCompleteRef.current = true
    setIsFadingOut(true)
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 420)
  }, [onComplete])

  useEffect(() => {
    // Lock background scroll during loading animation
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const logo = new Image()
    logo.src = logoAnimationImg

    let start = null

    function clear() {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.globalAlpha = 1
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, W, H)
    }

    function revealEmblem(p) {
      if (p <= 0) return
      // Progressive reveal from the V's bottom tip upward; source artwork stays fixed.
      const top = ey + eh * (1 - smooth(p))
      ctx.save()
      ctx.beginPath()
      ctx.rect(ex, top, ew, ey + eh - top)
      ctx.clip()
      ctx.drawImage(logo, 0, 0, split, sourceH, ex, ey, ew, eh)
      ctx.restore()
    }

    function revealWord(p) {
      if (p <= 0) return
      // Reveal the original wordmark left-to-right, precisely in its final position.
      const width = ww * smooth(p)
      ctx.save()
      ctx.beginPath()
      ctx.rect(wx, wy, width, wh)
      ctx.clip()
      ctx.drawImage(logo, split, 0, sourceW - split, sourceH, wx, wy, ww, wh)
      ctx.restore()
    }

    function drawFinal(p) {
      if (p <= 0) return
      // Fade to the complete original logo asset without altering any pixels.
      ctx.save()
      ctx.globalAlpha = smooth(p)
      ctx.drawImage(logo, fx, fy, finalW, finalH)
      ctx.restore()
    }

    function frame(now) {
      if (!logo.complete || !logo.naturalWidth) {
        animFrameRef.current = requestAnimationFrame(frame)
        return
      }

      if (start === null) start = now
      const elapsed = (now - start) / 1000
      const t = Math.min(elapsed, DURATION)

      clear()

      // Phase 1 (0.05s - 1.80s): emblem reveals upwards from bottom tip
      revealEmblem((t - 0.05) / 1.75)

      // Phase 2 (1.95s - 3.60s): wordmark reveals left-to-right
      revealWord((t - 1.95) / 1.65)

      // Phase 3 (3.70s - 4.30s): transition seamlessly into full assembled logo
      const p = (t - 3.7) / 0.6
      if (p > 0) {
        drawFinal(p)
      }

      if (elapsed < DURATION) {
        animFrameRef.current = requestAnimationFrame(frame)
      } else {
        // Animation finished, initiate graceful fade out
        finish()
      }
    }

    logo.onload = () => {
      animFrameRef.current = requestAnimationFrame(frame)
    }

    // Fallback if cached image loads synchronously
    if (logo.complete) {
      animFrameRef.current = requestAnimationFrame(frame)
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        finish()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [finish])

  return (
    <div
      className={`loading-screen-backdrop ${
        isFadingOut ? "is-fading-out" : ""
      }`}
      onClick={finish}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Vizhen Plus Optics"
    >
      <div className="loading-screen-stage">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="loading-screen-canvas"
          aria-label="VIZHEN PLUS OPTICS logo animation"
        />
      </div>

      <button
        type="button"
        className="loading-screen-skip-btn"
        onClick={(e) => {
          e.stopPropagation()
          finish()
        }}
        aria-label="Skip animation"
      >
        Skip
      </button>
    </div>
  )
}
