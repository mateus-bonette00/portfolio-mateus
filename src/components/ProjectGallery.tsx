import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { UI } from '../data/portfolio'

type Props = {
  images: string[]
  title: string
  autoplayMs?: number
}

export function ProjectGallery({ images, title, autoplayMs = 2000 }: Props) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = images.length
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return
      const wrapped = ((next % total) + total) % total
      setIndex(wrapped)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (isPaused || total <= 1) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, autoplayMs)
    return () => window.clearInterval(timer)
  }, [isPaused, total, autoplayMs])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') next()
      else if (event.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX
    touchEndX.current = null
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    touchEndX.current = event.touches[0].clientX
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return
    const delta = touchStartX.current - touchEndX.current
    const threshold = 40
    if (delta > threshold) next()
    else if (delta < -threshold) prev()
    touchStartX.current = null
    touchEndX.current = null
  }

  if (total === 0) return null

  const hasMultiple = total > 1

  return (
    <div
      className="project-gallery"
      role="region"
      aria-roledescription={UI.gallery.carouselRole}
      aria-label={UI.gallery.imagesAria(title)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="project-gallery__stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="project-gallery__slide"
            data-active={i === index ? 'true' : undefined}
            aria-hidden={i === index ? undefined : true}
          >
            <img
              src={src}
              alt={UI.gallery.imageAlt(title, i + 1, total)}
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </div>
        ))}

        {hasMultiple && (
          <>
            <button
              type="button"
              className="project-gallery__arrow project-gallery__arrow--prev"
              onClick={prev}
              aria-label={UI.gallery.previous}
            >
              <ChevronLeft size={22} aria-hidden />
            </button>
            <button
              type="button"
              className="project-gallery__arrow project-gallery__arrow--next"
              onClick={next}
              aria-label={UI.gallery.next}
            >
              <ChevronRight size={22} aria-hidden />
            </button>
          </>
        )}

        <div className="project-gallery__counter" aria-live="polite">
          {index + 1} / {total}
        </div>
      </div>

      {hasMultiple && (
        <div className="project-gallery__dots" role="tablist" aria-label={UI.gallery.selectImage}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className="project-gallery__dot"
              data-active={i === index ? 'true' : undefined}
              onClick={() => goTo(i)}
              aria-label={UI.gallery.goToImage(i + 1)}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  )
}
