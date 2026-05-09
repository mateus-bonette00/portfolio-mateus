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
    github: 'https://github.com/mateus-bonette00',
    linkedin: 'https://www.linkedin.com/in/mateus-bonette/',
    instagram: 'https://www.instagram.com/mateus_bonette/',
    discord: 'https://discord.com/users/369971337755623427',
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
  {
    id: 'p5',
    title: 'Em breve: Projeto 05',
    description:
      'Espaço reservado para o Projeto 05. Caso completo será adicionado em breve.',
    tags: ['TypeScript', 'React', 'Node.js'],
    year: '2024',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Moontech',
    employmentType: 'Tempo integral',
    period: 'mai de 2024 - mai de 2026 · 2 anos',
    location: 'Remoto',
    isCurrentRole: false,
    description: [
      'Fábrica de software que desenvolve sistemas, plataformas e automações para empresas de diferentes segmentos.',
      'Dev full stack que virou o resolvedor de problemas do time. Entrei em um time de 8 pessoas, reportando ao gerente de projeto e ao CTO. Na prática, virei referência para resolver problemas fora do escopo técnico: atuei em desenvolvimento, automação com IA, vendas e prospecção de clientes, sempre com autonomia. Entreguei código, criei automações para o comercial, vendi software e gerenciei servidores.',
    ],
    highlights: [
      'Desenvolvi front com Angular e backend com Next.js e GraphQL. Entreguei o site institucional da Moontech e participei do Apolo, sistema de monitoramento de qualidade ISO 9001 para indústria.',
      'Construí automações com IA integradas ao CRM (HubSpot) que qualificavam leads, geravam propostas automáticas, respondiam clientes e davam suporte no pós-venda.',
      'Fiz prospecção ativa e passiva de clientes, qualifiquei leads e marquei reuniões que resultaram em vendas de software.',
      'Gerenciei servidores próprios com Docker e AWS. Deploy, manutenção e automações rodando em produção.',
      'Usei Python e Streamlit para transformar dados internos em visualizações que apoiaram decisões do time.',
      'Participei diretamente das decisões técnicas e comerciais da empresa, com contato frequente com o CTO.',
    ],
    techTags: [
      'Angular',
      'Next.js',
      'GraphQL',
      'PostgreSQL',
      'Python',
      'Docker',
      'AWS',
      'Streamlit',
      'HubSpot',
      'Redmine',
      'DBeaver',
      'PgAdmin',
    ],
    logoImage: '/images/experiences/moontech.jpeg',
    logoAlt: 'Logo da Moontech',
  },
  {
    role: 'Assistente administrativo',
    company: 'Pró-Saúde Materiais Odontomédicos',
    employmentType: 'Meio período',
    period: 'abr de 2020 - fev de 2022 · 1 ano 11 meses',
    location: 'Itajubá, Minas Gerais, Brasil · No local',
    description: ['Loja física de artigos hospitalares localizado na cidade Itajubá - MG.'],
    highlights: [
      'Trabalhei com atendimento clientes, vendas, gestão de redes sociais, logísticas e criação das artes dos posts nas redes sociais.',
      'Trabalhei com software de controle de estoque.',
    ],
    skills: 'Marketing, Apoio logístico e mais 3 competências',
    logoImage: '/images/experiences/prosaude.jpg',
    logoAlt: 'Logo da Pró-Saúde Materiais Odontomédicos',
  },
  {
    role: 'Gerente de Vendas',
    company: 'byron.solutions',
    employmentType: 'Tempo integral',
    period: 'abr de 2020 - nov de 2021 · 1 ano 8 meses',
    location: 'Itajubá, Minas Gerais, Brasil · Remoto',
    description: ['Empresa Júnior focada em desenvolvimento de sites e aplicativos.'],
    highlights: [
      'Trabalhei na área de vendas, onde aprendi e ensinei técnicas de cold call, precificação e pós-venda.',
      'Trabalhei em projetos como Product Owner.',
      'Trabalhei e ensinei metodologias ágeis para gerenciamento de projetos, como o Scrum.',
      'Trabalhei em paralelo a vendas como designer de sites utilizando a ferramenta Figma, utilizando técnicas em UX.',
    ],
    skills:
      'Experiência do usuário (UX), Design de experiência do usuário (UX) e mais 10 competências',
    logoImage: '/images/experiences/byron.jpeg',
    logoAlt: 'Logo da byron.solutions',
  },
  {
    role: 'Professor',
    company: 'CAAI - Curso Assistencial Amigos de Itajubá',
    employmentType: 'Tempo integral',
    period: 'mar de 2019 - fev de 2021 · 2 anos',
    location: 'Itajubá, Minas Gerais, Brasil',
    description: [
      'O CAAI é um curso assistencial com a missão de transformar vidas por meio da educação.',
      'Dei aula na área de Interpretação de Texto nesse curso que era preparatório para vestibulares, com uma média de 180 alunos na faixa etária de 18 anos de idade.',
    ],
    logoImage: '/images/experiences/caai.jpeg',
    logoAlt: 'Logo do CAAI',
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
