import { useEffect, useRef } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"

const HOVER_SELECTOR =
  "a, button, [role='button'], article.group, input, textarea, select, label, [data-cursor='hover']"

const DOT_LERP = 0.42
const RING_LERP = 0.14
const TAIL_LERP = 0.22
const MAGNETIC_STRENGTH = 0.07
const RING_HOVER_SCALE = 1.45
const DOT_HOVER_SCALE = 1.25

function lerp(current, target, amount) {
  return current + (target - current) * amount
}

export function CustomCursor() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const hasFinePointer = useMediaQuery("(pointer: fine)")

  const rootRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const tailRefs = useRef([])

  const enabled = hasFinePointer && !prefersReducedMotion

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-active")
      return
    }

    document.documentElement.classList.add("custom-cursor-active")

    const mouse = { x: -100, y: -100 }
    const dot = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    const magnetic = { x: 0, y: 0 }
    const tail = [
      { x: -100, y: -100 },
      { x: -100, y: -100 },
      { x: -100, y: -100 },
    ]

    let hoverTarget = null
    let isHovering = false
    let hoverScale = 1
    let dotScale = 1
    let visible = false
    let frameId = 0

    const setVisible = (show) => {
      if (!rootRef.current) return
      rootRef.current.dataset.visible = show ? "true" : "false"
    }

    const onMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      if (!visible) {
        visible = true
        dot.x = mouse.x
        dot.y = mouse.y
        ring.x = mouse.x
        ring.y = mouse.y
        tail.forEach((point) => {
          point.x = mouse.x
          point.y = mouse.y
        })
        setVisible(true)
      }
    }

    const onMouseOver = (event) => {
      const target = event.target.closest(HOVER_SELECTOR)
      if (target) {
        hoverTarget = target
        isHovering = true
      }
    }

    const onMouseOut = (event) => {
      if (!hoverTarget) return
      const related = event.relatedTarget
      if (!related || !hoverTarget.contains(related)) {
        hoverTarget = null
        isHovering = false
      }
    }

    const onWindowBlur = () => setVisible(false)
    const onWindowFocus = () => {
      if (visible) setVisible(true)
    }

    const animate = () => {
      if (hoverTarget && isHovering) {
        const rect = hoverTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        magnetic.x = lerp(magnetic.x, (centerX - mouse.x) * MAGNETIC_STRENGTH, 0.12)
        magnetic.y = lerp(magnetic.y, (centerY - mouse.y) * MAGNETIC_STRENGTH, 0.12)
        hoverScale = lerp(hoverScale, RING_HOVER_SCALE, 0.15)
        dotScale = lerp(dotScale, DOT_HOVER_SCALE, 0.18)
      } else {
        magnetic.x = lerp(magnetic.x, 0, 0.15)
        magnetic.y = lerp(magnetic.y, 0, 0.15)
        hoverScale = lerp(hoverScale, 1, 0.15)
        dotScale = lerp(dotScale, 1, 0.18)
      }

      const targetX = mouse.x + magnetic.x
      const targetY = mouse.y + magnetic.y

      dot.x = lerp(dot.x, mouse.x, DOT_LERP)
      dot.y = lerp(dot.y, mouse.y, DOT_LERP)

      ring.x = lerp(ring.x, targetX, RING_LERP)
      ring.y = lerp(ring.y, targetY, RING_LERP)

      tail[0].x = lerp(tail[0].x, ring.x, TAIL_LERP)
      tail[0].y = lerp(tail[0].y, ring.y, TAIL_LERP)
      tail[1].x = lerp(tail[1].x, tail[0].x, TAIL_LERP)
      tail[1].y = lerp(tail[1].y, tail[0].y, TAIL_LERP)
      tail[2].x = lerp(tail[2].x, tail[1].x, TAIL_LERP)
      tail[2].y = lerp(tail[2].y, tail[1].y, TAIL_LERP)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(${dotScale})`
      }

      if (ringRef.current) {
        const ringOpacity = isHovering ? 0.55 : 0.35
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${hoverScale})`
        ringRef.current.style.opacity = String(ringOpacity)
      }

      tailRefs.current.forEach((el, index) => {
        if (!el) return
        const point = tail[index]
        const opacity = 0.12 - index * 0.03
        el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`
        el.style.opacity = String(opacity)
      })

      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mouseover", onMouseOver, { passive: true })
    document.addEventListener("mouseout", onMouseOut, { passive: true })
    window.addEventListener("blur", onWindowBlur)
    window.addEventListener("focus", onWindowFocus)

    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)
      window.removeEventListener("blur", onWindowBlur)
      window.removeEventListener("focus", onWindowFocus)
      document.documentElement.classList.remove("custom-cursor-active")
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={rootRef}
      className="custom-cursor"
      data-visible="false"
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          ref={(el) => {
            tailRefs.current[index] = el
          }}
          className="cursor-tail"
        />
      ))}
    </div>
  )
}
