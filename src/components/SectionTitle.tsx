import { motion } from 'framer-motion'

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  descriptionClassName = '',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  descriptionClassName?: string
}) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="eyebrow-rule" aria-hidden />
        <span className="heading-eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-3 section-title-display"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`mt-4 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          } ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
