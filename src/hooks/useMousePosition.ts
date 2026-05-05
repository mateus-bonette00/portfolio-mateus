import { useEffect, useState } from 'react'

export type MousePos = { x: number; y: number }

export function useMousePosition(): MousePos {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return pos
}
