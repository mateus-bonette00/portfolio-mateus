import { WhatsAppIcon } from './icons/WhatsAppIcon'

const WHATSAPP_NUMBER = '5535998183459'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      data-cursor="hover"
      className="floating-whatsapp"
    >
      <span aria-hidden className="floating-whatsapp__glow" />
      <WhatsAppIcon size={24} className="relative z-[2]" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
