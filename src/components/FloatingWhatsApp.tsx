import { PROFILE, UI } from '../data/portfolio'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

type FloatingWhatsAppProps = {
  variant?: 'default' | 'static' | 'inline'
}

export function FloatingWhatsApp({ variant = 'default' }: FloatingWhatsAppProps) {
  const isInline = variant === 'inline'
  const isStatic = variant === 'static' || isInline
  const className = [
    'floating-whatsapp',
    isStatic ? 'floating-whatsapp--static' : '',
    isInline ? 'floating-whatsapp--inline' : '',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <a
      href={PROFILE.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={UI.floatingWhatsApp.aria}
      data-cursor="hover"
      className={className}
    >
      <span aria-hidden className="floating-whatsapp__glow" />
      <WhatsAppIcon size={24} className="relative z-[2]" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
