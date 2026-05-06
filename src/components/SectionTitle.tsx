import { motion } from 'framer-motion'

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  descriptionClassName = '',
  denseMobile = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  descriptionClassName?: string
  denseMobile?: boolean
}) {
  return (
    <div
      className={`${denseMobile ? 'mb-6 sm:mb-10 section-title--dense-mobile' : 'mb-10'} ${
        align === 'center' ? 'text-center' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center ${denseMobile ? 'gap-2 sm:gap-4' : 'gap-4'} ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="eyebrow-rule" aria-hidden />
        <span className="heading-eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={`section-title-display ${denseMobile ? 'mt-2 sm:mt-3' : 'mt-3'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`section-title__desc mt-4 max-w-2xl leading-relaxed text-ink-dim ${
            denseMobile ? 'text-sm sm:text-lg' : 'text-base sm:text-lg'
          } ${denseMobile ? 'max-sm:mt-3' : ''} ${align === 'center' ? 'mx-auto' : ''} ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
