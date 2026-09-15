import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Scroll reveals + stagger na página de proposta (respeita reduced-motion). */
export function useProposalScroll(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      ScrollTrigger.batch('[data-stagger] > *', {
        start: 'top 90%',
        once: true,
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 28,
            opacity: 0,
            duration: 0.55,
            stagger: 0.09,
            ease: 'power2.out',
            overwrite: true,
            clearProps: 'transform',
          })
        },
      })
    },
    { scope, dependencies: [] },
  )
}
