import { siWhatsapp } from 'simple-icons'

type WhatsAppIconProps = {
  size?: number
  className?: string
}

export function WhatsAppIcon({ size = 22, className }: WhatsAppIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={siWhatsapp.path} fill="currentColor" />
    </svg>
  )
}
