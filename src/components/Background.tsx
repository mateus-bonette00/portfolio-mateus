import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Point = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
  tone: number
  mass: number
}

type NavigatorWithPerformanceHints = Navigator & {
  deviceMemory?: number
  connection?: {
    effectiveType?: string
    saveData?: boolean
  }
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

export function Background() {
  const reduced = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nav = window.navigator as NavigatorWithPerformanceHints
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const slowConnection = ['slow-2g', '2g'].includes(nav.connection?.effectiveType ?? '')
    const shouldSkipCanvas = nav.connection?.saveData === true || slowConnection

    if (shouldSkipCanvas) return

    const lowPower = (nav.deviceMemory ?? 8) <= 4 || isCoarsePointer
    const mouse = { x: 0, y: 0, active: false }

    const onPointer = (clientX: number, clientY: number) => {
      mouse.x = clientX
      mouse.y = clientY
      mouse.active = true
    }

    const onMove = (e: MouseEvent) => onPointer(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) onPointer(t.clientX, t.clientY)
    }
    const onLeave = () => {
      mouse.active = false
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onLeave, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    let raf = 0
    let width = 0
    let height = 0
    let points: Point[] = []
    let resizeTimer = 0
    let lastFrame = 0
    const dpr = Math.min(window.devicePixelRatio || 1, lowPower ? 1.35 : 1.75)
    const frameInterval = lowPower ? 1000 / 30 : 1000 / 60

    const makePoint = (): Point => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (lowPower ? 0.24 : 0.34),
      vy: (Math.random() - 0.5) * (lowPower ? 0.24 : 0.34),
      r: Math.random() * 1.45 + 0.9,
      phase: Math.random() * Math.PI * 2,
      tone: Math.random(),
      mass: Math.random() * 0.45 + 0.75,
    })

    const getPointCount = () => {
      const area = width * height
      const base = Math.floor(area / (lowPower ? 23000 : 19000))
      const wideBonus = Math.floor(width / (lowPower ? 280 : 190))
      return clamp(base + wideBonus, lowPower ? 38 : 58, lowPower ? 62 : 96)
    }

    const setup = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      points = Array.from({ length: getPointCount() }, makePoint)
    }

    const scheduleSetup = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(setup, 120)
    }

    const onVisibilityChange = () => {
      lastFrame = 0
    }

    const bucketKey = (x: number, y: number) => `${x}:${y}`

    const buildBuckets = (cellSize: number) => {
      const buckets = new Map<string, number[]>()

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const cx = Math.floor(p.x / cellSize)
        const cy = Math.floor(p.y / cellSize)
        const key = bucketKey(cx, cy)
        const group = buckets.get(key)

        if (group) {
          group.push(i)
        } else {
          buckets.set(key, [i])
        }
      }

      return buckets
    }

    const drawEdges = (isDark: boolean, maxDistance: number, t: number) => {
      const baseA = isDark ? 0.85 : 0.65
      const breathe = 0.9 + 0.1 * Math.sin(t * 0.00028)
      const buckets = buildBuckets(maxDistance)

      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        const cx = Math.floor(a.x / maxDistance)
        const cy = Math.floor(a.y / maxDistance)

        for (let gx = cx - 1; gx <= cx + 1; gx++) {
          for (let gy = cy - 1; gy <= cy + 1; gy++) {
            const group = buckets.get(bucketKey(gx, gy))
            if (!group) continue

            for (const j of group) {
              if (j <= i) continue

              const b = points[j]
              const dx = a.x - b.x
              const dy = a.y - b.y
              const distance = Math.hypot(dx, dy)

              if (distance < maxDistance) {
                const strength = (1 - distance / maxDistance) * breathe
                const coolEdge = (a.tone + b.tone) * 0.5 > 0.42

                ctx.beginPath()
                ctx.moveTo(a.x, a.y)
                ctx.lineTo(b.x, b.y)
                ctx.strokeStyle = isDark
                  ? coolEdge
                    ? `rgba(34, 211, 238, ${baseA * strength})`
                    : `rgba(147, 197, 253, ${baseA * strength})`
                  : coolEdge
                    ? `rgba(14, 116, 144, ${baseA * strength})`
                    : `rgba(30, 64, 175, ${baseA * strength})`
                ctx.lineWidth = 0.75 + strength * 1.05
                ctx.stroke()
              }
            }
          }
        }
      }
    }

    const drawCursorLinks = (isDark: boolean, mx: number, my: number) => {
      const cap = Math.min(width, height) * 0.26
      const maxMouseDist = Math.max(150, Math.min(260, cap))

      for (const a of points) {
        const dx = mx - a.x
        const dy = my - a.y
        const distance = Math.hypot(dx, dy)
        if (distance < maxMouseDist && distance > 2) {
          const strength = 1 - distance / maxMouseDist
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = isDark
            ? `rgba(96, 165, 250, ${0.95 * strength * strength})`
            : `rgba(37, 99, 235, ${0.85 * strength * strength})`
          ctx.lineWidth = 0.8 + strength * 1.15
          ctx.stroke()
        }
      }

      ctx.beginPath()
      ctx.arc(mx, my, 3.2, 0, Math.PI * 2)
      ctx.fillStyle = isDark ? 'rgba(191, 219, 254, 0.85)' : 'rgba(30, 64, 175, 0.6)'
      ctx.shadowBlur = isDark ? 18 : 12
      ctx.shadowColor = isDark ? 'rgba(96, 165, 250, 0.85)' : 'rgba(59, 130, 246, 0.62)'
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const drawNodes = (isDark: boolean, t: number) => {
      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        const pulse = 1 + Math.sin(t * 0.001 + a.phase) * 0.14
        const r = a.r * pulse
        const cyan = a.tone > 0.58

        ctx.beginPath()
        ctx.arc(a.x, a.y, r, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? cyan
            ? 'rgba(165, 243, 252, 1)'
            : 'rgba(191, 219, 254, 0.95)'
          : cyan
            ? 'rgba(14, 116, 144, 0.85)'
            : 'rgba(30, 64, 175, 0.9)'
        ctx.shadowBlur = isDark ? 18 : 10
        ctx.shadowColor = isDark
          ? cyan
            ? 'rgba(34, 211, 238, 0.82)'
            : 'rgba(96, 165, 250, 0.78)'
          : cyan
            ? 'rgba(14, 116, 144, 0.48)'
            : 'rgba(59, 130, 246, 0.5)'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const tick = (now: number) => {
      if (document.visibilityState === 'hidden') {
        raf = requestAnimationFrame(tick)
        return
      }

      if (lastFrame && now - lastFrame < frameInterval) {
        raf = requestAnimationFrame(tick)
        return
      }

      const dt = clamp((now - (lastFrame || now)) / 16.67, 0.7, 1.8)
      lastFrame = now
      const isDark = document.documentElement.classList.contains('dark')
      const maxDistance = Math.max(112, Math.min(isDark ? 176 : 156, width * 0.12))

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        a.x += a.vx * dt * a.mass
        a.y += a.vy * dt * a.mass

        // Idle drift: mantem movimento mesmo sem mouse, mas sem pesar.
        const drift = (lowPower ? 0.00075 : 0.00125) * dt
        a.vx += Math.cos(now * 0.00022 + a.phase) * drift
        a.vy += Math.sin(now * 0.00022 + a.phase) * drift

        if (mouse.active) {
          const dx = mouse.x - a.x
          const dy = mouse.y - a.y
          const d = Math.hypot(dx, dy) || 1
          if (d < 280) {
            const w = (1 - d / 280) ** 2 * (lowPower ? 0.016 : 0.026)
            a.vx += (dx / d) * w
            a.vy += (dy / d) * w
          }
        }

        const sp = Math.hypot(a.vx, a.vy)
        const maxSp = lowPower ? 0.32 : 0.48
        const minSp = lowPower ? 0.06 : 0.1

        if (sp > maxSp) {
          a.vx = (a.vx / sp) * maxSp
          a.vy = (a.vy / sp) * maxSp
        }
        if (sp > 0 && sp < minSp) {
          a.vx = (a.vx / sp) * minSp
          a.vy = (a.vy / sp) * minSp
        }

        if (a.x < -24) a.x = width + 24
        if (a.x > width + 24) a.x = -24
        if (a.y < -24) a.y = height + 24
        if (a.y > height + 24) a.y = -24
      }

      drawEdges(isDark, maxDistance, now)

      if (mouse.active) {
        drawCursorLinks(isDark, mouse.x, mouse.y)
      }

      drawNodes(isDark, now)

      raf = requestAnimationFrame(tick)
    }

    setup()
    raf = requestAnimationFrame(tick)
    window.addEventListener('resize', scheduleSetup)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', scheduleSetup)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchstart', onTouch)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onLeave)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg opacity-50 dark:opacity-[0.4]" />
      <div className="absolute inset-0 bg-radial-fade opacity-70 dark:opacity-90" />
      <div className="network-vignette absolute inset-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: reduced ? 0 : 0.96 }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/6 to-bg/62 dark:via-bg/8 dark:to-bg/66" />
    </div>
  )
}
