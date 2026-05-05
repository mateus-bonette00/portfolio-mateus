import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const p = useScrollProgress()
  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-accent via-accent-cyan to-accent-pink"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  )
}
