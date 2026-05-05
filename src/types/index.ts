export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
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
  period: string
  description: string
  highlights?: string[]
}
