import { useEffect, useRef } from 'react'

/**
 * CustomCursor
 * A two-layer circular cursor:
 *  - Inner dot  (solid terracotta circle, snaps to mouse)
 *  - Outer ring (hollow circle, follows with a slight lag)
 * Both layers expand on hover over interactive elements.
 */
export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let rafId
    // Ring lags slightly behind with lerp
    let rx = window.innerWidth  / 2
    let ry = window.innerHeight / 2
    let mx = rx
    let my = ry

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      // Dot snaps instantly via direct style
      dot.style.left = `${mx}px`
      dot.style.top  = `${my}px`
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const INTERACTIVE = 'a, button, input, textarea, [role="button"], .group'

    const onEnter = (e) => {
      if (e.target.closest(INTERACTIVE)) {
        dot.classList.add('expanded')
        ring.classList.add('expanded')
      }
    }
    const onLeave = (e) => {
      if (e.target.closest(INTERACTIVE)) {
        dot.classList.remove('expanded')
        ring.classList.remove('expanded')
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout',  onLeave)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="custom-cursor"      aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  )
}
