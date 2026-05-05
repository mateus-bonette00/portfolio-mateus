import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Cursor() {
  const reduced = useReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduced) return
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    document.body.style.cursor = 'none'
    window.addEventListener('mousemove', onMove)
    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduced, visible])

  if (reduced) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent transition-opacity duration-200 dark:bg-white ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}
