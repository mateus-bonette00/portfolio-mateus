export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  desktopImage?: string
  mobileImage?: string
  platform?: 'responsive' | 'mobile'
  link?: string
  repo?: string
  year?: string
}

export type Skill = {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'data'
}

export type Experience = {
  role: string
  company: string
  employmentType: string
  period: string
  location?: string
  description?: string[]
  highlights?: string[]
  skills?: string
  techTags?: string[]
  logoImage?: string
  logoAlt?: string
  /** Se true, exibe selo "Atual" e destaque na timeline. Omitido/false na experiência mais recente encerrada. */
  isCurrentRole?: boolean
}
