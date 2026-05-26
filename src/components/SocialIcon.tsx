import type { ReactNode } from 'react'

type SocialIconProps = {
  href: string
  label: string
  children: ReactNode
}

export function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon icon-tile relative inline-flex h-10 w-10 cursor-pointer items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {children}
    </a>
  )
}
