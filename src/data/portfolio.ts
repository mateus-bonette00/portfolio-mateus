import type { Project, Skill, Experience } from '../types'
import { getCurrentLocale, type Locale } from '../i18n/routes'

const PROFILE_PT = {
  name: 'Mateus Bonette',
  role: 'Engenheiro de Software Full Stack',
  tagline:
    'Engenheiro de Software Full Stack | IA Aplicada | Produto | Automação e Soluções Digitais',
  location: 'Brasil',
  email: 'mateus.bonette00@gmail.com',
  bio: 'Bacharel em Ciência da Computação pela Universidade Federal de Itajubá. Viciado em Resolver Problemas.',
  social: {
    github: 'https://github.com/mateus-bonette00',
    linkedin: 'https://www.linkedin.com/in/mateus-bonette/',
    instagram: 'https://www.instagram.com/mateus_bonette/',
    discord: 'https://discord.com/users/369971337755623427',
    whatsapp: 'https://wa.me/5535998183459',
  },
}

function buildGallery(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/prints-do-projeto/${prefix}-${i + 1}.png`)
}

const SKILLS_PT: Skill[] = [
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

const PROJECTS_PT: Project[] = [
  {
    id: 'coinsight',
    title: 'CoinSight TCC',
    description:
      'Projeto em Python + Streamlit que integra ETL de preços, banco PostgreSQL, modelos de Machine Learning e dashboards analíticos. O foco central do TCC foi investigar como fatores sociais e geopolíticos afetam os valores das criptomoedas.',
    tags: ['Python', 'Streamlit', 'PostgreSQL', 'Scikit-learn'],
    year: '2025',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-coinsight-preview.png',
    gallery: buildGallery('coinsight', 12),
    descriptionFull:
      'O CoinSight foi desenvolvido para responder uma pergunta de pesquisa prática: como fatores sociais e geopolíticos influenciam o comportamento de preços de criptomoedas, e como isso pode ser incorporado em modelos preditivos?\n\nNa base técnica, o projeto implementa um fluxo end-to-end: coleta e atualização de dados OHLC de BTC, ETH, ADA e SOL via ETL; armazenamento estruturado em PostgreSQL; interface web em Streamlit com múltiplas páginas para exploração visual, indicadores e previsões; módulos de Machine Learning para engenharia de features, treino, comparação de modelos, backtesting e walk-forward analysis; e uma camada de eventos geopolíticos, notícias e sentimento social para contextualizar movimentos de preço.\n\nO projeto foi aplicado com dados reais em rotina de análise, o que vai além do protótipo acadêmico e demonstra aplicação prática concreta.',
    highlights: [
      'Arquitetura modular separando ETL, interface, componentes e ML.',
      'Engenharia de features técnicas e geopolíticas no mesmo pipeline.',
      'Validação temporal e walk-forward analysis para reduzir avaliação otimista.',
      'Persistência de previsões com métricas no banco para histórico comparável.',
      'Backtesting com métricas de risco e retorno além de erro estatístico.',
      'Integração de contexto externo (eventos/notícias/social) no fluxo de análise.',
    ],
    techFull: [
      'Python', 'Streamlit', 'SQLAlchemy', 'PostgreSQL', 'psycopg2-binary',
      'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM',
      'TensorFlow/Keras', 'Plotly', 'yfinance', 'Requests', 'joblib',
      'python-dotenv', 'vaderSentiment',
    ],
    recruiterText:
      'Projeto de TCC com aplicação real que demonstra maturidade em ciclo completo de dados: ingestão, modelagem, avaliação e visualização. O CoinSight evidencia capacidade de conectar pesquisa aplicada com engenharia de software, especialmente em cenários de série temporal e integração de múltiplas fontes de sinal.',
  },
  {
    id: 'noara',
    title: 'Noara E-commerce',
    description:
      'Projeto real de cliente para a NOARA Semi Joias, construído e publicado em produção após fase de protótipo. Hoje opera com conversão via WhatsApp e backoffice próprio para gestão de produtos, avaliações, uploads e lançamentos financeiros.',
    tags: ['React', 'Fastify', 'PostgreSQL', 'Prisma'],
    year: '2025',
    deviceType: 'desktop',
    image: '/images/projects/cover/noara-ecommerce-1.png',
    gallery: buildGallery('noara-ecommerce', 18),
    descriptionFull:
      'A NOARA Commerce Platform é uma aplicação full stack criada para um cliente real do segmento de semi joias. O projeto começou como protótipo visual e, após aprovação, foi evoluído e publicado em produção.\n\nA arquitetura foi separada em duas partes: frontend em React/Vite com experiência pública da marca — catálogo com filtros, página de produto, avaliações e jornada de compra via WhatsApp — e backend em Fastify/Prisma/PostgreSQL para autenticação administrativa, gestão de catálogo, avaliações, uploads e controle financeiro.\n\nA decisão de negócio nesta fase foi não implementar checkout interno ainda, concentrando o funil no WhatsApp para reduzir complexidade e custo inicial. Mesmo assim, o sistema sustenta operação real com painel interno para a dona da loja manter os dados atualizados sem depender de código.',
    highlights: [
      'Arquitetura full stack com separação clara entre front-end público e backoffice.',
      'Painel administrativo funcional para operação real do cliente.',
      'Modelagem relacional de catálogo, avaliações e financeiro com Prisma.',
      'Valores monetários com tipo Decimal no banco para precisão financeira.',
      'Upload de imagens com redimensionamento e conversão automática para WebP.',
      'Autenticação admin com cookie HTTP-only e validação de sessão segura.',
      'Deploy automatizado em servidor Linux com Nginx, PM2 e HTTPS.',
    ],
    techFull: [
      'React 18', 'React Router DOM 7', 'Zustand', 'Lucide React',
      'Node.js', 'Fastify', 'Prisma ORM', 'bcryptjs', 'Sharp',
      'PostgreSQL', 'JWT', 'Cookie HTTP-only', 'Tailwind CSS',
      'Vite', 'Nginx', 'PM2',
    ],
    recruiterText:
      'Projeto full stack de cliente real, com entrega completa de produto: experiência pública em React, API Fastify com Prisma/PostgreSQL, autenticação administrativa, CRUD de catálogo, upload de mídia e módulo financeiro operacional. Evidencia capacidade de decisão técnica pragmática, execução ponta a ponta e publicação em produção.',
  },
  {
    id: 'gabi-xavier',
    gallery: buildGallery('curso-gabi-xavier', 15),
    title: 'Curso Pilates Gabi Xavier',
    description:
      'Projeto real de cliente para fortalecer marca profissional e aumentar vendas de curso online. Combina quiz interativo, landing page comercial, prova social, oferta com planos e integração com checkout externo.',
    tags: ['Next.js', 'React', 'TypeScript', 'Meta Pixel'],
    year: '2024',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-gabi-xavier-preview.png',
    descriptionFull:
      'Este é um projeto web comercial desenvolvido para cliente real, com objetivo de fortalecer posicionamento de marca e gerar mais vendas no digital. A aplicação foi construída como um funil de conversão: o usuário é engajado por um quiz de perfil, recebe direcionamento personalizado e segue para uma landing page de oferta com argumentos, provas sociais e chamadas para ação.\n\nNo quiz, a pessoa informa dados como peso, altura, idade, objetivos, nível de experiência, rotina disponível e dificuldades. O fluxo valida os dados por etapa, salva o perfil no navegador e usa essas informações para adaptar trechos da comunicação na landing.\n\nO projeto inclui rastreamento de eventos com Meta Pixel no cliente e envio server-side para a Conversions API, ajudando a medir interesse, cliques e intenção de compra. A estrutura foi construída de forma reaproveitável para outros produtos digitais.',
    highlights: [
      'Funil completo (quiz + personalização + oferta + checkout) em uma única aplicação.',
      'Personalização de conteúdo baseada em perfil tipado.',
      'Estratégia de tracking híbrido: client-side e server-side via Conversions API.',
      'Código organizado por componentes reutilizáveis.',
      'Estrutura facilmente adaptável para outros infoprodutos com troca de conteúdo e URLs.',
    ],
    techFull: [
      'Next.js 16 (App Router)', 'React 19', 'TypeScript', 'CSS Modules',
      'Route Handlers (API no Next.js)', 'Meta Pixel', 'Facebook Conversions API',
      'ESLint', 'localStorage / sessionStorage', 'Kiwify',
    ],
    recruiterText:
      'Projeto real de cliente que demonstra capacidade de construir produtos web orientados a resultado. Funil completo em Next.js com quiz de qualificação, personalização dinâmica de conteúdo, landing de conversão e tracking de eventos com Pixel + Conversions API. O case evidencia domínio técnico de front-end moderno, organização de código e visão de negócio aplicada ao desenvolvimento.',
  },
  {
    id: 'teacher-ediane',
    gallery: buildGallery('curso-teacher-ediante', 20),
    title: 'Curso Inglês na Mala',
    description:
      'Aplicação web completa com landing page, checkout Mercado Pago, autenticação, área do aluno com áudio e progresso, e painel admin para operação do conteúdo e dos usuários.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Mercado Pago'],
    year: '2024',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-teacher-ediane-preview.png',
    descriptionFull:
      'O projeto implementa uma plataforma digital de ensino com foco em conversão comercial e entrega de conteúdo. A pessoa interessada entra pela landing page, entende a proposta do curso, faz a compra no Mercado Pago, confirma o e-mail, define a senha e acessa a área do aluno — tudo em um fluxo contínuo.\n\nNo lado técnico, o backend em Node.js/Express gerencia autenticação com JWT, fluxo de compra com webhook idempotente, envio de e-mails transacionais via Brevo, upload de áudio, controle de progresso por módulo e reordenação de conteúdo com transação no banco.\n\nO painel administrativo permite gerenciar alunos, compras, módulos e frases de forma independente, sem necessidade de acesso ao código. O projeto está em produção com domínio próprio e uso diário real.',
    highlights: [
      'Fluxo de pagamento com webhook idempotente, evitando processamento duplicado.',
      'Proteção de rotas por autenticação, papel do usuário e compra ativa.',
      'Cadastro com token e código de verificação por e-mail, com limite de tentativas.',
      'Fluxo de criação de senha por token após aprovação da compra.',
      'Dashboard administrativo com operação real de alunos, compras e módulos.',
      'Upload e entrega de mídia no próprio backend.',
      'Reordenação de frases com transação para evitar conflito de numeração.',
      'Validações com CORS, Helmet, HPP e rate limiting.',
    ],
    techFull: [
      'React', 'React Router DOM', 'Axios', 'Node.js', 'Express 5',
      'PostgreSQL', 'pg', 'bcrypt', 'jsonwebtoken', 'multer',
      'cors', 'helmet', 'express-rate-limit', 'hpp', 'Nodemailer',
      'Brevo API', 'Vite', 'ESLint', 'PM2', 'Nginx',
    ],
    recruiterText:
      'Projeto full stack em produção real para cliente do nicho de educação, com domínio próprio, uso diário do painel administrativo e contexto comercial forte. Mostra domínio prático de React, Node.js, PostgreSQL e integrações externas, além de capacidade de entregar uma jornada completa do usuário, da compra ao acesso do conteúdo.',
  },
  {
    id: 'qota-finance',
    gallery: buildGallery('qota-finance', 14),
    title: 'Qota Finance',
    description:
      'Aplicação criada para a operação real da Qota Store, com integração às APIs da Amazon, painéis financeiros, alertas e automações. O sistema organiza dados recorrentes e apoia decisões operacionais com atualização contínua.',
    tags: ['React', 'Node.js', 'TypeScript', 'Amazon SP-API'],
    year: '2024',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-qota-finance-preview.png',
    descriptionFull:
      'O Qota Finance é uma aplicação full stack criada para sustentar uma operação real da Qota Store. A ideia central foi sair da dependência de várias telas soltas, planilhas e conferências manuais e concentrar tudo em um sistema único — com leitura financeira e operacional no mesmo lugar.\n\nNo backend, o projeto trabalha com integração ampla às APIs da Amazon usadas na operação, além de e-mail e log para comunicação e rastreio. O código inclui tratamento para sincronização periódica, proteção contra execuções duplicadas, controle de tempo de atualização e regras de negócio que mantêm os dados consistentes.\n\nNo frontend, o sistema entrega módulos separados para dashboard, despesas, entradas, fluxo de caixa, produtos comprados, pedidos, alertas e respostas automáticas.',
    highlights: [
      'Integração ampla com as APIs da Amazon usadas na operação real.',
      'Cliente próprio de SP-API com autenticação LWA e assinatura SigV4.',
      'Controle de rate limit, retry e sincronização com foco em estabilidade.',
      'Workers em background para sync, alertas e autoresponder.',
      'Regras de negócio financeiras específicas, como o tratamento de Prep Center.',
      'Autoresponder com templates, variáveis e canais diferentes.',
      'Alertas com deduplicação, prioridade e rastreio de envio.',
      'Base orientada a dados reais recorrentes e atualização contínua.',
    ],
    techFull: [
      'React 18', 'Vite', 'React Router DOM', 'Axios', 'Recharts', 'CSS Modules',
      'Node.js', 'Express', 'TypeScript', 'Knex', 'Zod', 'PostgreSQL',
      'Amazon SP-API', 'AWS LWA', 'AWS SigV4', 'AWS SQS',
      'Nodemailer', 'Docker Compose', 'Nginx', 'Caddy', 'Vitest',
    ],
    recruiterText:
      'O Qota Finance mostra capacidade de construir uma plataforma real de operação, não só uma interface isolada. O projeto reúne integração com Amazon, automações, regras financeiras e organização de dados em uma aplicação full stack clara, útil e tecnicamente consistente. Evidencia visão de produto, domínio de backend e atenção a confiabilidade operacional.',
  },
  {
    id: 'odontoclin',
    gallery: buildGallery('odontoclin', 4),
    title: 'OdontoClin Agenda',
    description:
      'Aplicação full stack para a rotina de uma clínica odontológica, com agenda semanal, confirmação pública de consulta e automações via WhatsApp. O projeto está em produção, foi usado por uma clínica real e substituiu um fluxo que antes era manual e desorganizado.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp'],
    year: '2024',
    deviceType: 'desktop',
    image: '/images/projects/cover/odontoclin-1.png',
    descriptionFull:
      'O OdontoClin é uma aplicação full stack voltada para a rotina de uma clínica odontológica. No front-end, ele entrega uma agenda semanal visual, criação e edição de consultas, definição de tipo de atendimento, controle de status e navegação por semana. No back-end, gerencia autenticação com JWT, regras de conflito de horário no banco, upload de foto de perfil e integração com WhatsApp via Baileys.\n\nAlém do painel interno, o sistema inclui uma rota pública para confirmação e cancelamento de consultas pelo paciente — sem login — e envio automático de lembretes com controle para não reenviar a mesma consulta.\n\nO projeto está em uso em produção, foi implantado em uma clínica real e substituiu um processo que antes dependia de planilhas e comunicação manual. Isso o torna forte para portfólio porque mostra solução real de negócio com uso prático, não apenas uma interface de demonstração.',
    highlights: [
      'Regra de conflito de horário aplicada no banco, não só na tela.',
      'Fluxo interno e fluxo público conectados no mesmo sistema.',
      'Integração com WhatsApp ligada ao uso real da clínica via Baileys.',
      'Lembretes automáticos com controle para não reenviar a mesma consulta.',
      'Autorização por perfil, com dentista e secretária com acessos diferentes.',
      'Upload de foto de perfil com validação de arquivo.',
      'Interface pensada para uso diário, com foco em agenda e operação.',
    ],
    techFull: [
      'React 19', 'React Router DOM', 'Axios', 'Dayjs',
      'Node.js', 'Express', 'PostgreSQL', 'pg', 'bcryptjs',
      'jsonwebtoken', 'multer', 'Baileys', 'qrcode',
      'Vite', 'ESLint', 'Nodemon', 'dotenv', 'CSS puro', 'PM2',
    ],
    recruiterText:
      'O OdontoClin mostra capacidade de entregar uma solução full stack para um problema real de operação. O projeto reúne autenticação, permissões por perfil, agenda, confirmação pública de consulta, automações por WhatsApp e regra de banco para evitar conflito de horário. É um exemplo claro de trabalho que vai além da interface e entra na lógica do produto.',
  },
  {
    id: 'techouse',
    gallery: ['/prints-do-projeto/APP-TECHOUSE.png'],
    title: 'TecHouse Segurança App',
    description:
      'App mobile utilitário criado para um cliente real da área de segurança eletrônica. Em uma única tela, o usuário acessa suporte via WhatsApp, Instagram, localização da empresa em Itajubá e abre diretamente apps de monitoramento e alarme instalados no Android.',
    tags: ['Flutter', 'Dart', 'Android Intents', 'url_launcher'],
    year: '2023',
    deviceType: 'mobile',
    image: '/images/projects/cover/project-techouse-preview.png',
    descriptionFull:
      'O TecHouse Segurança App é um aplicativo Android desenvolvido em Flutter para um cliente real do setor de segurança eletrônica. O objetivo é facilitar a rotina dos clientes finais que recebem instalação de câmeras, alarmes e outros recursos de segurança, entregando um ponto único de acesso para canais de atendimento e aplicativos operacionais.\n\nO fluxo é simples e objetivo: splash screen, tela principal e botões de ação direta. Cada botão executa uma ação específica — abrir WhatsApp, abrir Instagram, mostrar localização no Google Maps ou iniciar apps de monitoramento e alarme já instalados no celular do cliente.\n\nNo lado técnico, a integração com apps externos usa deeplinks para serviços web e intents explícitas para apps Android, com configuração correta de QUERY_ALL_PACKAGES no manifest para funcionar no Android 11+. O resultado é um app leve, sem tela de carregamento longa e sem navegação desnecessária.',
    highlights: [
      'Integração híbrida com apps externos: deeplink para serviços e intent explícita para apps instalados.',
      'Configuração Android 11+ com QUERY_ALL_PACKAGES e <queries> para visibilidade dos apps.',
      'Fluxo orientado a produtividade: abrir recurso em 1 toque, sem navegação longa.',
      'Interface simples para público não técnico, com implementação técnica correta para interoperabilidade mobile.',
    ],
    techFull: [
      'Flutter', 'Dart', 'Material Design', 'url_launcher',
      'android_intent_plus', 'flutter_svg', 'Flutter Lints',
      'Flutter Launcher Icons', 'Gradle KTS', 'Kotlin Android Plugin',
    ],
    recruiterText:
      'Projeto mobile desenvolvido para cliente real da área de segurança, com foco em resolver um problema concreto de usabilidade: centralizar suporte e ferramentas essenciais em um único app. Demonstra capacidade de entender contexto de negócio, implementar solução objetiva e entregar valor prático para usuários finais.',
  },
  {
    id: 'clinica-uh',
    gallery: buildGallery('Clinica-Medica-UH', 13),
    title: 'UH Clínica Web',
    description:
      'Projeto acadêmico full stack da disciplina XDES03, focado em transformar um site institucional de clínica em uma experiência funcional. Além da apresentação da clínica, implementa fluxo completo de formulário de contato, cadastro de conta e login com integração front-end/back-end.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    year: '2023',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-clinica-uh-preview.png',
    descriptionFull:
      'Este projeto foi desenvolvido como trabalho acadêmico da disciplina XDES03 e representa uma aplicação web full stack para uma clínica médica fictícia chamada UH Clínica. A proposta combina comunicação institucional com funcionalidades reais de interação.\n\nO front-end em React entrega páginas de Início, Sobre Nós e Contato, com navegação SPA, mapa integrado e botão de WhatsApp. No lado funcional, o projeto implementa formulário de contato, cadastro de conta e login — todos validados no front-end e integrados com APIs reais no back-end Express, com persistência em arquivos JSON simulando banco de dados.\n\nO resultado final recebeu nota 9,5 na disciplina, evidenciando qualidade de execução e atenção aos requisitos do projeto.',
    highlights: [
      'Entrega full stack funcional (interface + API + persistência).',
      'Fluxo completo de formulários: contato, cadastro e login.',
      'Validação de entrada no front-end com feedback de erro/sucesso.',
      'Estrutura modular por páginas e componentes reutilizáveis.',
      'Integração com Google Maps e WhatsApp para contexto realista de negócio local.',
    ],
    techFull: [
      'React 18', 'React Router DOM', 'Axios', 'React Hook Form',
      'Yup', 'Tailwind CSS', 'React Icons', 'Node.js', 'Express',
      '@react-google-maps/api', 'Persistência em JSON local',
    ],
    recruiterText:
      'Projeto acadêmico full stack que mostra boa base prática de desenvolvimento web: React com rotas e componentes, formulários validados, integração com backend Express e persistência de dados para simulação de uso real. Evidencia execução completa, cuidado visual e entendimento de fluxo de usuário, com resultado acadêmico de nota 9,5.',
  },
  {
    id: 'conversor-mp4',
    gallery: ['/prints-do-projeto/Converter-Mp4-para-Mp3.png'],
    title: 'Converter MP4 para MP3',
    description:
      'Ferramenta desktop com interface gráfica para selecionar vários vídeos MP4, escolher a pasta de destino e gerar os MP3 localmente. O projeto foi pensado para facilitar a rotina de um cliente que gravava reuniões e precisava transformar esses vídeos em áudio para transcrição em IA.',
    tags: ['Python', 'CustomTkinter', 'FFmpeg', 'PyInstaller'],
    year: '2023',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-conversor-mp4-preview.png',
    descriptionFull:
      'O projeto é um aplicativo desktop feito em Python para converter arquivos MP4 em MP3 de maneira local. Em vez de exigir comandos no terminal, ele oferece uma interface visual com seleção de múltiplos arquivos, escolha da pasta de destino, barra de progresso e feedback claro de sucesso, aviso e erro.\n\nFoi criado para um cliente que gravava reuniões em vídeo e precisava converter vários arquivos de uma vez para organizar os áudios e seguir com transcrição em IA. A conversão acontece inteiramente no computador do usuário, sem depender de serviço externo ou conta em nenhuma plataforma.\n\nO projeto inclui build automatizado com PyInstaller e GitHub Actions para geração de executável Windows, e foi pensado para rodar também no Linux com dependências configuradas.',
    highlights: [
      'Conversão local sem depender de serviço externo.',
      'Interface simples para usuário não técnico.',
      'Processamento em lote com feedback visual por arquivo.',
      'Thread separada para manter a interface responsiva durante a conversão.',
      'Tratamento de duplicados e arquivos inválidos.',
      'Proteção contra sobrescrita de arquivos já existentes.',
      'Entrega pensada para Linux e Windows.',
      'Build automatizado com geração de executável via GitHub Actions.',
    ],
    techFull: [
      'Python', 'CustomTkinter', 'Tkinter', 'FFmpeg', 'Subprocess',
      'Threading', 'Pathlib', 'Bash', 'Batch', 'PyInstaller',
      'GitHub Actions', 'Zenity', 'Chocolatey',
    ],
    recruiterText:
      'Este projeto mostra maturidade na entrega de uma ferramenta simples, mas bem resolvida. Reúne interface gráfica, integração com FFmpeg, processamento em lote, tratamento de erros e empacotamento para Windows, deixando claro que é possível construir soluções práticas com foco em uso real e não apenas demonstrações técnicas.',
  },
  {
    id: 'eco-afodelos',
    gallery: buildGallery('eco-de-afodelos', 9),
    title: 'Ecos de Ásfodelos',
    description:
      'Projeto acadêmico de jogo 2D com ritmo de arena, escolhas entre ondas e progressão por cartas. O jogo foi pensado para apresentação presencial e mostra um fluxo completo de partida, do menu inicial até a vitória ou derrota.',
    tags: ['Godot 4.5', 'GDScript', 'GDShader', 'HTML5'],
    year: '2023',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-eco-afodelos-preview.png',
    descriptionFull:
      'Ecos de Ásfodelos é um jogo 2D feito em Godot que organiza a experiência em um ciclo bem definido: tela inicial, menu principal, escolha de dificuldade, partida, progressão entre ondas, chefe final e tela de resultado. O projeto foi desenvolvido como trabalho acadêmico e apresentado presencialmente em um evento universitário de games indie na UNIFEI.\n\nO combate é em arena com ondas de inimigos. Entre cada onda, a Cartomante aparece para oferecer cartas de progressão que mudam o comportamento do personagem — criando sinergias reais entre escolhas. O jogo termina com uma fase de chefe com padrões distintos de ataque e transição própria.\n\nO projeto demonstra domínio completo da engine Godot, com uso de cenas, sinais, shaders, autoloads, suporte a gamepad e exportação para Web e Desktop.',
    highlights: [
      'Sistema de cartas que muda o comportamento do personagem de forma prática e visível.',
      'Sinergias entre grupos de cartas, criando uma camada real de decisão na progressão.',
      'Chefe com estrutura própria, transição de fase e padrões diferentes de ataque.',
      'Interface e gameplay conectados por sinais, timers e cenas separadas.',
      'Suporte a teclado e controle em combate, menus, pausa e seleção de cartas.',
      'Feedback visual e sonoro para leitura rápida ao jogador durante a ação.',
    ],
    techFull: [
      'Godot 4.5', 'GDScript', 'Scenes .tscn', 'CanvasLayer', 'Control UI',
      'CharacterBody2D', 'Area2D', 'AnimatedSprite2D', 'GDShader', 'ShaderMaterial',
      'ConfigFile', 'AudioServer', 'DisplayServer', 'Autoloads',
      'Windows Desktop Export', 'Web Export', 'Keyboard Input', 'Gamepad Input',
    ],
    recruiterText:
      'Ecos de Ásfodelos mostra capacidade de entregar um projeto interativo completo em Godot, com menu, combate, progressão, interface, feedback visual e fechamento de experiência. O jogo foi desenvolvido como trabalho acadêmico e apresentado presencialmente em evento universitário, reforçando capacidade de construir algo que funciona bem como produto jogável e como demo de portfólio.',
  },
  {
    id: 'fba-automation',
    gallery: buildGallery('fba-automation', 7),
    title: 'FBA Automation',
    description:
      'Projeto em React, FastAPI e Playwright desenvolvido para um cliente real que trabalha com Amazon nos Estados Unidos. A aplicação centraliza captura de abas, scraping de fornecedores, extração de UPC, filtros de catálogos e exportação de lotes para acelerar um processo que antes era quase totalmente manual.',
    tags: ['React', 'FastAPI', 'Python', 'Playwright'],
    year: '2023',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-fba-automation-preview.png',
    descriptionFull:
      'O FBA Automation Hub foi desenvolvido para um cliente real que trabalha com operações ligadas à Amazon nos Estados Unidos. O projeto nasceu de uma necessidade prática: o processo de encontrar fornecedores, localizar produtos, validar se esses itens tinham aderência ao fluxo de venda na Amazon e organizar os dados era demorado, manual e dependente de muitas verificações repetidas.\n\nO sistema foi construído para atacar esse problema de ponta a ponta. No front-end, existe uma interface em React com módulos separados para processamento de sellers, processamento de produtos, captura de abas do navegador, scraping de fornecedores e painel de automação. No back-end, a aplicação usa FastAPI para receber arquivos CSV, aplicar filtros, controlar a automação e interagir com o navegador via modo debug.\n\nO projeto inclui leitura de fornecedores via Google Sheets, retomada de execuções interrompidas, logs em tempo real, perfis de operação configuráveis, exportação em XLSX com template e suporte a VPN para cenário internacional.',
    highlights: [
      'Extração de UPC e título com múltiplas estratégias para páginas com estruturas diferentes.',
      'Integração entre interface web e automação de navegador real via modo debug.',
      'Fluxo operacional com estado persistido e retomada de execução interrompida.',
      'Perfis de automação configuráveis para cenários diferentes de uso.',
      'Monitoramento de logs em tempo real no painel web.',
      'Quarentena de links e domínios com falha para evitar repetição improdutiva.',
      'Exportação em XLSX com template e em HTML clicável para revisão rápida.',
      'Leitura sequencial de fornecedores via Google Sheets integrada ao fluxo operacional.',
      'Suporte operacional ao uso de VPN para contexto internacional do cliente.',
    ],
    techFull: [
      'React', 'React Router DOM', 'JavaScript', 'Vite',
      'Python', 'FastAPI', 'Uvicorn', 'Playwright', 'Pandas',
      'Requests', 'BeautifulSoup', 'lxml', 'OpenPyXL',
      'Google Sheets CSV', 'CSS', 'ESLint',
    ],
    recruiterText:
      'Este projeto mostra capacidade de desenvolver soluções completas para problemas reais de operação. Em vez de criar apenas uma interface ou um script isolado, foi construída uma ferramenta full stack que conecta automação de navegador, processamento de dados, API e interface web para reduzir trabalho manual, acelerar decisões e organizar o fluxo de trabalho de um cliente real.',
  },
  {
    id: 'panorama-covid',
    gallery: ['/prints-do-projeto/Panorama-covid-brasil.png'],
    title: 'Panorama COVID Brasil',
    description:
      'Projeto de análise de dados feito em Jupyter Notebook para estudar a evolução da COVID-19 com base em dados públicos do Our World in Data. O conteúdo combina exploração, limpeza básica, comparação entre regiões e visualizações com foco especial no Brasil.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    year: '2022',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-panorama-covid-preview.png',
    descriptionFull:
      'O Panorama Analítico da COVID-19 no Brasil é um projeto de análise exploratória de dados construído em Python, dentro de um notebook Jupyter, com apoio de Pandas, Matplotlib e Seaborn. A base usada vem do Our World in Data, um dataset público, real e amplamente reconhecido para estudos de saúde global.\n\nO notebook organiza o processo de forma didática: carrega os dados, trata datas, avalia valores ausentes, cria comparações entre países e regiões e transforma os números em gráficos com explicações textuais. A análise divide o estudo em dois recortes — global e Brasil — para contextualizar melhor os padrões encontrados.\n\nComo foi feito como estudo pessoal, o foco está em mostrar raciocínio analítico e capacidade de trabalhar com dados públicos reais. O resultado é um material claro, útil para portfólio e bom para demonstrar domínio de análise exploratória.',
    highlights: [
      'Trabalha com uma base pública real e ampla, não com dados artificiais.',
      'Faz leitura exploratória com foco em qualidade do dado, estrutura e contexto.',
      'Trata a coluna de datas antes de fazer análises mais profundas.',
      'Usa gráficos para apoiar a interpretação e não só para decorar o notebook.',
      'Separa análise global e análise do Brasil para melhorar a leitura do resultado.',
      'Apresenta explicações em linguagem acessível dentro do próprio notebook.',
    ],
    techFull: [
      'Python', 'Jupyter Notebook', 'Google Colab', 'Pandas',
      'Matplotlib', 'Seaborn', 'matplotlib.ticker', 'warnings',
      'Our World in Data', 'CSV público via GitHub Raw',
    ],
    recruiterText:
      'Este projeto mostra uma entrega prática de análise de dados com Python em um tema real e de grande relevância pública. Evidencia capacidade de organizar uma base extensa, identificar padrões, criar visualizações úteis e explicar os resultados de forma clara. Para recrutadores, demonstra atenção a dados, raciocínio analítico e boa comunicação técnica.',
  },
  {
    id: 'dra-julia',
    gallery: buildGallery('site-links-dra-julia-bonette', 5),
    title: 'Links Dra. Júlia Bonette',
    description:
      'Projeto real para cliente da área da saúde, criado para reunir links importantes em uma página visual, moderna e fácil de usar. A solução ajuda a transformar interesse em contato direto, com uma experiência mais organizada do que um agregador genérico de links.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp'],
    year: '2022',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-dra-julia-preview.png',
    descriptionFull:
      'Este projeto é um microsite estático criado para a cliente real Dra. Júlia Bonette, dentista, com foco em apresentação, organização e conversão. A ideia é reunir em uma única página os principais caminhos de contato e informação, facilitando a jornada de quem chega até a marca e precisa entender rapidamente como falar com a profissional ou acessar seus serviços.\n\nA página foi construída com HTML, CSS e JavaScript puro — sem framework — com foco em leveza, carregamento rápido e responsividade consistente. Os botões de WhatsApp usam links pré-formatados para orientar o primeiro contato. Toda a interação foi pensada para funcionar bem tanto em celular quanto em desktop, com suporte básico a teclado e atenção à preferência de redução de movimento.',
    highlights: [
      'Implementação leve, sem framework, adequada para uma página de conversão rápida.',
      'Uso de links pré-formatados no WhatsApp para orientar o primeiro contato.',
      'Cards clicáveis por inteiro, melhorando a usabilidade.',
      'Suporte a teclado para acessibilidade básica.',
      'Microinterações visuais com cursor e toque, sem pesar a página.',
      'Layout responsivo com regras específicas para desktop e mobile.',
      'Atenção à preferência de redução de movimento (prefers-reduced-motion).',
      'Estrutura visual coerente entre topo, cards, seção institucional e rodapé.',
    ],
    techFull: [
      'HTML5', 'CSS3', 'JavaScript Vanilla', 'CSS Variables',
      'Media Queries', 'Google Fonts', 'WhatsApp wa.me',
      'Instagram', 'SVG inline', 'Assets locais de imagem',
    ],
    recruiterText:
      'Este projeto mostra capacidade de transformar uma necessidade simples em uma solução digital útil para cliente real. A entrega combina organização de conteúdo, identidade visual, responsividade, acessibilidade básica e foco em conversão, reforçando visão prática de produto e capacidade de executar interfaces que ajudam o usuário a agir rápido.',
  },
  {
    id: 'contatos-gabi',
    gallery: buildGallery('site-contatos-gabi', 4),
    title: 'Links Gabriela Xavier',
    description:
      'Projeto real para cliente real, com foco em presença digital, apresentação profissional e conversão. A página reúne WhatsApp, Instagram, projeto de curso e seção institucional em uma interface responsiva e personalizada.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    year: '2022',
    deviceType: 'desktop',
    image: '/images/projects/cover/project-contatos-gabi-preview.png',
    descriptionFull:
      'O projeto links-contatos-gabi é uma landing page estática desenvolvida para a cliente real Gabriela Xavier. A proposta é funcionar como uma versão mais bonita, mais personalizada e mais profissional do que um Linktree comum — reunindo, em uma única página, os principais caminhos de contato, redes sociais e projetos da cliente.\n\nA página foi criada para ser compartilhada na bio do Instagram, no WhatsApp, em anúncios e em outros canais, facilitando o acesso rápido a ações como agendamento, visita ao perfil social e acesso ao curso relacionado.\n\nA implementação usa HTML, CSS e JavaScript puro, com efeitos de glassmorphism, gradientes, interações de cursor e toque e suporte a prefers-reduced-motion, tudo sem dependência de framework externo.',
    highlights: [
      'Solução simples, sem framework, mas com acabamento visual profissional.',
      'Cards inteiros clicáveis, reduzindo atrito na navegação.',
      'Suporte a teclado para acessibilidade básica.',
      'Efeito de interação com cursor e toque sem depender de bibliotecas externas.',
      'Responsividade bem resolvida para tela grande e celular.',
      'Ajuste para prefers-reduced-motion, mostrando atenção a acessibilidade.',
      'Estrutura fácil de reaproveitar para outros clientes autônomos.',
    ],
    techFull: [
      'HTML5', 'CSS3', 'JavaScript Vanilla', 'CSS custom properties',
      'Gradientes', 'Glassmorphism', 'Media queries', 'Google Fonts',
      'WhatsApp wa.me', 'Instagram', 'Favicon', 'Meta tags básicas de SEO',
    ],
    recruiterText:
      'Projeto real de cliente que mostra capacidade de criar interfaces web com foco em apresentação, conversão e usabilidade. A entrega foi feita com HTML, CSS e JavaScript puro, com atenção a responsividade, acessibilidade básica e interação visual, demonstrando domínio de front-end e visão prática de produto.',
  },
  {
    id: 'twitch-analytics',
    gallery: buildGallery('twitch-analytics', 6),
    title: 'Twitch Analytics',
    description:
      'Dashboard analítico que coleta dados da API pública da Twitch e oferece busca global, filtros avançados, seleção de tabelas e exportação em Excel, CSV e JSON. Permite analisar streamers, jogos, transmissões, vídeos e clipes em uma única interface.',
    tags: ['Python', 'Streamlit', 'Twitch API', 'Pandas'],
    year: '2024',
    deviceType: 'desktop',
    image: '/prints-do-projeto/twitch-analytics-1.png',
    descriptionFull:
      'O Twitch Analytics é uma aplicação web de análise de dados construída sobre a API pública da Twitch. A proposta é transformar dados brutos da plataforma em informação útil para criadores, analistas e curiosos, permitindo cruzar streamers, jogos, idiomas e métricas de visualização em uma mesma tela.\n\nO usuário escolhe quais tabelas usar (streamers, jogos, transmissões, vídeos, clipes), seleciona colunas, aplica filtros avançados em múltiplos campos e pode exportar o resultado em Excel, CSV ou JSON. Há também busca global, atalhos para top streamers, jogos populares e segmentação por idioma e região (ex: BR/PT).\n\nA aplicação usa Python com Streamlit para a interface, Pandas para manipulação dos dados e integração direta com a API da Twitch. O resultado é uma ferramenta prática que une coleta, transformação e visualização em um fluxo simples.',
    highlights: [
      'Integração direta com a API pública da Twitch para coleta de dados em tempo real.',
      'Busca global por streamers, jogos e idiomas em uma única caixa.',
      'Seleção dinâmica de tabelas e colunas para montar o recorte de análise.',
      'Filtros avançados em múltiplos campos com operadores combináveis.',
      'Exportação dos resultados em Excel, CSV, JSON e visualização em gráfico.',
      'Atalhos para top streamers, jogos populares e segmentação regional.',
    ],
    techFull: [
      'Python', 'Streamlit', 'Twitch API', 'Pandas',
      'Requests', 'OpenPyXL', 'Plotly', 'python-dotenv',
    ],
    recruiterText:
      'Projeto de análise de dados que demonstra capacidade de integrar APIs externas, manipular grandes volumes de informação com Pandas e entregar interface analítica funcional em Streamlit. Une coleta, filtros, visualização e exportação em uma ferramenta prática.',
  },
]

const EXPERIENCES_PT: Experience[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Moontech',
    employmentType: 'Tempo integral',
    period: 'mai de 2024 - até o momento',
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
    role: 'Desenvolvedor Full Stack | Automação de Processos',
    company: 'Pró-Saúde Materiais Odontomédicos',
    employmentType: 'Tempo integral',
    period: 'abr de 2020 - fev de 2022 · 1 ano 11 meses',
    location: 'Itajubá, Minas Gerais, Brasil · No local',
    description: [
      'Digitalização e automação de processos administrativos, comerciais e operacionais, com foco em reduzir trabalho manual, organizar dados e melhorar a eficiência da empresa.',
    ],
    highlights: [
      'Desenvolvimento de automações com Python, JavaScript, Google Sheets, APIs e integrações entre ferramentas digitais.',
      'Criação de sistemas internos para controle financeiro, estoque, operação e apoio à gestão.',
      'Automação de tarefas manuais, redes sociais e fluxos comerciais com IA generativa.',
      'Desenvolvimento de bot para WhatsApp integrado com OpenClaw para atendimento e processos internos.',
    ],
    skills:
      'Python, JavaScript, Automação, IA Generativa, APIs, Google Sheets, WhatsApp Bot, Sistemas Internos e Dados Operacionais.',
    logoImage: '/images/experiences/prosaude.jpg',
    logoAlt: 'Logo da Pró-Saúde Materiais Odontomédicos',
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'byron.solutions',
    employmentType: 'Tempo integral',
    period: 'abr de 2020 - nov de 2021 · 1 ano 8 meses',
    location: 'Itajubá, Minas Gerais, Brasil · Remoto',
    description: [
      'Software house júnior focada no desenvolvimento de sites, aplicações web e soluções digitais para empresas.',
    ],
    highlights: [
      'Desenvolvimento de sites, landing pages, sistemas web, backend, lógica CRUD e integrações via API REST.',
      'Versionamento com Git/GitHub, levantamento de requisitos, organização de backlog no Trello e prototipação no Figma.',
      'Comunicação entre clientes e desenvolvedores para transformar necessidades de negócio em entregas técnicas.',
      'Vivência com Product Owner, gestão de projetos, UX e venda consultiva de soluções digitais.',
    ],
    skills:
      'Full Stack, APIs REST, Git/GitHub, Produto, Gestão de Projetos, Figma, UX e Soluções Digitais.',
    logoImage: '/images/experiences/byron.jpeg',
    logoAlt: 'Logo da byron.solutions',
  },
  {
    role: 'Professor Voluntariado',
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

const EDUCATION_PT = {
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

const NAV_LINKS_PT = [
  { label: 'Início', href: '#hero' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Tecnologias', href: '#skills' },
  { label: 'Experiências', href: '#experience' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

type NavLink = typeof NAV_LINKS_PT[number]
type EducationContent = typeof EDUCATION_PT

export type PortfolioUiContent = {
  metadata: {
    title: string
    description: string
    ogTitle: string
    imageAlt: string
  }
  language: {
    label: string
    switchToPortuguese: string
    switchToEnglish: string
  }
  theme: {
    enableLight: string
    enableDark: string
    lightTitle: string
    darkTitle: string
  }
  common: {
    readMore: string
    readLess: string
    caseLabel: string
    featuredProject: string
    context: string
    process: string
    result: string
    viewDetails: string
    projectTechAria: (title: string) => string
    projectSummaryAria: (title: string) => string
    accessProjectAria: (title: string) => string
  }
  hero: {
    downloadResume: string
    contact: string
    scrollDown: string
    scrollDownAria: string
  }
  about: {
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    graduationLabel: string
    graduationCaption: string
    graduationImageAlt: string
    pillars: Array<{
      title: string
      text: string
    }>
    paragraphs: string[]
  }
  value: {
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    intro: string
    previousAria: string
    nextAria: string
    points: string[]
    cards: Array<{
      title: string
      text: string
      tag: string
    }>
    desktopSummary: string
    mobileSummary: string
    readSummary: string
    hideSummary: string
    mobileSummaryExpanded: string
  }
  skills: {
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    description: string
    filterLabel: string
    swipeLabel: string
    areasLabel: string
    skillsLabel: string
    itemsLabel: string
    masteryLabel: string
    groups: Array<{
      title: string
      summary: string
      items: Array<{
        name: string
        description: string
      }>
    }>
  }
  experience: {
    aria: string
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    description: string
    availabilityAria: string
    timelineAria: string
    current: string
    start: string
    latest: string
    step: string
    moontechLetterPt: string
    moontechLetterEn: string
    moontechLetterPtTitle: string
    moontechLetterEnTitle: string
  }
  projects: {
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    description: string
    featuredCases: string
    featuredCasesDescription: string
    carouselAria: string
    viewAll: string
    allProjects: string
    backToPortfolio: string
    backToProjects: string
    notFoundEyebrow: string
    notFoundTitle: string
    projectEyebrow: string
    aboutProject: string
    technicalHighlights: string
    technologiesUsed: string
    forRecruiters: string
    viewProject: string
    repository: string
    underConstruction: string
    reservedSpaceTitle: string
    reservedSpaceText: string
    openRepository: string
    placeholderCover: string
    placeholderInside: string
  }
  gallery: {
    carouselRole: string
    imagesAria: (title: string) => string
    imageAlt: (title: string, index: number, total: number) => string
    previous: string
    next: string
    selectImage: string
    goToImage: (index: number) => string
  }
  education: {
    eyebrow: string
    titleStart: string
    titleAccent: string
    titleEnd: string
    description: string
    mainImageAlt: string
    ceremony: string
    graduated: string
    classImageAlt: string
    classYear: string
    degreeShort: string
    numbers: string
    yearsFormation: string
    linesWritten: string
    location: string
    diplomaTitle: string
    viewDiploma: string
  }
  contact: {
    eyebrow: string
    title: string
    paragraphs: string[]
    responseLabel: string
    responseValue: string
    locationLabel: string
    locationValue: string
  }
  footer: {
    backToTop: string
    top: string
    text: string
  }
  linksPage: {
    backToPortfolio: string
    links: Array<{
      label: string
      description: string
      kind: 'portfolio' | 'linkedin' | 'resume' | 'github'
    }>
  }
  floatingWhatsApp: {
    aria: string
  }
}

export type PortfolioContent = {
  profile: typeof PROFILE_PT
  skills: Skill[]
  projects: Project[]
  experiences: Experience[]
  education: EducationContent
  navLinks: NavLink[]
  ui: PortfolioUiContent
}

const PROFILE_EN: typeof PROFILE_PT = {
  ...PROFILE_PT,
  role: 'Full Stack Software Engineer',
  tagline: 'Full Stack Software Engineer | Applied AI | Product | Automation and Digital Solutions',
  location: 'Brazil',
  bio: 'Computer Science graduate from the Federal University of Itajuba. Obsessed with solving real problems.',
}

const PROJECT_TRANSLATIONS_EN: Record<string, Partial<Project>> = {
  coinsight: {
    title: 'CoinSight Thesis',
    description:
      'Python + Streamlit project that combines price ETL, PostgreSQL, Machine Learning models and analytical dashboards. The thesis investigated how social and geopolitical factors affect cryptocurrency prices.',
    descriptionFull:
      'CoinSight was built to answer a practical research question: how do social and geopolitical factors influence cryptocurrency prices, and how can those signals be incorporated into predictive models?\n\nTechnically, the project implements an end-to-end flow: OHLC data collection and updates for BTC, ETH, ADA and SOL through ETL; structured storage in PostgreSQL; a Streamlit web interface with multiple pages for visual exploration, indicators and forecasts; Machine Learning modules for feature engineering, training, model comparison, backtesting and walk-forward analysis; plus a geopolitical events, news and social sentiment layer to contextualize price movements.\n\nThe project was applied with real data in an analytical workflow, going beyond an academic prototype and showing concrete practical application.',
    highlights: [
      'Modular architecture separating ETL, interface, components and ML.',
      'Technical and geopolitical feature engineering in the same pipeline.',
      'Temporal validation and walk-forward analysis to reduce optimistic evaluation.',
      'Prediction persistence with database metrics for comparable history.',
      'Backtesting with risk and return metrics beyond statistical error.',
      'External context integration (events/news/social) in the analysis flow.',
    ],
    recruiterText:
      'Thesis project with real application that shows maturity across the data lifecycle: ingestion, modeling, evaluation and visualization. CoinSight demonstrates the ability to connect applied research with software engineering, especially in time-series scenarios and multi-source signal integration.',
  },
  noara: {
    description:
      'Real client project for NOARA Semi Joias, built and deployed after a prototype phase. It now runs with WhatsApp conversion and a custom backoffice for products, reviews, uploads and financial entries.',
    descriptionFull:
      'The NOARA Commerce Platform is a full stack application built for a real client in the semi-jewelry market. The project started as a visual prototype and, after approval, evolved into a production system.\n\nThe architecture is split into two parts: a React/Vite frontend with the public brand experience, catalog filters, product page, reviews and WhatsApp purchase journey; and a Fastify/Prisma/PostgreSQL backend for admin authentication, catalog management, reviews, uploads and financial control.\n\nThe business decision at this stage was to avoid an internal checkout and focus the funnel on WhatsApp, reducing initial complexity and cost. Even so, the system supports a real operation with an internal panel so the store owner can keep data updated without touching code.',
    highlights: [
      'Full stack architecture with clear separation between public frontend and backoffice.',
      'Functional admin panel for a real client operation.',
      'Relational modeling for catalog, reviews and finance with Prisma.',
      'Monetary values using Decimal in the database for financial precision.',
      'Image upload with resizing and automatic WebP conversion.',
      'Admin authentication with HTTP-only cookie and secure session validation.',
      'Automated deployment on Linux server with Nginx, PM2 and HTTPS.',
    ],
    recruiterText:
      'Full stack project for a real client, covering the full product delivery: public React experience, Fastify API with Prisma/PostgreSQL, admin authentication, catalog CRUD, media upload and an operational finance module. It demonstrates pragmatic technical decision-making, end-to-end execution and production deployment.',
  },
  'gabi-xavier': {
    title: 'Gabi Xavier Pilates Course',
    description:
      'Real client project created to strengthen a professional brand and increase online course sales. It combines an interactive quiz, commercial landing page, social proof, offer plans and external checkout integration.',
    descriptionFull:
      'This commercial web project was built for a real client with the goal of strengthening brand positioning and generating more digital sales. The application works as a conversion funnel: users engage with a profile quiz, receive personalized direction and continue to an offer landing page with arguments, social proof and calls to action.\n\nIn the quiz, users provide data such as weight, height, age, goals, experience level, available routine and difficulties. The flow validates data step by step, saves the profile in the browser and uses that information to adapt parts of the landing page communication.\n\nThe project includes event tracking with Meta Pixel on the client and server-side delivery through the Conversions API, helping measure interest, clicks and purchase intent. The structure was built to be reusable for other digital products.',
    highlights: [
      'Complete funnel (quiz + personalization + offer + checkout) in one application.',
      'Typed profile-based content personalization.',
      'Hybrid tracking strategy: client-side and server-side through Conversions API.',
      'Code organized with reusable components.',
      'Structure easily adaptable to other infoproducts by changing content and URLs.',
    ],
    recruiterText:
      'Real client project that shows the ability to build web products focused on business outcomes. Complete Next.js funnel with qualification quiz, dynamic content personalization, conversion landing page and event tracking with Pixel + Conversions API. The case shows modern frontend skills, code organization and business-oriented product thinking.',
  },
  'teacher-ediane': {
    title: 'Ingles na Mala Course',
    description:
      'Complete web application with landing page, Mercado Pago checkout, authentication, student area with audio and progress, and an admin panel for content and user operations.',
    descriptionFull:
      'The project implements a digital learning platform focused on commercial conversion and content delivery. A prospect enters through the landing page, understands the course, buys through Mercado Pago, confirms the email, sets a password and accesses the student area in one continuous flow.\n\nOn the technical side, the Node.js/Express backend handles JWT authentication, an idempotent purchase webhook, transactional emails through Brevo, audio upload, module progress tracking and content reordering with database transactions.\n\nThe admin panel allows independent management of students, purchases, modules and phrases without code access. The project is in production with its own domain and real daily use.',
    highlights: [
      'Payment flow with idempotent webhook, avoiding duplicate processing.',
      'Route protection by authentication, user role and active purchase.',
      'Registration with token and email verification code, including attempt limits.',
      'Password creation flow through token after purchase approval.',
      'Administrative dashboard for real operation of students, purchases and modules.',
      'Media upload and delivery through the backend itself.',
      'Phrase reordering with transaction to avoid numbering conflicts.',
      'Validations with CORS, Helmet, HPP and rate limiting.',
    ],
    recruiterText:
      'Full stack production project for a real education client, with its own domain, daily admin usage and a strong commercial context. It shows practical command of React, Node.js, PostgreSQL and external integrations, plus the ability to deliver a complete user journey from purchase to content access.',
  },
  'qota-finance': {
    description:
      'Application built for Qota Store real operations, integrating Amazon APIs, financial dashboards, alerts and automations. The system organizes recurring data and supports operational decisions with continuous updates.',
    descriptionFull:
      'Qota Finance is a full stack application built to support Qota Store real operations. The core idea was to move away from scattered screens, spreadsheets and manual checks, concentrating everything in one system with financial and operational reading in the same place.\n\nOn the backend, the project works with broad Amazon API integration used in the operation, plus email and logs for communication and traceability. The code includes periodic synchronization handling, duplicate execution protection, update timing control and business rules that keep data consistent.\n\nOn the frontend, the system delivers separate modules for dashboard, expenses, income, cash flow, purchased products, orders, alerts and automatic responses.',
    highlights: [
      'Broad integration with Amazon APIs used in a real operation.',
      'Custom SP-API client with LWA authentication and SigV4 signing.',
      'Rate limit control, retry and synchronization focused on stability.',
      'Background workers for sync, alerts and autoresponder.',
      'Specific financial business rules, such as Prep Center handling.',
      'Autoresponder with templates, variables and different channels.',
      'Alerts with deduplication, priority and delivery tracking.',
      'Data foundation based on recurring real data and continuous updates.',
    ],
    recruiterText:
      'Qota Finance shows the ability to build a real operations platform, not just an isolated interface. The project brings together Amazon integration, automations, financial rules and data organization in a clear, useful and technically consistent full stack application. It demonstrates product vision, backend strength and operational reliability awareness.',
  },
  odontoclin: {
    title: 'OdontoClin Schedule',
    description:
      'Full stack application for a dental clinic routine, with weekly schedule, public appointment confirmation and WhatsApp automations. The project is in production, was used by a real clinic and replaced a manual, disorganized flow.',
    descriptionFull:
      'OdontoClin is a full stack application focused on a dental clinic routine. On the frontend, it delivers a visual weekly schedule, appointment creation and editing, appointment type definition, status control and week navigation. On the backend, it manages JWT authentication, database-level schedule conflict rules, profile photo upload and WhatsApp integration through Baileys.\n\nIn addition to the internal panel, the system includes a public route for patients to confirm or cancel appointments without login, plus automatic reminders with controls to avoid resending the same appointment.\n\nThe project is running in production, was deployed for a real clinic and replaced a process that previously depended on spreadsheets and manual communication. This makes it strong for a portfolio because it shows a real business solution with practical use, not just a demo interface.',
    highlights: [
      'Schedule conflict rule applied at the database level, not only on screen.',
      'Internal and public flows connected in the same system.',
      'WhatsApp integration tied to real clinic usage through Baileys.',
      'Automatic reminders with control to avoid sending the same appointment again.',
      'Role-based authorization with different access for dentist and secretary.',
      'Profile photo upload with file validation.',
      'Interface designed for daily operational use, focused on schedule and routine.',
    ],
    recruiterText:
      'OdontoClin shows the ability to deliver a full stack solution for a real operations problem. The project combines authentication, role permissions, scheduling, public appointment confirmation, WhatsApp automations and a database rule to prevent time conflicts. It is a clear example of work that goes beyond UI and enters product logic.',
  },
  techouse: {
    title: 'TecHouse Security App',
    description:
      'Utility mobile app built for a real client in electronic security. In one screen, users access WhatsApp support, Instagram, the company location in Itajuba and open monitoring/alarm apps installed on Android.',
    descriptionFull:
      'The TecHouse Security App is an Android application built in Flutter for a real client in the electronic security sector. The goal is to simplify the routine of end customers who receive cameras, alarms and other security features, offering a single access point for support channels and operational apps.\n\nThe flow is simple and direct: splash screen, main screen and direct action buttons. Each button runs a specific action: open WhatsApp, open Instagram, show the Google Maps location or launch monitoring and alarm apps already installed on the customer phone.\n\nTechnically, integration with external apps uses deeplinks for web services and explicit intents for Android apps, with the correct QUERY_ALL_PACKAGES manifest configuration for Android 11+. The result is a lightweight app with no long loading screen and no unnecessary navigation.',
    highlights: [
      'Hybrid integration with external apps: deeplinks for services and explicit intents for installed apps.',
      'Android 11+ configuration with QUERY_ALL_PACKAGES and <queries> for app visibility.',
      'Productivity-oriented flow: open a resource in one tap, without long navigation.',
      'Simple interface for non-technical users, with correct technical implementation for mobile interoperability.',
    ],
    recruiterText:
      'Mobile project built for a real security client, focused on solving a concrete usability problem: centralizing support and essential tools in one app. It demonstrates the ability to understand business context, implement an objective solution and deliver practical value to end users.',
  },
  'clinica-uh': {
    title: 'UH Clinic Web',
    description:
      'Academic full stack project for the XDES03 course, focused on turning a clinic institutional site into a functional experience. Beyond presentation, it implements a complete contact form, account creation and login flow with frontend/backend integration.',
    descriptionFull:
      'This project was developed as an academic assignment for the XDES03 course and represents a full stack web application for a fictional medical clinic called UH Clinic. The proposal combines institutional communication with real interaction features.\n\nThe React frontend delivers Home, About Us and Contact pages, SPA navigation, integrated map and WhatsApp button. On the functional side, the project implements contact form, account registration and login, all validated on the frontend and integrated with real Express backend APIs, with JSON files simulating data persistence.\n\nThe final result received a 9.5 grade in the course, showing execution quality and attention to project requirements.',
    highlights: [
      'Functional full stack delivery (interface + API + persistence).',
      'Complete form flow: contact, registration and login.',
      'Frontend input validation with error/success feedback.',
      'Modular structure with reusable pages and components.',
      'Google Maps and WhatsApp integration for a realistic local business context.',
    ],
    recruiterText:
      'Academic full stack project that shows a solid practical foundation in web development: React with routes and components, validated forms, Express backend integration and data persistence for real-use simulation. It demonstrates complete execution, visual care and understanding of user flows, with an academic result of 9.5.',
  },
  'conversor-mp4': {
    title: 'MP4 to MP3 Converter',
    description:
      'Desktop tool with a graphical interface to select multiple MP4 videos, choose the output folder and generate MP3 files locally. It was designed to help a client convert recorded meetings into audio for AI transcription.',
    descriptionFull:
      'The project is a desktop application built in Python to convert MP4 files into MP3 locally. Instead of requiring terminal commands, it offers a visual interface with multiple file selection, destination folder choice, progress bar and clear success, warning and error feedback.\n\nIt was created for a client who recorded meetings on video and needed to convert several files at once to organize audio files and continue with AI transcription. The conversion happens entirely on the user computer, without depending on external services or platform accounts.\n\nThe project includes automated build with PyInstaller and GitHub Actions for Windows executable generation, and was also designed to run on Linux with configured dependencies.',
    highlights: [
      'Local conversion without depending on external services.',
      'Simple interface for non-technical users.',
      'Batch processing with visual feedback per file.',
      'Separate thread to keep the interface responsive during conversion.',
      'Handling for duplicate and invalid files.',
      'Protection against overwriting existing files.',
      'Delivery designed for Linux and Windows.',
      'Automated build with executable generation through GitHub Actions.',
    ],
    recruiterText:
      'This project shows maturity in delivering a simple but well-finished tool. It brings together a graphical interface, FFmpeg integration, batch processing, error handling and Windows packaging, making clear that practical solutions can be built beyond technical demos.',
  },
  'eco-afodelos': {
    title: 'Echoes of Asphodels',
    description:
      'Academic 2D game project with arena rhythm, choices between waves and card-based progression. It was designed for in-person presentation and shows a complete match flow from initial menu to victory or defeat.',
    descriptionFull:
      'Echoes of Asphodels is a 2D game made in Godot that organizes the experience into a clear cycle: start screen, main menu, difficulty choice, match, wave progression, final boss and result screen. The project was developed as academic work and presented in person at a university indie games event at UNIFEI.\n\nCombat happens in an arena with waves of enemies. Between each wave, the Fortune Teller appears to offer progression cards that change the character behavior, creating real synergies between choices. The game ends with a boss phase with distinct attack patterns and its own transition.\n\nThe project demonstrates complete command of the Godot engine, using scenes, signals, shaders, autoloads, gamepad support and export to Web and Desktop.',
    highlights: [
      'Card system that changes character behavior in a visible and practical way.',
      'Synergies between card groups, creating a real decision layer in progression.',
      'Boss with its own structure, phase transition and different attack patterns.',
      'Interface and gameplay connected through signals, timers and separated scenes.',
      'Keyboard and controller support for combat, menus, pause and card selection.',
      'Visual and audio feedback for quick player reading during action.',
    ],
    recruiterText:
      'Echoes of Asphodels shows the ability to deliver a complete interactive project in Godot, with menu, combat, progression, interface, visual feedback and a closed experience. The game was developed as academic work and presented in person at a university event, reinforcing the ability to build something that works as both a playable product and a portfolio demo.',
  },
  'fba-automation': {
    description:
      'React, FastAPI and Playwright project built for a real client working with Amazon in the United States. The application centralizes tab capture, supplier scraping, UPC extraction, catalog filters and batch export to speed up a process that was mostly manual.',
    descriptionFull:
      'The FBA Automation Hub was built for a real client working with Amazon-related operations in the United States. The project came from a practical need: finding suppliers, locating products, validating whether those items fit the Amazon selling flow and organizing the data was slow, manual and dependent on many repeated checks.\n\nThe system was built to solve this problem end to end. On the frontend, there is a React interface with separate modules for seller processing, product processing, browser tab capture, supplier scraping and automation panel. On the backend, the application uses FastAPI to receive CSV files, apply filters, control automation and interact with the browser through debug mode.\n\nThe project includes supplier reading through Google Sheets, interrupted execution recovery, real-time logs, configurable operation profiles, XLSX export with template and VPN support for an international scenario.',
    highlights: [
      'UPC and title extraction with multiple strategies for pages with different structures.',
      'Integration between web interface and real browser automation through debug mode.',
      'Operational flow with persisted state and recovery from interrupted execution.',
      'Configurable automation profiles for different usage scenarios.',
      'Real-time log monitoring in the web panel.',
      'Link and domain quarantine for failures to avoid unproductive repetition.',
      'XLSX export with template and clickable HTML for quick review.',
      'Sequential supplier reading through Google Sheets integrated into the operational flow.',
      'Operational support for VPN usage in the international client context.',
    ],
    recruiterText:
      'This project shows the ability to build complete solutions for real operations problems. Instead of creating only an interface or an isolated script, it delivers a full stack tool connecting browser automation, data processing, API and web interface to reduce manual work, speed up decisions and organize a real client workflow.',
  },
  'panorama-covid': {
    title: 'Brazil COVID Overview',
    description:
      'Data analysis project built in Jupyter Notebook to study COVID-19 evolution based on public Our World in Data data. It combines exploration, basic cleaning, regional comparison and visualizations focused on Brazil.',
    descriptionFull:
      'The Analytical COVID-19 Overview in Brazil is an exploratory data analysis project built in Python inside a Jupyter Notebook, with Pandas, Matplotlib and Seaborn. The dataset comes from Our World in Data, a public, real and widely recognized dataset for global health studies.\n\nThe notebook organizes the process in a didactic way: it loads data, handles dates, evaluates missing values, compares countries and regions and turns numbers into charts with textual explanations. The analysis is split into two views, global and Brazil, to better contextualize the patterns found.\n\nAs a personal study project, the focus is to show analytical reasoning and the ability to work with real public data. The result is a clear and useful portfolio piece for demonstrating exploratory analysis skills.',
    highlights: [
      'Works with a real and broad public dataset, not artificial data.',
      'Performs exploratory reading focused on data quality, structure and context.',
      'Handles the date column before deeper analysis.',
      'Uses charts to support interpretation, not only decoration.',
      'Separates global analysis and Brazil analysis to improve result reading.',
      'Presents explanations in accessible language inside the notebook.',
    ],
    recruiterText:
      'This project shows a practical data analysis delivery with Python on a real and publicly relevant topic. It demonstrates the ability to organize a large dataset, identify patterns, create useful visualizations and explain results clearly. For recruiters, it shows attention to data, analytical reasoning and technical communication.',
  },
  'dra-julia': {
    title: 'Dr. Julia Bonette Links',
    description:
      'Real project for a healthcare client, created to gather important links into a modern, visual and easy-to-use page. The solution helps turn interest into direct contact with a more organized experience than a generic link aggregator.',
    descriptionFull:
      'This project is a static microsite created for the real client Dr. Julia Bonette, a dentist, focused on presentation, organization and conversion. The idea is to gather the main contact and information paths in a single page, making the journey easier for users who arrive at the brand and need to quickly understand how to contact the professional or access services.\n\nThe page was built with pure HTML, CSS and JavaScript, with no framework, focused on lightness, fast loading and consistent responsiveness. WhatsApp buttons use preformatted links to guide the first contact. The whole interaction was designed to work well on both mobile and desktop, with basic keyboard support and attention to reduced motion preferences.',
    highlights: [
      'Lightweight implementation without framework, suitable for a fast conversion page.',
      'Use of preformatted WhatsApp links to guide the first contact.',
      'Entire cards are clickable, improving usability.',
      'Keyboard support for basic accessibility.',
      'Visual microinteractions with cursor and touch, without making the page heavy.',
      'Responsive layout with specific rules for desktop and mobile.',
      'Attention to reduced motion preference (prefers-reduced-motion).',
      'Consistent visual structure between top, cards, institutional section and footer.',
    ],
    recruiterText:
      'This project shows the ability to turn a simple need into a useful digital solution for a real client. The delivery combines content organization, visual identity, responsiveness, basic accessibility and conversion focus, reinforcing practical product vision and the ability to build interfaces that help users act quickly.',
  },
  'contatos-gabi': {
    title: 'Gabriela Xavier Links',
    description:
      'Real project for a real client, focused on digital presence, professional presentation and conversion. The page gathers WhatsApp, Instagram, a course project and an institutional section in a responsive and personalized interface.',
    descriptionFull:
      'The links-contatos-gabi project is a static landing page developed for the real client Gabriela Xavier. The proposal is to work as a more beautiful, personalized and professional version of a common Linktree, gathering the client main contact paths, social networks and projects in one page.\n\nThe page was created to be shared in Instagram bio, WhatsApp, ads and other channels, making it easier to access quick actions such as scheduling, visiting the social profile and accessing the related course.\n\nThe implementation uses pure HTML, CSS and JavaScript, with glassmorphism effects, gradients, cursor and touch interactions and support for prefers-reduced-motion, all without external framework dependencies.',
    highlights: [
      'Simple solution without framework, but with professional visual finish.',
      'Entire clickable cards, reducing navigation friction.',
      'Keyboard support for basic accessibility.',
      'Cursor and touch interaction effect without depending on external libraries.',
      'Responsive behavior well solved for large screens and mobile.',
      'prefers-reduced-motion adjustment, showing accessibility care.',
      'Structure easy to reuse for other independent clients.',
    ],
    recruiterText:
      'Real client project that shows the ability to create web interfaces focused on presentation, conversion and usability. The delivery was built with pure HTML, CSS and JavaScript, with attention to responsiveness, basic accessibility and visual interaction, demonstrating frontend command and practical product vision.',
  },
  'twitch-analytics': {
    description:
      'Analytical dashboard that collects data from the public Twitch API and offers global search, advanced filters, table selection and export to Excel, CSV and JSON. It allows analysis of streamers, games, streams, videos and clips in one interface.',
    descriptionFull:
      'Twitch Analytics is a data analysis web application built on top of the public Twitch API. The proposal is to transform raw platform data into useful information for creators, analysts and curious users, allowing them to cross-reference streamers, games, languages and view metrics in the same screen.\n\nUsers choose which tables to use (streamers, games, streams, videos, clips), select columns, apply advanced filters across multiple fields and export results to Excel, CSV or JSON. It also includes global search, shortcuts for top streamers, popular games and segmentation by language and region (for example BR/PT).\n\nThe application uses Python with Streamlit for the interface, Pandas for data manipulation and direct integration with the Twitch API. The result is a practical tool that combines collection, transformation and visualization in a simple flow.',
    highlights: [
      'Direct integration with the public Twitch API for real-time data collection.',
      'Global search for streamers, games and languages in one input.',
      'Dynamic table and column selection to build the analysis view.',
      'Advanced filters across multiple fields with combinable operators.',
      'Result export to Excel, CSV, JSON and chart visualization.',
      'Shortcuts for top streamers, popular games and regional segmentation.',
    ],
    recruiterText:
      'Data analysis project that demonstrates the ability to integrate external APIs, handle large volumes of information with Pandas and deliver a functional analytical interface in Streamlit. It brings collection, filters, visualization and export together in a practical tool.',
  },
}

const PROJECTS_EN: Project[] = PROJECTS_PT.map((project) => ({
  ...project,
  ...PROJECT_TRANSLATIONS_EN[project.id],
}))

const EXPERIENCES_EN: Experience[] = [
  {
    ...EXPERIENCES_PT[0],
    role: 'Full Stack Developer',
    employmentType: 'Full-time',
    period: 'May 2024 - present',
    location: 'Remote',
    description: [
      'Software company that develops systems, platforms and automations for companies in different segments.',
      'Full stack developer who became the team problem solver. I joined an 8-person team, reporting to the project manager and CTO. In practice, I became a reference for solving problems beyond the strict technical scope: I worked in development, AI automation, sales and client prospecting, always with autonomy. I delivered code, created automations for the commercial team, sold software and managed servers.',
    ],
    highlights: [
      'Built frontend with Angular and backend with Next.js and GraphQL. Delivered Moontech institutional website and worked on Apolo, an ISO 9001 quality monitoring system for industry.',
      'Built AI automations integrated with the CRM (HubSpot) to qualify leads, generate automatic proposals, answer customers and support post-sales.',
      'Worked on active and passive client prospecting, qualified leads and scheduled meetings that resulted in software sales.',
      'Managed own servers with Docker and AWS. Deployment, maintenance and automations running in production.',
      'Used Python and Streamlit to turn internal data into visualizations that supported team decisions.',
      'Participated directly in the company technical and commercial decisions, with frequent contact with the CTO.',
    ],
    logoAlt: 'Moontech logo',
  },
  {
    ...EXPERIENCES_PT[1],
    role: 'Full Stack Developer | Process Automation',
    employmentType: 'Full-time',
    period: 'Apr 2020 - Feb 2022 · 1 yr 11 mos',
    location: 'Itajuba, Minas Gerais, Brazil · On-site',
    description: [
      'Digitization and automation of administrative, commercial and operational processes, focused on reducing manual work, organizing data and improving company efficiency.',
    ],
    highlights: [
      'Developed automations with Python, JavaScript, Google Sheets, APIs and integrations between digital tools.',
      'Created internal systems for finance, inventory, operations and management support.',
      'Automated manual tasks, social media and commercial flows with generative AI.',
      'Built a WhatsApp bot integrated with OpenClaw for service and internal processes.',
    ],
    skills:
      'Python, JavaScript, Automation, Generative AI, APIs, Google Sheets, WhatsApp Bot, Internal Systems and Operational Data.',
    logoAlt: 'Pro-Saude Materiais Odontomedicos logo',
  },
  {
    ...EXPERIENCES_PT[2],
    role: 'Full Stack Developer',
    employmentType: 'Full-time',
    period: 'Apr 2020 - Nov 2021 · 1 yr 8 mos',
    location: 'Itajuba, Minas Gerais, Brazil · Remote',
    description: [
      'Junior software house focused on developing websites, web applications and digital solutions for companies.',
    ],
    highlights: [
      'Developed websites, landing pages, web systems, backend, CRUD logic and REST API integrations.',
      'Version control with Git/GitHub, requirements discovery, backlog organization in Trello and prototyping in Figma.',
      'Communication between clients and developers to turn business needs into technical deliveries.',
      'Experience with Product Owner work, project management, UX and consultative digital solution sales.',
    ],
    skills:
      'Full Stack, REST APIs, Git/GitHub, Product, Project Management, Figma, UX and Digital Solutions.',
    logoAlt: 'byron.solutions logo',
  },
  {
    ...EXPERIENCES_PT[3],
    role: 'Volunteer Teacher',
    employmentType: 'Full-time',
    period: 'Mar 2019 - Feb 2021 · 2 yrs',
    location: 'Itajuba, Minas Gerais, Brazil',
    description: [
      'CAAI is an assistance course with the mission of transforming lives through education.',
      'I taught Text Interpretation in this college entrance preparation course, with an average of 180 students around 18 years old.',
    ],
    logoAlt: 'CAAI logo',
  },
]

const EDUCATION_EN: EducationContent = {
  degree: 'Bachelor of Computer Science',
  institution: 'Federal University of Itajuba (UNIFEI)',
  period: '2020 to 2025',
  description:
    'Complete academic foundation in computing fundamentals, software engineering, algorithms, databases, networks and artificial intelligence.',
  achievements: [
    'Practical projects with multidisciplinary teams',
    'Final thesis in full stack development',
    'Active participation in laboratories and academic initiatives',
  ],
}

const NAV_LINKS_EN: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '/projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const UI_PT: PortfolioUiContent = {
  metadata: {
    title: 'Mateus Bonette - Desenvolvedor Full Stack',
    description:
      'Portfólio de Mateus Bonette - Desenvolvedor Full Stack. Projetos, experiências e tecnologias.',
    ogTitle: 'Mateus Bonette - Desenvolvedor Full Stack',
    imageAlt: 'Logo Mateus Bonette',
  },
  language: {
    label: 'Idioma',
    switchToPortuguese: 'Mudar para português',
    switchToEnglish: 'Mudar para inglês',
  },
  theme: {
    enableLight: 'Ativar modo claro',
    enableDark: 'Ativar modo escuro',
    lightTitle: 'Modo claro',
    darkTitle: 'Modo escuro',
  },
  common: {
    readMore: 'Ver mais',
    readLess: 'Ver menos',
    caseLabel: 'Case',
    featuredProject: 'Projeto em destaque',
    context: 'Contexto',
    process: 'Processo',
    result: 'Resultado',
    viewDetails: 'Ver detalhes',
    projectTechAria: (title) => `Tecnologias do projeto ${title}`,
    projectSummaryAria: (title) => `Resumo do case ${title}`,
    accessProjectAria: (title) => `Acessar projeto ${title}`,
  },
  hero: {
    downloadResume: 'Baixar currículo',
    contact: 'Entrar em contato',
    scrollDown: 'Role para baixo',
    scrollDownAria: 'Rolar para baixo',
  },
  about: {
    eyebrow: 'Sobre mim',
    titleStart: 'Tecnologia, Negócio e ',
    titleAccent: 'Evolução',
    titleEnd: '.',
    graduationLabel: 'Formação',
    graduationCaption: 'Ciência da Computação · UNIFEI · 2025',
    graduationImageAlt: 'Mateus Bonette na cerimônia de formatura da UNIFEI',
    pillars: [
      {
        title: 'Base Acadêmica',
        text: 'Formado em Ciência da Computação pela UNIFEI, com base sólida para aprender, construir e evoluir com consistência.',
      },
      {
        title: 'Direção em IA',
        text: 'Atuo com inteligência artificial aplicada, agentes com LLMs, automações inteligentes e visão computacional.',
      },
      {
        title: 'Visão Comercial',
        text: 'Minha experiência com vendas e marketing me ajuda a pensar em tecnologia conectada com cliente, produto e resultado.',
      },
      {
        title: 'Full Stack',
        text: 'Gosto de entender o produto inteiro: interface, backend, dados, usuário, processo e impacto final.',
      },
      {
        title: 'Empreendedorismo',
        text: 'Penso como dono: olho para problema, oportunidade, custo, execução e retorno antes de escolher o caminho.',
      },
      {
        title: 'Comunicação Prática',
        text: 'Minha experiência como professor me ajuda a explicar ideias difíceis de forma simples e alinhar pessoas diferentes.',
      },
    ],
    paragraphs: [
      'Sou desenvolvedor full stack e Engenheiro de IA há 3 anos e meio, formado em Ciência da Computação pela UNIFEI (Universidade Federal de Itajubá). Construo sistemas web, mobile e produtos de inteligência artificial na prática, como agentes com LLMs, automações inteligentes e visão computacional aplicada à indústria.',
      'O que me diferencia é o caminho até aqui. Antes de programar profissionalmente, atuei dois anos como professor de cursinho e passei pela área comercial em fábricas de software, com vendas e marketing. Aprendi cedo a explicar coisa difícil de forma simples, ouvir o cliente antes de propor solução e pensar produto, não só código.',
      'Hoje uno três coisas que raramente andam juntas: domínio técnico, leitura de negócio e mentalidade de dono. Gosto de problemas difíceis, entrego com foco em resultado e penso cada projeto como se fosse meu.',
    ],
  },
  value: {
    eyebrow: 'Como Eu Trabalho',
    titleStart: 'Resolvo Problemas, ',
    titleAccent: 'Comunico Valor',
    titleEnd: ' E Automatizo Rotinas.',
    intro:
      'Quero entrar em um time para entregar de verdade: produzir com foco, comunicar com clareza, pensar no lado de negócio e transformar tarefa manual em processo inteligente.',
    previousAria: 'Ver card anterior',
    nextAria: 'Ver próximo card',
    points: ['Resolver Problemas Reais', 'Vender A Solução Certa', 'Automatizar Com IA', 'Entregar Com Clareza'],
    cards: [
      {
        title: 'Produtividade Com Direção',
        text: 'Pego problema bagunçado e transformo em entrega. Já desenvolvi sistemas de agendamento, plataformas de cursos com pagamento integrado e e-commerce do começo ao fim.',
        tag: 'Produtivo',
      },
      {
        title: 'Comunicação Comercial',
        text: 'Sei explicar ideia técnica para quem decide. Já trabalhei com vendas, marketing e tráfego pago, e vendi sistemas e sites para clínicas, imobiliárias e e-commerce.',
        tag: 'Comercial',
      },
      {
        title: 'Cabeça De Dono',
        text: 'Penso como dono do problema, não como executor de tarefa. Entendo a dor, mensuro o impacto e busco a solução mais útil para o cliente, o time e o negócio.',
        tag: 'Dono',
      },
      {
        title: 'Automação No Dia A Dia',
        text: 'Quando vejo tarefa repetitiva, eu automatizo. Trabalho com APIs, web scraping, robôs e agentes de IA, e tenho bot rodando em servidor próprio que coloquei em produção.',
        tag: 'Automação',
      },
    ],
    desktopSummary:
      'Em resumo, gosto de pegar uma dor real, entender o lado humano e comercial, criar uma solução simples e usar IA e automação para eliminar o que toma tempo das pessoas.',
    mobileSummary: 'Em resumo, transformo dor real em solução útil com clareza e automação.',
    readSummary: 'Ler resumo',
    hideSummary: 'Esconder resumo',
    mobileSummaryExpanded:
      'Trabalho para transformar problema real em entrega útil, com clareza comercial e automação inteligente para reduzir trabalho repetitivo.',
  },
  skills: {
    eyebrow: 'Habilidades Técnicas',
    titleStart: 'Tecnologias Que ',
    titleAccent: 'Uso Para Entregar',
    titleEnd: '.',
    description:
      'Do front ao banco, da automação ao modelo de IA. Não coleciono tecnologias, uso o que resolve o problema certo na hora certa.',
    filterLabel: 'Filtrar stack',
    swipeLabel: 'Deslize',
    areasLabel: 'áreas',
    skillsLabel: 'habilidades',
    itemsLabel: 'itens',
    masteryLabel: 'domínio',
    groups: [
      {
        title: 'Frontend e Mobile',
        summary: 'Interfaces bem acabadas, responsivas e com atenção forte a experiência visual.',
        items: [
          { name: 'React', description: 'Componentes, estados, hooks e interfaces modernas.' },
          { name: 'TypeScript', description: 'Tipagem para reduzir erro e deixar o código mais claro.' },
          { name: 'JavaScript', description: 'Base sólida para front, backend e automações.' },
          { name: 'HTML', description: 'Estrutura semântica, acessível e bem organizada.' },
          { name: 'CSS', description: 'Layouts responsivos, animações e acabamento visual.' },
          { name: 'Angular', description: 'Aplicações front com estrutura e componentes reutilizáveis.' },
          { name: 'Flutter', description: 'Desenvolvimento mobile com telas nativas e consistentes.' },
          { name: 'Dart', description: 'Base para criar aplicações mobile com Flutter.' },
        ],
      },
      {
        title: 'Backend, APIs e Bancos',
        summary: 'Construção de serviços, integração com dados e organização de regras de negócio.',
        items: [
          { name: 'Node.js', description: 'APIs, serviços e integrações do lado do servidor.' },
          { name: 'Express', description: 'Rotas, middlewares e APIs simples de manter.' },
          { name: 'Python', description: 'Backend, automação, dados e scripts de produtividade.' },
          { name: 'Django', description: 'Python para aplicações web com estrutura completa.' },
          { name: 'PostgreSQL', description: 'Modelagem, consultas e persistência relacional.' },
          { name: 'MySQL', description: 'Banco relacional para sistemas web e aplicações internas.' },
          { name: 'APIs públicas', description: 'Consumo, tratamento de retorno e integração entre sistemas.' },
          { name: 'Modelagem de dados', description: 'Organização de entidades, relações e fluxo de informação.' },
          { name: 'Web scraping', description: 'Coleta, limpeza e estruturação de dados da web.' },
        ],
      },
      {
        title: 'Dados e Visualização',
        summary: 'Transformo dados em análise, dashboards simples e visualizações úteis para decisão.',
        items: [
          { name: 'Python para dados', description: 'Limpeza, análise e automações com dados reais.' },
          { name: 'Pandas', description: 'Tratamento de tabelas, filtros, agrupamentos e indicadores.' },
          { name: 'Streamlit', description: 'Apps de dados, protótipos e painéis interativos.' },
          { name: 'Visualização com Streamlit', description: 'Interfaces para explorar dados sem complicar o uso.' },
          { name: 'Matplotlib', description: 'Gráficos para análise exploratória e relatórios técnicos.' },
          { name: 'Seaborn', description: 'Visualizações estatísticas com leitura mais clara.' },
        ],
      },
      {
        title: 'IA, Automação e Dev Tools',
        summary: 'Uso ferramentas modernas para acelerar desenvolvimento, revisar código e automatizar tarefas.',
        items: [
          { name: 'Cursor', description: 'Desenvolvimento assistido por IA dentro do editor.' },
          { name: 'Claude Code', description: 'Análise de código, refatoração e apoio em implementação.' },
          { name: 'Codex', description: 'Agentes de código para criar, corrigir e validar projetos.' },
          { name: 'Docker', description: 'Ambientes isolados para rodar aplicações com mais previsibilidade.' },
          { name: 'Git', description: 'Versionamento, histórico e organização do trabalho.' },
          { name: 'GitHub', description: 'Repositórios, colaboração, issues e entrega de código.' },
          { name: 'GitLab', description: 'Fluxo de repositórios, pipelines e organização de projeto.' },
          { name: 'Automação com IA', description: 'Redução de trabalho repetitivo usando scripts, agentes e integrações.' },
        ],
      },
      {
        title: 'Design, Produto e Conteúdo',
        summary: 'Tenho bom senso visual e sei transformar ideia em tela, apresentação e material claro.',
        items: [
          { name: 'Figma', description: 'Wireframes, layout visual, protótipos e organização de interface.' },
          { name: 'Design UX/UI', description: 'Fluxos, hierarquia visual, legibilidade e experiência de uso.' },
          { name: 'Canva', description: 'Peças visuais rápidas para comunicação e apresentação.' },
          { name: 'OBS Studio', description: 'Gravação, transmissão e produção de conteúdo visual.' },
          { name: 'Google Planilhas / Excel', description: 'Organização de dados, fórmulas e controles operacionais.' },
          { name: 'Google Docs / Word', description: 'Documentação, propostas, textos e estruturação de informação.' },
          { name: 'Google Apresentações', description: 'Slides claros para vender ideias e explicar soluções.' },
        ],
      },
      {
        title: 'Gestão, Jogos e Processo',
        summary: 'Também entendo ferramentas de organização, método de trabalho e criação de experiências interativas.',
        items: [
          { name: 'Trello', description: 'Organização de tarefas, etapas, prioridade e acompanhamento.' },
          { name: 'Scrum', description: 'Ritmo de entrega, cerimônias, backlog e colaboração em time.' },
          { name: 'Unity', description: 'Base para criação de games, cenas, lógica e interação.' },
          { name: 'Criação de games', description: 'Noções de gameplay, prototipação e experiência interativa.' },
        ],
      },
    ],
  },
  experience: {
    aria: 'Linha do tempo de experiências profissionais',
    eyebrow: 'Experiências',
    titleStart: 'Experiências Que ',
    titleAccent: 'Me Formaram',
    titleEnd: '.',
    description:
      'Cada empresa, cada projeto e cada venda me ensinou algo que eu carrego até hoje no código, na comunicação e na forma de resolver problemas.',
    availabilityAria: 'Disponibilidade profissional',
    timelineAria: 'Trajetória profissional',
    current: 'Atual',
    start: 'Início',
    latest: 'Mais recente',
    step: 'Etapa',
    moontechLetterPt: 'CARTA DE RECOMENDAÇÃO PT/BR',
    moontechLetterEn: 'CARTA DE RECOMENDAÇÃO EM INGLÊS',
    moontechLetterPtTitle: 'Baixar carta de recomendação em português (PDF)',
    moontechLetterEnTitle: 'Baixar carta de recomendação em inglês (PDF)',
  },
  projects: {
    eyebrow: 'Projetos',
    titleStart: 'Projetos Que Me Fizeram ',
    titleAccent: 'Crescer',
    titleEnd: '.',
    description:
      'Da primeira linha de código na faculdade até sistemas entregues, vendidos e em produção. Aqui está o que construí em cada fase, com contexto, tecnologia e propósito.',
    featuredCases: 'Cases em destaque',
    featuredCasesDescription: 'Cada capa abre uma página própria com detalhes do projeto.',
    carouselAria: 'Carrossel horizontal de projetos',
    viewAll: 'Ver todos os projetos',
    allProjects: 'Todos os projetos',
    backToPortfolio: 'Voltar para o portfólio',
    backToProjects: 'Voltar para projetos',
    notFoundEyebrow: 'Projeto não encontrado',
    notFoundTitle: 'Esse projeto ainda não existe.',
    projectEyebrow: 'Projeto',
    aboutProject: 'Sobre o projeto',
    technicalHighlights: 'Diferenciais técnicos',
    technologiesUsed: 'Tecnologias utilizadas',
    forRecruiters: 'Para recrutadores',
    viewProject: 'Ver projeto',
    repository: 'Repositório',
    underConstruction: 'Conteúdo em construção',
    reservedSpaceTitle: 'Espaço reservado para o case completo.',
    reservedSpaceText:
      'Aqui pode entrar problema, solução, imagens, resultado, links, aprendizados e qualquer material específico desse projeto.',
    openRepository: 'Abrir repositório',
    placeholderCover: 'Case em preparação para mostrar problema, solução, processo e resultado.',
    placeholderInside: 'Página reservada para o case completo, com contexto, decisões técnicas e resultado final.',
  },
  gallery: {
    carouselRole: 'carrossel',
    imagesAria: (title) => `Imagens do projeto ${title}`,
    imageAlt: (title, index, total) => `${title} - imagem ${index} de ${total}`,
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
    selectImage: 'Selecionar imagem',
    goToImage: (index) => `Ir para imagem ${index}`,
  },
  education: {
    eyebrow: 'Formação',
    titleStart: 'Bacharelado em ',
    titleAccent: 'Ciência da Computação',
    titleEnd: '.',
    description:
      'Formação concluída na Universidade Federal de Itajubá (UNIFEI), uma das principais instituições de engenharia e tecnologia do país.',
    mainImageAlt: 'Mateus Bonette na cerimônia de formatura da UNIFEI',
    ceremony: 'Cerimônia de Colação de Grau',
    graduated: 'Diplomado',
    classImageAlt: 'Turma de formandos da UNIFEI',
    classYear: 'Turma 2025',
    degreeShort: 'Ciência da Computação',
    numbers: 'Em números',
    yearsFormation: 'anos de formação',
    linesWritten: 'linhas escritas',
    location: 'Itajubá, MG',
    diplomaTitle: 'Ver Diploma - Bacharelado em Ciência da Computação · UNIFEI',
    viewDiploma: 'Ver Diploma',
  },
  contact: {
    eyebrow: 'Vamos conversar',
    title: 'Tem uma Vaga ou Projeto em Mente?',
    paragraphs: [
      'Estou disponível para oportunidades fixas, posições full-time, freelances e projetos colaborativos.',
      'Se você procura alguém para somar ao time ou desenvolver uma solução digital bem construída, vamos conversar.',
    ],
    responseLabel: 'Resposta',
    responseValue: 'Em até 24 horas',
    locationLabel: 'Localização',
    locationValue: 'Brasil, Itajubá - MG, Remoto, Híbrido, Presencial, Mundo Todo',
  },
  footer: {
    backToTop: 'Voltar ao topo',
    top: 'Topo',
    text: 'Portfólio desenvolvido para conseguir um bom emprego para comprar o meu pão.',
  },
  linksPage: {
    backToPortfolio: 'Voltar ao portfólio',
    links: [
      { label: 'Portfólio', description: 'Veja meus projetos e experiências', kind: 'portfolio' },
      { label: 'LinkedIn', description: 'Conecte-se comigo profissionalmente', kind: 'linkedin' },
      { label: 'Currículo', description: 'Baixe meu CV em PDF', kind: 'resume' },
      { label: 'GitHub', description: 'Confira meus repositórios e código', kind: 'github' },
    ],
  },
  floatingWhatsApp: {
    aria: 'Abrir conversa no WhatsApp',
  },
}

const UI_EN: PortfolioUiContent = {
  ...UI_PT,
  metadata: {
    title: 'Mateus Bonette - Full Stack Developer',
    description:
      'Mateus Bonette portfolio - Full Stack Developer. Projects, experience and technologies.',
    ogTitle: 'Mateus Bonette - Full Stack Developer',
    imageAlt: 'Mateus Bonette logo',
  },
  language: {
    label: 'Language',
    switchToPortuguese: 'Switch to Portuguese',
    switchToEnglish: 'Switch to English',
  },
  theme: {
    enableLight: 'Enable light mode',
    enableDark: 'Enable dark mode',
    lightTitle: 'Light mode',
    darkTitle: 'Dark mode',
  },
  common: {
    readMore: 'Show more',
    readLess: 'Show less',
    caseLabel: 'Case',
    featuredProject: 'Featured project',
    context: 'Context',
    process: 'Process',
    result: 'Result',
    viewDetails: 'View details',
    projectTechAria: (title) => `Technologies used in ${title}`,
    projectSummaryAria: (title) => `Case summary for ${title}`,
    accessProjectAria: (title) => `Open project ${title}`,
  },
  hero: {
    downloadResume: 'Download resume',
    contact: 'Contact me',
    scrollDown: 'Scroll down',
    scrollDownAria: 'Scroll down',
  },
  about: {
    eyebrow: 'About me',
    titleStart: 'Technology, Business and ',
    titleAccent: 'Growth',
    titleEnd: '.',
    graduationLabel: 'Education',
    graduationCaption: 'Computer Science · UNIFEI · 2025',
    graduationImageAlt: 'Mateus Bonette at the UNIFEI graduation ceremony',
    pillars: [
      {
        title: 'Academic Foundation',
        text: 'Computer Science graduate from UNIFEI, with a solid foundation to learn, build and evolve consistently.',
      },
      {
        title: 'AI Direction',
        text: 'I work with applied artificial intelligence, LLM agents, intelligent automations and computer vision.',
      },
      {
        title: 'Commercial Vision',
        text: 'My sales and marketing experience helps me think about technology connected to customers, product and results.',
      },
      {
        title: 'Full Stack',
        text: 'I like understanding the whole product: interface, backend, data, user, process and final impact.',
      },
      {
        title: 'Entrepreneurial Mindset',
        text: 'I think like an owner: problem, opportunity, cost, execution and return come before choosing a path.',
      },
      {
        title: 'Practical Communication',
        text: 'My experience as a teacher helps me explain hard ideas simply and align different people.',
      },
    ],
    paragraphs: [
      'I am a full stack developer and AI Engineer with 3 and a half years of experience, graduated in Computer Science from UNIFEI (Federal University of Itajuba). I build web systems, mobile apps and artificial intelligence products in practice, including LLM agents, intelligent automations and computer vision applied to industry.',
      'What makes me different is the path that brought me here. Before programming professionally, I worked for two years as a prep course teacher and also in the commercial side of software companies, with sales and marketing. I learned early how to explain hard things simply, listen to customers before proposing solutions and think product, not only code.',
      'Today I combine three things that rarely move together: technical command, business reading and owner mindset. I like hard problems, deliver with focus on results and think of every project as if it were my own.',
    ],
  },
  value: {
    eyebrow: 'How I Work',
    titleStart: 'I Solve Problems, ',
    titleAccent: 'Communicate Value',
    titleEnd: ' And Automate Routines.',
    intro:
      'I want to join a team to truly deliver: produce with focus, communicate clearly, think about the business side and turn manual work into intelligent process.',
    previousAria: 'View previous card',
    nextAria: 'View next card',
    points: ['Solve Real Problems', 'Sell The Right Solution', 'Automate With AI', 'Deliver With Clarity'],
    cards: [
      {
        title: 'Productivity With Direction',
        text: 'I take messy problems and turn them into delivery. I have already built scheduling systems, course platforms with payment integration and e-commerce from end to end.',
        tag: 'Productive',
      },
      {
        title: 'Commercial Communication',
        text: 'I can explain technical ideas to decision makers. I have worked with sales, marketing and paid traffic, and sold systems and websites to clinics, real estate and e-commerce clients.',
        tag: 'Commercial',
      },
      {
        title: 'Owner Mindset',
        text: 'I think like the owner of the problem, not just a task executor. I understand the pain, measure impact and seek the most useful solution for the client, team and business.',
        tag: 'Owner',
      },
      {
        title: 'Daily Automation',
        text: 'When I see repetitive work, I automate it. I work with APIs, web scraping, bots and AI agents, and I have a bot running on my own production server.',
        tag: 'Automation',
      },
    ],
    desktopSummary:
      'In short, I like taking a real pain, understanding the human and commercial side, creating a simple solution and using AI and automation to remove what consumes people time.',
    mobileSummary: 'In short, I turn real pain into useful solutions with clarity and automation.',
    readSummary: 'Read summary',
    hideSummary: 'Hide summary',
    mobileSummaryExpanded:
      'I work to turn real problems into useful delivery, with commercial clarity and intelligent automation to reduce repetitive work.',
  },
  skills: {
    eyebrow: 'Technical Skills',
    titleStart: 'Technologies I ',
    titleAccent: 'Use To Deliver',
    titleEnd: '.',
    description:
      'From frontend to database, from automation to AI models. I do not collect technologies; I use what solves the right problem at the right time.',
    filterLabel: 'Filter stack',
    swipeLabel: 'Swipe',
    areasLabel: 'areas',
    skillsLabel: 'skills',
    itemsLabel: 'items',
    masteryLabel: 'mastery',
    groups: [
      {
        title: 'Frontend and Mobile',
        summary: 'Polished, responsive interfaces with strong attention to visual experience.',
        items: [
          { name: 'React', description: 'Components, state, hooks and modern interfaces.' },
          { name: 'TypeScript', description: 'Typing to reduce errors and make code clearer.' },
          { name: 'JavaScript', description: 'Solid foundation for frontend, backend and automations.' },
          { name: 'HTML', description: 'Semantic, accessible and well-organized structure.' },
          { name: 'CSS', description: 'Responsive layouts, animations and visual finish.' },
          { name: 'Angular', description: 'Frontend applications with structure and reusable components.' },
          { name: 'Flutter', description: 'Mobile development with native and consistent screens.' },
          { name: 'Dart', description: 'Foundation for building mobile applications with Flutter.' },
        ],
      },
      {
        title: 'Backend, APIs and Databases',
        summary: 'Services, data integration and business-rule organization.',
        items: [
          { name: 'Node.js', description: 'Server-side APIs, services and integrations.' },
          { name: 'Express', description: 'Routes, middlewares and APIs that are simple to maintain.' },
          { name: 'Python', description: 'Backend, automation, data and productivity scripts.' },
          { name: 'Django', description: 'Python for complete web applications.' },
          { name: 'PostgreSQL', description: 'Relational modeling, queries and persistence.' },
          { name: 'MySQL', description: 'Relational database for web systems and internal applications.' },
          { name: 'Public APIs', description: 'Consuming, handling responses and integrating systems.' },
          { name: 'Data modeling', description: 'Organization of entities, relations and information flow.' },
          { name: 'Web scraping', description: 'Collecting, cleaning and structuring web data.' },
        ],
      },
      {
        title: 'Data and Visualization',
        summary: 'I turn data into analysis, simple dashboards and useful decision-making visuals.',
        items: [
          { name: 'Python for data', description: 'Cleaning, analysis and automations with real data.' },
          { name: 'Pandas', description: 'Table handling, filters, grouping and indicators.' },
          { name: 'Streamlit', description: 'Data apps, prototypes and interactive dashboards.' },
          { name: 'Streamlit visualization', description: 'Interfaces to explore data without complicating usage.' },
          { name: 'Matplotlib', description: 'Charts for exploratory analysis and technical reports.' },
          { name: 'Seaborn', description: 'Statistical visualizations with clearer reading.' },
        ],
      },
      {
        title: 'AI, Automation and Dev Tools',
        summary: 'I use modern tools to accelerate development, review code and automate tasks.',
        items: [
          { name: 'Cursor', description: 'AI-assisted development inside the editor.' },
          { name: 'Claude Code', description: 'Code analysis, refactoring and implementation support.' },
          { name: 'Codex', description: 'Code agents to create, fix and validate projects.' },
          { name: 'Docker', description: 'Isolated environments to run applications with more predictability.' },
          { name: 'Git', description: 'Versioning, history and work organization.' },
          { name: 'GitHub', description: 'Repositories, collaboration, issues and code delivery.' },
          { name: 'GitLab', description: 'Repository flow, pipelines and project organization.' },
          { name: 'AI automation', description: 'Reducing repetitive work with scripts, agents and integrations.' },
        ],
      },
      {
        title: 'Design, Product and Content',
        summary: 'I have visual judgment and can turn ideas into screens, presentations and clear material.',
        items: [
          { name: 'Figma', description: 'Wireframes, visual layout, prototypes and interface organization.' },
          { name: 'UX/UI Design', description: 'Flows, visual hierarchy, readability and user experience.' },
          { name: 'Canva', description: 'Fast visual assets for communication and presentation.' },
          { name: 'OBS Studio', description: 'Recording, streaming and visual content production.' },
          { name: 'Google Sheets / Excel', description: 'Data organization, formulas and operational controls.' },
          { name: 'Google Docs / Word', description: 'Documentation, proposals, texts and information structure.' },
          { name: 'Google Slides', description: 'Clear slides to sell ideas and explain solutions.' },
        ],
      },
      {
        title: 'Management, Games and Process',
        summary: 'I also understand organization tools, work methods and creation of interactive experiences.',
        items: [
          { name: 'Trello', description: 'Task organization, steps, priority and follow-up.' },
          { name: 'Scrum', description: 'Delivery rhythm, ceremonies, backlog and team collaboration.' },
          { name: 'Unity', description: 'Foundation for creating games, scenes, logic and interaction.' },
          { name: 'Game creation', description: 'Gameplay notions, prototyping and interactive experience.' },
        ],
      },
    ],
  },
  experience: {
    aria: 'Professional experience timeline',
    eyebrow: 'Experience',
    titleStart: 'Experiences That ',
    titleAccent: 'Shaped Me',
    titleEnd: '.',
    description:
      'Each company, each project and each sale taught me something I still carry in code, communication and problem solving.',
    availabilityAria: 'Professional availability',
    timelineAria: 'Professional journey',
    current: 'Current',
    start: 'Start',
    latest: 'Latest',
    step: 'Step',
    moontechLetterPt: 'RECOMMENDATION LETTER PT-BR',
    moontechLetterEn: 'RECOMMENDATION LETTER IN ENGLISH',
    moontechLetterPtTitle: 'Download recommendation letter in Portuguese (PDF)',
    moontechLetterEnTitle: 'Download recommendation letter in English (PDF)',
  },
  projects: {
    eyebrow: 'Projects',
    titleStart: 'Projects That Made Me ',
    titleAccent: 'Grow',
    titleEnd: '.',
    description:
      'From my first line of code in college to systems delivered, sold and running in production. Here is what I built in each phase, with context, technology and purpose.',
    featuredCases: 'Featured cases',
    featuredCasesDescription: 'Each cover opens its own page with project details.',
    carouselAria: 'Horizontal projects carousel',
    viewAll: 'View all projects',
    allProjects: 'All projects',
    backToPortfolio: 'Back to portfolio',
    backToProjects: 'Back to projects',
    notFoundEyebrow: 'Project not found',
    notFoundTitle: 'This project does not exist yet.',
    projectEyebrow: 'Project',
    aboutProject: 'About the project',
    technicalHighlights: 'Technical highlights',
    technologiesUsed: 'Technologies used',
    forRecruiters: 'For recruiters',
    viewProject: 'View project',
    repository: 'Repository',
    underConstruction: 'Content under construction',
    reservedSpaceTitle: 'Reserved space for the full case.',
    reservedSpaceText:
      'This area can include problem, solution, images, results, links, lessons learned and any specific material for this project.',
    openRepository: 'Open repository',
    placeholderCover: 'Case being prepared to show problem, solution, process and result.',
    placeholderInside: 'Page reserved for the full case, with context, technical decisions and final result.',
  },
  gallery: {
    carouselRole: 'carousel',
    imagesAria: (title) => `Images from project ${title}`,
    imageAlt: (title, index, total) => `${title} - image ${index} of ${total}`,
    previous: 'Previous image',
    next: 'Next image',
    selectImage: 'Select image',
    goToImage: (index) => `Go to image ${index}`,
  },
  education: {
    eyebrow: 'Education',
    titleStart: 'Bachelor of ',
    titleAccent: 'Computer Science',
    titleEnd: '.',
    description:
      'Degree completed at the Federal University of Itajuba (UNIFEI), one of Brazil major engineering and technology institutions.',
    mainImageAlt: 'Mateus Bonette at the UNIFEI graduation ceremony',
    ceremony: 'Graduation Ceremony',
    graduated: 'Graduated',
    classImageAlt: 'UNIFEI graduating class',
    classYear: 'Class of 2025',
    degreeShort: 'Computer Science',
    numbers: 'In numbers',
    yearsFormation: 'years of education',
    linesWritten: 'lines written',
    location: 'Itajuba, MG',
    diplomaTitle: 'View Diploma - Bachelor of Computer Science · UNIFEI',
    viewDiploma: 'View Diploma',
  },
  contact: {
    eyebrow: 'Let us talk',
    title: 'Have a Role or Project in Mind?',
    paragraphs: [
      'I am available for fixed opportunities, full-time roles, freelance work and collaborative projects.',
      'If you are looking for someone to join the team or build a well-crafted digital solution, let us talk.',
    ],
    responseLabel: 'Response',
    responseValue: 'Within 24 hours',
    locationLabel: 'Location',
    locationValue: 'Brazil, Itajuba - MG, Remote, Hybrid, On-site, Worldwide',
  },
  footer: {
    backToTop: 'Back to top',
    top: 'Top',
    text: 'Portfolio built to get a good job and buy my bread.',
  },
  linksPage: {
    backToPortfolio: 'Back to portfolio',
    links: [
      { label: 'Portfolio', description: 'See my projects and experience', kind: 'portfolio' },
      { label: 'LinkedIn', description: 'Connect with me professionally', kind: 'linkedin' },
      { label: 'Resume', description: 'Download my CV in PDF', kind: 'resume' },
      { label: 'GitHub', description: 'Check my repositories and code', kind: 'github' },
    ],
  },
  floatingWhatsApp: {
    aria: 'Open WhatsApp conversation',
  },
}

const CONTENT_BY_LOCALE: Record<Locale, PortfolioContent> = {
  'pt-BR': {
    profile: PROFILE_PT,
    skills: SKILLS_PT,
    projects: PROJECTS_PT,
    experiences: EXPERIENCES_PT,
    education: EDUCATION_PT,
    navLinks: NAV_LINKS_PT,
    ui: UI_PT,
  },
  en: {
    profile: PROFILE_EN,
    skills: SKILLS_PT,
    projects: PROJECTS_EN,
    experiences: EXPERIENCES_EN,
    education: EDUCATION_EN,
    navLinks: NAV_LINKS_EN,
    ui: UI_EN,
  },
}

export function getPortfolioContent(locale = getCurrentLocale()): PortfolioContent {
  return CONTENT_BY_LOCALE[locale]
}

const ACTIVE_CONTENT = getPortfolioContent()

export const PROFILE = ACTIVE_CONTENT.profile
export const SKILLS = ACTIVE_CONTENT.skills
export const PROJECTS = ACTIVE_CONTENT.projects
export const EXPERIENCES = ACTIVE_CONTENT.experiences
export const EDUCATION = ACTIVE_CONTENT.education
export const NAV_LINKS = ACTIVE_CONTENT.navLinks
export const UI = ACTIVE_CONTENT.ui
