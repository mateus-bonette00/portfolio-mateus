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
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-100/80 text-emerald-800 shadow-soft backdrop-blur-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg dark:border-emerald-400/35 dark:bg-emerald-400/12 dark:text-emerald-200"
    >
      <WhatsAppIcon />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}

