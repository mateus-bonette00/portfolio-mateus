import { useTheme } from '../hooks/useTheme'

type Props = {
  className?: string
  alt?: string
  draggable?: boolean
}

export function Logo({ className = '', alt = 'Mateus Bonette', draggable = false }: Props) {
  const { theme } = useTheme()
  const src =
    theme === 'dark'
      ? '/images/logo-branca-mateus.png'
      : '/images/logo-mateus-bonette.png'

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      draggable={draggable}
    />
  )
}
