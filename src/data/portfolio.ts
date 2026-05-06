import type { Project, Skill, Experience } from '../types'

export const PROFILE = {
  name: 'Mateus Bonette',
  role: 'Engenheiro de Software Full Stack',
  tagline:
    'Engenheiro de Software Full Stack | IA Aplicada | Produto | Automação e Soluções Digitais',
  location: 'Brasil',
  email: 'mateus.bonette00@gmail.com',
  bio: 'Sou Bacharel em Ciência da Computação pela UNIFEI. Gosto de construir produtos completos, com atenção aos detalhes que mudam a experiência de quem usa.',
  social: {
    github: '#',
    linkedin: '#',
    instagram: '#',
    discord: '#',
  },
}

export const SKILLS: Skill[] = [
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'NestJS', level: 80, category: 'backend' },
  { name: 'Python', level: 82, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'data' },
  { name: 'MongoDB', level: 78, category: 'data' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'Git', level: 92, category: 'tools' },
]

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Em breve: Projeto 01',
    description:
      'Espaço reservado. Em breve um caso real com problema, solução e resultado.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    id: 'p2',
    title: 'Em breve: Projeto 02',
    description:
      'Espaço reservado. Conteúdo será adicionado com print, descrição e links.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    year: '2025',
  },
  {
    id: 'p3',
    title: 'Em breve: Projeto 03',
    description:
      'Outro projeto em construção. Logo terá título, stack e link para acessar.',
    tags: ['Python', 'FastAPI', 'Docker'],
    year: '2024',
  },
  {
    id: 'p4',
    title: 'Em breve: Projeto 04',
    description:
      'Adicione um produto, automação ou estudo de caso que mostre seu trabalho.',
    tags: ['React', 'Tailwind', 'Framer'],
    year: '2024',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Empresa atual (em breve)',
    period: '2025 até hoje',
    description:
      'Substitua este texto pela descrição da sua função atual, principais responsabilidades e conquistas.',
    highlights: [
      'Conquista importante 1',
      'Conquista importante 2',
      'Conquista importante 3',
    ],
  },
  {
    role: 'Desenvolvedor',
    company: 'Experiência anterior (em breve)',
    period: '2023 a 2024',
    description:
      'Resumo da sua experiência anterior, projetos entregues e tecnologias utilizadas.',
  },
]

export const EDUCATION = {
  degree: 'Bacharelado em Ciência da Computação',
  institution: 'Universidade Federal de Itajubá (UNIFEI)',
  period: '2020 a 2025',
  description:
    'Formação completa em fundamentos de computação, engenharia de software, algoritmos, bancos de dados, redes e inteligência artificial.',
  achievements: [
    'Projetos práticos com times multidisciplinares',
    'Trabalho de conclusão na área de desenvolvimento full stack',
    'Participação ativa em laboratórios e iniciativas acadêmicas',
  ],
}

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Tecnologias', href: '#skills' },
  { label: 'Experiências', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]
