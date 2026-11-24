export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  desktopImage?: string
  mobileImage?: string
  gallery?: string[]
  video?: string
  videoPoster?: string
  platform?: 'responsive' | 'mobile'
  deviceType?: 'desktop' | 'mobile'
  link?: string
  repo?: string
  year?: string
  descriptionFull?: string
  highlights?: string[]
  techFull?: string[]
  recruiterText?: string
}

export type Skill = {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'data'
}

export type SkillGroupContent = {
  id: string
  title: string
  summary: string
  items: Array<{
    id: string
    name: string
    description: string
  }>
}

export type PostgradEducation = {
  degree: string
  institution: string
  period: string
  status: string
  description: string
  highlights: string[]
}

export type LanguageItem = {
  name: string
  level: string
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
  logoFit?: 'cover' | 'contain'
  /** Se true, exibe selo "Atual" e destaque na timeline. Omitido/false na experiência mais recente encerrada. */
  isCurrentRole?: boolean
}
