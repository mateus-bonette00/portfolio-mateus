import { Check, Copy } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { PROFILE, UI } from '../data/portfolio'

type CopyEmailControlProps = {
  variant: 'hero' | 'contact'
}

const wrapperClass: Record<CopyEmailControlProps['variant'], string> = {
  hero:
    'social-icon icon-tile group relative inline-flex h-10 w-auto max-w-full items-center justify-center gap-2.5 rounded-xl px-3 sm:px-4',
  contact: 'btn-primary group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold',
}

const textClass: Record<CopyEmailControlProps['variant'], string> = {
  hero: 'select-text cursor-text truncate text-sm font-medium sm:text-base',
  contact: 'select-text cursor-text',
}

export function CopyEmailControl({ variant }: CopyEmailControlProps) {
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    if (!emailCopied) return
    const timer = window.setTimeout(() => setEmailCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [emailCopied])

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setEmailCopied(true)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = PROFILE.email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setEmailCopied(true)
    }
  }, [])

  return (
    <div
      className={wrapperClass[variant]}
      data-cursor={variant === 'contact' ? 'hover' : undefined}
    >
      <span className={textClass[variant]}>
        {emailCopied ? UI.contact.emailCopiedLabel : PROFILE.email}
      </span>
      <button
        type="button"
        onClick={handleCopyEmail}
        className="inline-flex shrink-0 items-center justify-center rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label={emailCopied ? UI.contact.emailCopiedAria : UI.contact.copyEmailAria}
      >
        {emailCopied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      </button>
    </div>
  )
}
