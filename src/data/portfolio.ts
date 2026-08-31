import type { Project, Skill, Experience } from "../types";
import { getCurrentLocale, type Locale } from "../i18n/routes";
import familyMoneyCoverImage from "../../imagem-da-capa-do-projeto-familyMoney.png";
import familyMoneyDemoVideo from "../../video-familyMoney-com-jazz.mp4";

const PROFILE_PT = {
  name: "Mateus Bonette",
  role: "Engenheiro de IA Aplicada · AI Engineer",
  tagline:
    "Projeto e entrego sistemas de IA em produção com LLMs, RAG, agentes autônomos, LangChain, LangGraph, APIs e automações full stack para resolver problemas reais de operação e negócio.",
  location: "Brasil",
  email: "mateus.bonette00@gmail.com",
  bio: "Bacharel em Ciência da Computação pela Universidade Federal de Itajubá. Viciado em Resolver Problemas.",
  social: {
    github: "https://github.com/mateus-bonette00",
    linkedin: "https://www.linkedin.com/in/mateus-bonette/",
    instagram: "https://www.instagram.com/mateus_bonette/",
    discord: "https://discord.com/users/369971337755623427",
    whatsapp: "https://wa.me/5535998183459",
  },
};

function buildGallery(prefix: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/prints-do-projeto/${prefix}-${i + 1}.png`,
  );
}

const SKILLS_PT: Skill[] = [
  { name: "React", level: 92, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "NestJS", level: 80, category: "backend" },
  { name: "Python", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "data" },
  { name: "MongoDB", level: 78, category: "data" },
  { name: "Docker", level: 80, category: "devops" },
  { name: "AWS", level: 70, category: "devops" },
  { name: "Git", level: 92, category: "tools" },
];

const PROJECTS_PT: Project[] = [
  {
    id: "zoebot-openclaw",
    title: "ZoeBot OpenClaw",
    description:
      "Assistente multiagente controlada por WhatsApp com Gateway multi-LLM, RAG em LangChain.js e automações Node.js rodando em home lab próprio.",
    tags: ["LLMs", "RAG", "AI Agents", "LangChain.js", "Gemini", "WhatsApp Bot", "Docker", "APIs"],
    year: "2026",
    deviceType: "desktop",
    image: "/images/projects/cover/project-openclaw-whatsapp-preview.png",
    gallery: ["/images/projects/cover/project-openclaw-whatsapp-preview.png"],
    descriptionFull: `ZoeBot OpenClaw é uma plataforma pessoal de automação multiagente controlada por WhatsApp. A Zoe interpreta linguagem natural em um Gateway multi-LLM e roteia os comandos para agentes Node.js responsáveis por tarefas, lembretes, ideias, pesquisa FBA e consulta de conhecimento com RAG.

A arquitetura roda em home lab próprio, com Evolution API v2.3.6, PostgreSQL, Redis, Docker onde faz sentido e processos gerenciados por systemd. O projeto também separa interpretação com IA da lógica determinística dos agentes, mantendo decisões críticas previsíveis, auditáveis e controladas por código.`,
    highlights: [
      "Gateway conversacional com failover entre 5 LLMs para interpretar comandos e rotear tarefas.",
      "Cinco agentes em Node.js, sendo 4 determinísticos e 1 agente de RAG com LangChain.js e Gemini.",
      "Arquitetura ponta a ponta com Evolution API, PostgreSQL, Redis, systemd, Docker e watchdog automático.",
      "Agente FBA com Puppeteer, Keepa, Amazon SP-API, regras auditáveis e sincronização com Google Sheets.",
    ],
    techFull: [
      "Node.js",
      "JavaScript",
      "WhatsApp",
      "Evolution API",
      "LangChain.js",
      "Google Gemini",
      "RAG",
      "Embeddings",
      "Docker",
      "PostgreSQL",
      "Redis",
      "systemd",
      "Puppeteer",
      "Amazon SP-API",
      "Keepa",
      "Google Sheets",
      "Express",
      "Winston",
      "Cron",
    ],
    recruiterText:
      "Neste projeto eu desenhei uma arquitetura real de IA aplicada, conectando WhatsApp, múltiplos LLMs, agentes Node.js, RAG e automações operacionais em ambiente próprio 24/7. O resultado foi um sistema pessoal funcional, resiliente e evolutivo, com decisões técnicas proporcionais, foco em previsibilidade e integração ponta a ponta.",
    repo: "https://github.com/mateus-bonette00/config-open-claw",
  },
  {
    id: "coinsight",
    title: "CoinSight TCC",
    description:
      "O desafio do CoinSight foi automatizar a análise do mercado financeiro, prevendo o preço de criptomoedas através do impacto das notícias globais. Desenvolvido em Python com banco PostgreSQL, o sistema substitui horas de coleta manual por pipelines ETL automatizados. Ele processa dados diários em modelos de Machine Learning, exibindo previsões em tempo real em um dashboard ágil criado com Streamlit para apoiar a tomada de decisão comercial.",
    tags: ["Python", "Streamlit", "Pandas", "Data Analysis", "Machine Learning", "PostgreSQL"],
    year: "2025",
    deviceType: "desktop",
    image: "/images/projects/cover/project-coinsight-preview.png",
    gallery: buildGallery("coinsight", 12),
    descriptionFull:
      "O projeto nasceu de uma pergunta essencial: é possível prever tendências no preço do Bitcoin usando não apenas gráficos financeiros, mas também o sentimento social do momento?\n\nPara responder a isso, foi construído um ecossistema que funciona de forma 100% autônoma. O sistema pesquisa os dados de mercado diariamente, cruza essas informações com notícias reais e redes sociais, salva os resultados em banco de dados e processa tudo através de modelos de Inteligência Artificial para identificar padrões. Todo esse fluxo culmina em uma interface web simples, onde o leitor entende de forma visual as previsões do modelo.\n\nA premissa principal do desenvolvimento foi submeter essa arquitetura a dados estritamente reais, provando a eficácia da ferramenta no mundo dos negócios, para muito além de um ambiente apenas acadêmico.",
    highlights: [
      "Arquitetura construída de forma independente: o módulo de busca de dados roda totalmente separado da tela final e do processamento da Inteligência Artificial.",
      "O sistema cruza os números puramente matemáticos do mercado com métricas de sentimento social e notícias em um único cálculo.",
      "Aplicação de validações temporais rigorosas para garantir que a previsão da IA se sustente no mundo real, sem sofrer distorções.",
      "As previsões de mercado são sempre salvas no banco de dados, permitindo realizar o comparativo futuro e cobrar a assertividade da ferramenta a longo prazo.",
      "A estruturação do backtesting foca em apurar riscos práticos de perda ou lucro e não somente em aprovações estatísticas limitadas.",
      "Integração tática do fluxo de movimentações mundiais e sociais visando injetar contexto analítico real nos indicadores de oscilação do ativo.",
    ],
    techFull: [
      "Python",
      "Streamlit",
      "SQLAlchemy",
      "PostgreSQL",
      "psycopg2-binary",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "TensorFlow/Keras",
      "Plotly",
      "yfinance",
      "Requests",
      "joblib",
      "python-dotenv",
      "vaderSentiment",
    ],
    recruiterText:
      "O mercado de cripto tem muita informação solta e analisar tudo de forma manual é quase impossível. O desafio aqui foi parar de tentar prever sem embasamento e usar dados reais para apoiar decisões. Foi montado um sistema completo do zero: desde a busca de preços e notícias até o armazenamento em banco de dados e aplicação de inteligência artificial. O resultado foi a transformação do caos em um painel direto que indica o que realmente está impactando o mercado, poupando horas de pesquisa manual.",
  },
  {
    id: "family-money",
    title: "FamilyMoney",
    description:
      "Aplicação full stack privada criada para organizar o controle financeiro real da família em um único sistema. O projeto reúne lançamentos manuais, sincronização bancária via Open Finance e importação de extratos PDF com revisão antes de salvar, trazendo clareza prática sobre gastos, saldo e economia mensal.",
    tags: ["Angular 19", "Node.js", "PostgreSQL", "Pluggy"],
    year: "2026",
    deviceType: "desktop",
    image: familyMoneyCoverImage,
    video: familyMoneyDemoVideo,
    videoPoster: familyMoneyCoverImage,
    descriptionFull:
      "O FamilyMoney nasceu de um problema doméstico real: faltava visibilidade para entender para onde o dinheiro da família estava indo ao longo do mês. Consultar aplicativo de banco, copiar dados manualmente e registrar tudo em planilhas diferentes gerava atraso, esquecimento e números inconsistentes.\n\nPara resolver isso, o sistema foi desenhado como uma aplicação privada de uso diário, centralizando três entradas de dados no mesmo fluxo: lançamento manual para registros rápidos, sincronização automática com bancos via Open Finance e importação de extratos PDF com revisão antes da persistência. A proposta era deixar o controle financeiro mais simples para pessoas leigas, sem depender de ferramentas genéricas, anúncios ou processos manuais cansativos.\n\nNa prática, o projeto entrega uma arquitetura completa com frontend Angular 19, backend Node.js + Express 5, PostgreSQL com precisão monetária e infraestrutura preparada para desenvolvimento local e deploy. O resultado é uma ferramenta que ajuda a enxergar gastos por categoria, acompanhar saldo e agir mais cedo quando o orçamento começa a sair do controle.",
    highlights: [
      "Fluxo híbrido de entrada de dados com lançamento manual, Open Finance via Pluggy e importação de extrato PDF no mesmo produto.",
      "Frontend em Angular 19 com standalone components, signals e lazy loading para manter a navegação leve e modular.",
      "Backend em Node.js + Express 5 com autenticação por PIN, hash com scrypt e proteção de segurança para dados financeiros.",
      "Persistência em PostgreSQL com NUMERIC(12,2), evitando erro de arredondamento em valores monetários.",
      "Leitura de extratos PDF no próprio servidor com pré-visualização antes de salvar, reduzindo erro de importação.",
      "Sincronização bancária com webhooks e estratégias de deduplicação para impedir transações repetidas.",
      "Estrutura de desenvolvimento e deploy organizada com Docker Compose e preparo para VPS Linux.",
    ],
    techFull: [
      "Angular 19",
      "TypeScript",
      "Standalone Components",
      "Angular Signals",
      "SCSS",
      "Node.js",
      "Express 5",
      "PostgreSQL 16",
      "Pluggy API",
      "Pluggy Connect SDK",
      "Open Finance",
      "pdf-parse",
      "Multer",
      "Helmet",
      "express-rate-limit",
      "scrypt",
      "HMAC-SHA256",
      "Docker Compose",
      "VPS Linux",
    ],
    recruiterText:
      "Esse projeto mostra um full stack construindo uma solução real para uso diário, e não apenas uma vitrine visual. O FamilyMoney reúne frontend moderno, backend seguro, precisão monetária, integração com API bancária, processamento de PDF e regras de consistência para dados financeiros. Ele demonstra capacidade de transformar um problema doméstico concreto em um produto funcional, útil e tecnicamente bem amarrado.",
    repo: "https://github.com/mateus-bonette00/family-money",
  },
  {
    id: "noara",
    title: "Noara E-commerce",
    description:
      "Para escalar vendas online sem perder a força consultiva do WhatsApp, o e-commerce digitalizou o negócio integrando cliente e gestão. A aplicação Full Stack uniu uma vitrine visual impecável em React/Vite com um robusto painel administrativo operando em Node.js (Fastify) e banco PostgreSQL via Prisma, resolvendo o caos logístico do estoque sem forçar um carrinho de compras limitante.",
    tags: ["React", "Fastify", "PostgreSQL", "Prisma"],
    year: "2025",
    deviceType: "desktop",
    image: "/images/projects/cover/noara-ecommerce-1.png",
    gallery: buildGallery("noara-ecommerce", 18),
    descriptionFull:
      "Este projeto atende à necessidade real de uma loja de semijoias cujo ponto forte de conversão sempre foi o atendimento direto com o cliente pelo WhatsApp. A grande meta tecnológica era digitalizar o negócio e escalar a marca sem quebrar essa conexão humana.\n\nA resposta para isso foi desenhar a arquitetura em dois mundos distintos. Para o público, foi construído um catálogo visualmente atraente, com filtros inteligentes e navegação rápida. Nos bastidores da loja, foi desenvolvido um painel de controle seguro para cadastro rápido de produtos, moderação de avaliações e visualização de balanços, tudo formatado para quem não entende de programação.\n\nA decisão estratégica de direcionar as vendas para o WhatsApp em vez de focar num tradicional carrinho de compras manteve a operação muito mais descomplicada e barata para a cliente, substituindo as planilhas manuais antigas por um fluxo limpo e pronto para o crescimento.",
    highlights: [
      "Operação dividida em sistemas especializados: uma vitrine focada na experiência de compra do cliente e um painel focado em gerir a operação da loja.",
      "Criação de um back-office verdadeiramente prático e seguro para uso diário da equipe administrativa.",
      "Gestão otimizada e relacional aplicada nos servidores controlando com responsabilidade o inventário, métricas da loja e análises.",
      "Banco de dados rigoroso, usando o tipo numérico adequado para garantir valores financeiros precisos, sem erro de arredondamento nos centavos.",
      "Otimização automática das fotos pesadas de joias no momento do upload, garantindo que o site carregue de forma instantânea para o consumidor.",
      "Nível de segurança empresarial no painel principal, utilizando estratégias modernas de blindagem para barrar totalmente acessos não-autorizados.",
      "Infraestrutura configurada sob forte robustez garantindo um sistema sólido online suportando com maestria toda fluência comercial contínua.",
    ],
    techFull: [
      "React 18",
      "React Router DOM 7",
      "Zustand",
      "Lucide React",
      "Node.js",
      "Fastify",
      "Prisma ORM",
      "bcryptjs",
      "Sharp",
      "PostgreSQL",
      "JWT",
      "Cookie HTTP-only",
      "Tailwind CSS",
      "Vite",
      "Nginx",
      "PM2",
    ],
    recruiterText:
      "Para viabilizar vendas online mantendo o contato próximo e o fechamento comercial via WhatsApp, o projeto evitou carrinhos de compra complexos. Em vez disso, desenvolveu-se uma vitrine digital integrada e um painel administrativo simplificado para controle de estoque. A solução eliminou o uso de planilhas manuais dispersas, profissionalizando a operação de vendas e preservando a proximidade no atendimento ao cliente.",
  },
  {
    id: "gabi-xavier",
    gallery: buildGallery("curso-gabi-xavier", 15),
    title: "Curso Pilates Gabi Xavier",
    description:
      "Para contornar o baixo retorno do tráfego orgânico, o foco comercial converteu visitantes através da qualificação do lead. Por meio de uma aplicação web de ponta com quiz interativo, a plataforma coleta metas, processa os dados e entrega ofertas altamente personalizadas. A solução integra Meta Pixel e Conversions API, guiando a inteligência dos anúncios direto do servidor e engatilhando vendas no checkout.",
    tags: ["Next.js", "React", "TypeScript", "Meta Pixel"],
    year: "2024",
    deviceType: "desktop",
    image: "/images/projects/cover/project-gabi-xavier-preview.png",
    descriptionFull:
      "Escalar a venda de infoprodutos exige estratégia, pois jogar tráfego diretamente em páginas genéricas costuma apresentar baixo retorno financeiro. A meta deste projeto foi desenhar uma inteligência de vendas antes de solicitar a compra do curso.\n\nPara resolver o gargalo, construiu-se um sistema onde o primeiro contato do visitante é um quiz analítico de perfil. Com base na idade, dificuldades e rotina do usuário, o sistema monta a página de vendas seguinte focado exatamente nos pontos de dor revelados.\n\nToda essa interação foi perfeitamente interligada ao rastreamento nativo do servidor da rede de publicidade, garantindo otimização máxima na inteligência dos anúncios da cliente.",
    highlights: [
      "O sistema unifica a qualificação de perfil, oferta dinâmica e fechamento final na mesma aplicação.",
      "A plataforma redesenha os textos principais em tempo real baseado nas dores escolhidas pelo usuário no momento inicial.",
      "O rastreamento de anúncios comunica diretamente com o servidor da rede social, garantindo que a base de inteligência aprenda com eficiência quem realmente compra.",
      "A arquitetura desenhada em blocos foi projetada unicamente visando expansão sem custos severos de programação.",
      "A organização do projeto permite adaptar layouts e links facilmente para abrigar o lançamento comercial de novos infoprodutos no futuro sem perdas de trabalho.",
    ],
    techFull: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "CSS Modules",
      "Route Handlers (API no Next.js)",
      "Meta Pixel",
      "Facebook Conversions API",
      "ESLint",
      "localStorage / sessionStorage",
      "Kiwify",
    ],
    recruiterText:
      "Direcionar tráfego para uma página estática não se mostrava eficiente para a conversão de vendas. Identificou-se a necessidade de qualificar o visitante antes da oferta comercial. Para solucionar isso, estruturou-se um quiz interativo de qualificação. Com base nas respostas (idade, dores e metas), a página adapta dinamicamente sua comunicação para o perfil do lead. A implementação otimizou o retorno sobre o investimento em anúncios (ROAS) e garantiu rastreamento preciso de eventos.",
  },
  {
    id: "teacher-ediane",
    gallery: buildGallery("curso-teacher-ediante", 20),
    title: "Curso Inglês na Mala",
    description:
      "Para libertar a professora de taxas operacionais altas em sites de terceiros, construiu-se uma área de membros integralmente exclusiva. Usando backend em Node.js/Express, a arquitetura administra autenticação via JWT e conecta-se via Webhook à API do Mercado Pago, lidando com pagamentos automáticos, envio de emails transacionais (Brevo) e bloqueio seguro do conteúdo multimídia.",
    tags: ["React", "Node.js", "PostgreSQL", "Mercado Pago"],
    year: "2024",
    deviceType: "desktop",
    image: "/images/projects/cover/project-teacher-ediane-preview.png",
    descriptionFull:
      "Vender cursos na internet dependendo de grandes plataformas costuma corroer a margem de lucro de profissionais da educação devido às altas comissões retidas. Para atacar essa perda, construiu-se uma plataforma de ensino inteiramente livre dessas amarras.\n\nO aluno entra por uma página comercial estruturada, solicita a compra e é direcionado para o fluxo do Mercado Pago. A genialidade da operação reside no pós-compra: os bastidores do sistema identificam que o pagamento entrou, liberam a conta do usuário com segurança e o aluno acessa o curso sozinho, tudo isso no piloto automático.\n\nAlém de possuir a liberdade de hospedar o conteúdo de forma privada, a área administrativa garante controle claro sobre pagamentos, progresso estudantil e fácil manutenção e expansão dos módulos de estudo sem complexidade técnica.",
    highlights: [
      "O processo se comunica direto com o gateway de pagamento protegendo contra qualquer cobrança acidental sobre a carteira do usuário final.",
      "Controle robusto de permissões e chaves seguras: só contas legalmente autenticadas navegam nas faixas contidas da área educacional.",
      "O perfil estudantil avança passando por verificações estritas, minimizando enormemente qualquer tipo de problema para a central de suporte aos alunos.",
      "A rotação e criação primária do passaporte do site exige apenas um clique simplificado garantindo acessibilidade e retenção perfeita.",
      "Painel administrativo completo foi planejado eliminando drasticamente as anotações financeiras que causavam fadiga em rotinas externas.",
      "O carregamento da carga de conteúdo viaja rapidamente mantendo a mídia do administrador intocada perante o consumo na plataforma dos alunos.",
      "Um arranjo super lógico defende com extrema responsabilidade as tentativas de reordenar módulos sem provocar qualquer falha nos índices da progressão dos que estão estudando simultaneamente.",
      "O projeto inteiro navega envolvido por uma armadura de validações profundas bloqueando quaisquer maliciosos tentando injetar peso nas requisições principais do servidor de banco de dados.",
    ],
    techFull: [
      "React",
      "React Router DOM",
      "Axios",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "pg",
      "bcrypt",
      "jsonwebtoken",
      "multer",
      "cors",
      "helmet",
      "express-rate-limit",
      "hpp",
      "Nodemailer",
      "Brevo API",
      "Vite",
      "ESLint",
      "PM2",
      "Nginx",
    ],
    recruiterText:
      "A demanda comercial visou a eliminação de comissões operacionais cobradas por plataformas de cursos terceirizadas. A solução foi a estruturação de uma área de membros proprietária. Com a integração do fluxo de pagamento automatizado via Mercado Pago, a liberação de acessos ocorre instantaneamente no pós-venda. A iniciativa otimizou as margens de lucro, descentralizou a gestão do sistema de cursos e automatizou o processo operacional de ponta a ponta.",
  },
  {
    id: "qota-finance",
    gallery: buildGallery("qota-finance", 14),
    title: "Qota Finance",
    description:
      "O problema do varejo internacional na Amazon era o descontrole de estoques em arquivos locais. A solução idealizada foi um painel gerencial corporativo que extrai inteligência de caixa comunicando com as rígidas SP-APIs da Amazon em tempo real. Orquestrado através de Background Workers e integrações pesadas, gera balanços e previne perda de fluxo emitindo alertas automatizados sem intervenção humana.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Amazon SP-API", "Docker", "Dashboards", "Workers"],
    year: "2024",
    deviceType: "desktop",
    image: "/images/projects/cover/project-qota-finance-preview.png",
    descriptionFull:
      "O desafio de operar e-commerces em larga escala é que o volume esmaga a checagem manual, resultando em dados desconexos e planilhas atrasadas. A gestão de loja consumia tempo precioso para cruzar saídas comerciais com as entradas financeiras ativas da operação.\n\nA estruturação deste sistema focou em acessar os canais internos de segurança da gigante do varejo americano para extrair relatórios vitais automaticamente. Através de automações em background, construiu-se relógios de alerta para reposições de estoques em tempo real e um dashboard financeiro que deduz precisamente custos complexos operacionais da vitrine.\n\nEsse desenvolvimento encurtou absurdamente as antigas checagens na equipe administrativa. Os gestores encontram gráficos processados que revelam com clareza todo o comportamento cru do faturamento do negócio na palma da mão, tomando ações de compras focadas no risco mínimo de ausências na gôndola online.",
    highlights: [
      "Comunicação profunda com as plataformas nativas de vendas garantem importação de dados exatos sem requerer intervenções operacionais nos relatórios finais.",
      "Integração validada e testada rigorosamente para superar os muros rigorosos de privacidade da empresa vendedora suportando de forma limpa todas as regras digitais requeridas.",
      "O sistema extrai montantes monumentais de faturamento usando um alinhamento estruturado para evitar quaisquer picos mortais nos serviços hospedados diariamente.",
      "Tarefas autônomas funcionam operando checagens incansáveis em silêncio assegurando toda conferência bancária exigida durante os dias sem pausas e comunicando eventuais quebras de percurso.",
      "Todo código enxerga a verdadeira engenharia e matemática dos fornecedores internacionais, não omitindo variáveis de estocagem nem das passagens complexas que abatem do lucro real final do empresário na mesa corporativa.",
      "Robôs processam retornos automáticos lidando elegantemente com a comunicação externa no comércio baseando em formatos perfeitamente profissionais, amenizando os custos pesados no SAC comercial americano da parceira na ponta consumidora final global de modo imediato para elevar métricas orgânicas de retorno nas páginas das prateleiras gerais lá fora de forma assertiva de acordo com toda inteligência da equipe gestora no Brasil.",
      "Notificações essenciais evitam perdas brutais de fluxo sem abarrotar caixas operacionais dos gerentes, anotando que comunicou os alvos específicos de reabastecimento na medida inteligente com zero distorções desnecessárias na comunicação direta nos painéis virtuais ou aparelhos remotos deles de onde estiverem atuando ativamente nas revisões daquela operação.",
      "É uma aplicação dinâmica com fluência extrema e não algo dependente apenas do momento em que apertaram para baixar novos demonstrativos comerciais na área administrativa.",
    ],
    techFull: [
      "React 18",
      "Vite",
      "React Router DOM",
      "Axios",
      "Recharts",
      "CSS Modules",
      "Node.js",
      "Express",
      "TypeScript",
      "Knex",
      "Zod",
      "PostgreSQL",
      "Amazon SP-API",
      "AWS LWA",
      "AWS SigV4",
      "AWS SQS",
      "Nodemailer",
      "Docker Compose",
      "Nginx",
      "Caddy",
      "Vitest",
    ],
    recruiterText:
      "A operação de e-commerce da Qota na Amazon era gerida por planilhas dispersas e checagens manuais demoradas. Para organizar a operação, os dados foram integrados diretamente da Amazon, criando-se um sistema interno que alerta sobre a necessidade de reposição de estoque e exibe com precisão o fluxo de caixa. Isso automatizou o trabalho diário e trouxe clareza sobre o direcionamento financeiro da empresa.",
  },
  {
    id: "odontoclin",
    gallery: buildGallery("odontoclin", 4),
    title: "OdontoClin Agenda",
    description:
      "As perdas financeiras em clínicas causadas por ausências e dupla marcação exigiram automatização sistêmica. A solução consistiu em uma aplicação Full Stack blindada com um robusto controle de concorrência relacional em banco de dados e APIs JWT para os dentistas. A chave tecnológica uniu a confirmação digital integrando conexões diretas via bibliotecas do WhatsApp (Baileys), contendo atrasos operacionais.",
    tags: ["React", "Node.js", "PostgreSQL", "WhatsApp"],
    year: "2024",
    deviceType: "desktop",
    image: "/images/projects/cover/odontoclin-1.png",
    descriptionFull:
      "Clínicas em geral sofrem com uma dor operacional crônica: agendar pacientes manualmente gera dupla marcação e faltas que comprometem o faturamento. Foi preciso aplicar visão estratégica para sanar essa dinâmica construindo uma agenda inteligente conectada aos fluxos diretos dos dias modernos.\n\nA ferramenta gerenciou o atendimento nos bastidores. Embora a recepção reserve um horário em uma interface clara, a regra tecnológica principal proíbe estritamente que conflitos no horário existam em um mesmo consultório simultâneo.\n\nO grande sucesso, porém, reside na união com os serviços diretos como o sistema do WhatsApp. Na véspera, os recados solicitando confirmações são distribuídos integralmente pelas plataformas ativas do núcleo; uma decisão de negócios focada essencialmente na resolução ágil e na redução das cadeiras médicas inativas.",
    highlights: [
      "A defesa contra encadeamento dos horários cruzados foca num travamento vital profundo da tecnologia para impossibilitar desgastes humanos de secretárias cruzando consultas sem querer nos painéis de comando no momento da pressão intensa no atendimento presencial ou nas linhas remotas na porta principal da unidade empresarial atuante que utiliza os relatórios gerados todos os meses baseados na agenda final consolidada ali pra eles e processada nas avaliações diárias das tabelas operacionais da equipe médica especializada no Brasil.",
      "Interação sincronizada perfeitamente; o processo digital entrega visão externa ao cliente na mesma constância segura avaliada e acompanhada nos corredores médicos garantindo máxima sintonia relacional entre pontas e sistemas distintos de forma ágil.",
      "Implementação focada em enviar textos diretamente nos ambientes de rede mais fáceis pro contratante, sem perdas de tráfego, captando resoluções de forma integral no painel do banco e traduzindo de forma profissional e escalável num ecossistema nativo sem intervenções secundárias humanas frequentes do corpo gestor da administração predial e técnica na prática diária rotineira e intensa da equipe na matriz física central no Brasil e com estabilidade extrema no processo de longo prazo executado na ponta operante pra lá.",
      "O fluxo não assedia com comunicações irrelevantes e repetitivas graças aos filtros de moderação construídos rigorosamente no back-end para preservar uma imagem profissional imaculada.",
      "Autoridade fragmentada permite apresentar painéis de decisões adequados apenas pros respectivos escalões responsáveis pela área garantindo sigilo corporativo na ferramenta web da clínica sem brechas indesejáveis em dados delicados.",
      "Carregamentos pesados bloqueiam falhas através de barreiras inteligentes, blindando arquivos incompatíveis para preservar toda a velocidade natural das tabelas nos cadastros dos painéis operantes.",
      "A arquitetura visual foca diretamente no clique limpo; o time acessa o que importa, encurtando minutos cruciais de entendimento em treinamentos custosos do sistema para operações imediatas rápidas.",
    ],
    techFull: [
      "React 19",
      "React Router DOM",
      "Axios",
      "Dayjs",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pg",
      "bcryptjs",
      "jsonwebtoken",
      "multer",
      "Baileys",
      "qrcode",
      "Vite",
      "ESLint",
      "Nodemon",
      "dotenv",
      "CSS puro",
      "PM2",
    ],
    recruiterText:
      "Agendamentos manuais geravam conflitos de horários e absenteísmo por esquecimento. Desenvolveu-se um sistema de agendamento que valida e bloqueia horários diretamente no banco de dados para impedir sobreposição de consultas, além de enviar notificações automáticas de confirmação via WhatsApp. A solução reduziu a taxa de faltas e otimizou o tempo de recepção, permitindo foco no atendimento presencial.",
  },
  {
    id: "techouse",
    gallery: ["/prints-do-projeto/APP-TECHOUSE.png"],
    title: "TecHouse Segurança App",
    description:
      "O suporte técnico recebia ligações desnecessárias porque o cliente perdia os softwares no smartphone. Desenvolveu-se um aplicativo Hub central utilizando o framework Flutter para Android. A infraestrutura gerou permissões avançadas (deeplinks e Intents explícitas) executando as próprias câmeras nativas da marca sem estresse, contornando travas do sistema operacional com zero fricção de tela.",
    tags: ["Flutter", "Dart", "Android Intents", "url_launcher"],
    year: "2023",
    deviceType: "mobile",
    image: "/images/projects/cover/project-techouse-preview.png",
    descriptionFull:
      "A usabilidade de múltiplos programas na rotina doméstica causa entraves em clientes com pouco domínio tecnológico. Consumidores de sistemas de segurança eletrônica frequentemente se perdiam para encontrar o serviço de alarmes no aparelho móvel, aumentando consideravelmente os custos de suporte da base.\n\nA resolução para esse ponto de estrangulamento foi arquitetar um aplicativo facilitador. Desenvolvido para funcionar livre das barreiras e de configurações extensas ou formulários imensos e maçantes, ele atua diretamente em cliques centrais que alavancam com precisão exata os sistemas já inseridos no aparelho ou disparam as mensagens padronizadas pra central do instalador com um único botão na primeira vista da tela.\n\nA estruturação resultou num ecossistema polido com integração inteligente. É um aplicativo livre de entraves pesados e altamente alinhado aos perfis leigos, otimizando bruscamente os níveis percebidos de zelo pós-venda e despressurizando linhas de atendimento gerais do negócio no longo prazo de modo absurdamente prático e inteligente pra corporação.",
    highlights: [
      "Os mecanismos se comunicam de maneira perfeita executando os elos primários de outras pontas do sistema operacional acionando comandos avançados em frações mínimas sem bugs no aparelho principal do usuário leigo de modo elegante e responsivo preservando toda usabilidade de impacto limpa e profissional focado ali pra facilitar a vida dele pra ele ver a câmera e nada mais.",
      "Configurações essenciais foram inseridas nas áreas cinzentas do núcleo estrutural visando estar plenamente lícito aos crivos rigorosos que os modernos provedores mobiles aplicam na arquitetura geral sem banimentos e com a estabilidade de conexão constante no projeto comercial aprovado validando toda credencial do código na nuvem e nos modelos portáteis rodando firmes hoje nos dispositivos modernos de mercado atual.",
      "Concebido estritamente para o ambiente profissional rápido; o clique aciona o propósito exato diminuindo tempo de uso irrelevante, resultando em satisfação absoluta no percurso perfeitamente curto criado e direcionado intencionalmente na prancheta das operações pro cara já pular de lá ativado nos painéis comerciais fundamentais de operação rotineira de vigilância e proteção sem poluição na face limpa oferecida pra consumo ativo do serviço corporativo real final contratado deles.",
      "Sua abordagem se foca 100% nas limitações técnicas do consumidor mais carente das inovações mantendo tudo amigável sem remover a estrutura técnica profissional complexa rodando escondida perfeitamente abaixo de um painel desenhado na beleza intuitiva da simplicidade prática e comercial exigida e atingida sem perda do alto valor gerado ao negócio no geral lá pro dono da loja ver os resultados da satisfação na diminuição maciça de confusão nas linhas de dúvidas.",
    ],
    techFull: [
      "Flutter",
      "Dart",
      "Material Design",
      "url_launcher",
      "android_intent_plus",
      "flutter_svg",
      "Flutter Lints",
      "Flutter Launcher Icons",
      "Gradle KTS",
      "Kotlin Android Plugin",
    ],
    recruiterText:
      "Muitos clientes de sistemas de segurança eletrônica encontravam dificuldades para localizar aplicativos nativos ou solicitar suporte. Na TecHouse, essa complexidade gerava um volume alto de chamados. A solução foi o desenvolvimento de um aplicativo leve que atua como hub de atalhos rápidos. Com apenas um clique, o usuário acessa imagens de câmeras ou inicia um chat de suporte no WhatsApp. A iniciativa otimizou o tempo de atendimento da equipe e elevou a percepção de profissionalismo do serviço.",
  },
  {
    id: "clinica-uh",
    gallery: buildGallery("Clinica-Medica-UH", 13),
    title: "UH Clínica Web",
    description:
      "Desenvolvimento de portal de clínica interativo, conectando de ponta a ponta o front-end e o back-end em uma simulação completa de agendamento de consultas.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    year: "2023",
    deviceType: "desktop",
    image: "/images/projects/cover/project-clinica-uh-preview.png",
    descriptionFull:
      "A maioria dos portais voltados à saúde assemelha-se a panfletos estáticos, limitando a interatividade do usuário. Neste projeto, o desafio consistiu em estruturar uma plataforma web funcional para agendamentos clínicos, aproximando o paciente da prestação de serviços.\n\nToda a arquitetura foi desenvolvida do zero, contemplando a interface institucional e o portal do paciente com fluxos de cadastro e login simulados. A aplicação realiza a validação de todas as entradas, trafegando os dados sob protocolos seguros até a persistência no banco de dados.\n\nO escopo da solução demonstrou capacidade técnica de integração de ponta a ponta (full stack), conectando o front-end ao back-end de forma resiliente, o que resultou em excelente avaliação acadêmica e validação prática de engenharia de software.",
    highlights: [
      "Integração completa: desenvolvimento de interface de usuário, back-end de processamento e persistência de dados.",
      "Estruturação e validação de campos de entrada de dados para prevenção de falhas do usuário.",
      "O site já avisa na hora, com cor e detalhe, se a pessoa esqueceu de colocar uma arroba no email ou botou a senha errada.",
      "Montei o código igual peça de Lego: se precisar mudar um botão amanhã, arruma num lugar e resolve no site todo.",
      "Coloquei mapas reais e contato direto pro Zap para ser algo útil de verdade na vida de um cliente real.",
    ],
    techFull: [
      "React 18",
      "React Router DOM",
      "Axios",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "React Icons",
      "Node.js",
      "Express",
      "@react-google-maps/api",
      "Persistência em JSON local",
    ],
    recruiterText:
      "A maioria dos sites institucionais assemelha-se a um panfleto digital estático. O desafio aqui era criar uma página visualmente atraente e focada em conversão. Toda a base foi desenvolvida do zero para simular um agendamento clínico real, incluindo login, cadastro e validação. Esse projeto demonstra a capacidade de ir além do design visual, construindo toda a arquitetura de back-end necessária para o pleno funcionamento e geração de contatos para o negócio.",
  },
  {
    id: "conversor-mp4",
    gallery: ["/prints-do-projeto/Converter-Mp4-para-Mp3.png"],
    title: "Converter MP4 para MP3",
    description:
      "Automação local para extração offline de áudio em lote a partir de arquivos de vídeo, otimizando o fluxo de transcrição sem dependência de internet.",
    tags: ["Python", "CustomTkinter", "FFmpeg", "PyInstaller"],
    year: "2023",
    deviceType: "desktop",
    image: "/images/projects/cover/project-conversor-mp4-preview.png",
    descriptionFull:
      "Conversões online de vídeos corporativos pesados para extração de áudio costumam ser demoradas e expostas a anúncios ou riscos de segurança. Um cliente enfrentava esse problema diariamente para transcrever reuniões.\n\nPara resolver isso de forma definitiva, foi desenvolvida uma ferramenta local. O usuário abre o aplicativo, seleciona múltiplos vídeos simultaneamente, define o destino e executa a extração offline. O sistema processa e extrai o áudio diretamente no dispositivo.\n\nAlém de ser significativamente mais rápido por não depender de conexão de internet, o processo garante a privacidade das informações corporativas. O software foi empacotado para instalação simplificada em apenas dois cliques, operando como um aplicativo profissional.",
    highlights: [
      "Funciona até na caverna, sem usar um pingo de internet para converter.",
      "A tela é arrastar e clicar: feita para não precisar chamar a equipe de TI pra nada.",
      "Pode botar 50 vídeos de uma vez que ele avisa o que já acabou e o que ainda tá convertendo.",
      "Implementação de processamento assíncrono (multithreading) para evitar travamento da interface durante a conversão.",
      "O programa barra sozinho se o usuário mandar duas vezes o mesmo arquivo por engano.",
      "Não deixa apagar o áudio da semana passada se botar o mesmo nome de arquivo sem querer.",
      "Compatibilidade multiplataforma assegurando execução simplificada em diferentes sistemas operacionais.",
      "Pipeline de CI/CD para geração automatizada de instaladores a cada atualização de código.",
    ],
    techFull: [
      "Python",
      "CustomTkinter",
      "Tkinter",
      "FFmpeg",
      "Subprocess",
      "Threading",
      "Pathlib",
      "Bash",
      "Batch",
      "PyInstaller",
      "GitHub Actions",
      "Zenity",
      "Chocolatey",
    ],
    recruiterText:
      "O cliente perdia horas semanais realizando upload de vídeos pesados em plataformas web para extrair áudio e realizar transcrições. Foi desenvolvido um software local simplificado para resolver essa demanda de forma offline. O usuário arrasta os vídeos, clica em um botão e conclui a operação sem necessidade de internet. A solução acelerou o fluxo de trabalho e garantiu total privacidade e segurança dos dados locais.",
  },
  {
    id: "eco-afodelos",
    gallery: buildGallery("eco-de-afodelos", 9),
    title: "Ecos de Ásfodelos",
    description:
      "Garantir estabilidade de taxa de quadros e embates fluidos requer mais do que animação linear. Emulou-se o projeto focado integralmente na engine Godot orquestrando eventos baseados em tempo de forma inteligente. Ao ligar lógicas pesadas através de nós (Nodes), shaders táticos e comunicações via Sinais assíncronos, mitigou as panes e gerou um jogo completo para PCs limpo, suportando Gamepads e fluência técnica real.",
    tags: ["Godot 4.5", "GDScript", "GDShader", "HTML5"],
    year: "2023",
    deviceType: "desktop",
    image: "/images/projects/cover/project-eco-afodelos-preview.png",
    descriptionFull:
      "Lançar interação precisa em arenas digitais controladas obriga que as lógicas executadas não causem gargalos estruturais. Concentrando-se nesse aspecto, as fases orquestram escolhas e melhorias dinâmicas entre combates assegurando retenção contínua e imersão absoluta.\n\nA montagem alcançou seu ápice lógico estruturando os desafios de forma progressiva. O adversário final possui lógicas táticas que alternam comportamento baseadas em métricas da partida, forçando a matemática a agir simultaneamente em diversas frentes perante as respostas exigidas em tempo real.\n\nA resolução destas amarras críticas reflete perfeitamente a firmeza de uma engenharia em produto digital robusto. Luz, eventos simultâneos, decisões táticas de fundo e sonoridade viajam no sistema isentos da instabilidade inerente de protótipos complexos, comprovando sólida coordenação num ecossistema estressante e exigente de performance ponta a ponta sem fraturas pelo desgaste técnico em tela constante pro consumidor lá no painel ativado dele na ação central na ponta limpa de uso no aparelho ativo dele sem problemas e gargalos.",
    highlights: [
      "A inteligência das escolhas geradas produz métricas cruciais de auxílio à cada ação no cenário garantindo adaptações lógicas valiosas para o usuário prosseguir de maneira estável nas rotinas desenhadas em uso intenso.",
      "A matemática base encadeia recompensas interligadas que engajam sistematicamente e promovem retenção elevada ao longo das tomadas sucessivas de decisões estruturais.",
      "A estrutura central atua monitorando condições cruciais gerando reações complexas que se alinham sob a temperatura analítica das métricas e estados de combate ao redor do tempo sem dependência de engessamentos padrões limitados de respostas automáticas cruas das bases fracas.",
      "Criação sofisticada em blocos paralelos independentes informa frentes ativas isoladas se conectando por pacotes enxutos num ecossistema fluído impedindo totalmente quedas brutais nas taxas de quadros ou panes profundas visuais que afetem a entrega na base lógica da aplicação em rodagem na tela limpa pro usuário final ali na frente gerando estabilidade contínua pro mercado no longo prazo de exposição dele.",
      "A aplicação refina o controle absorvendo plenamente equipamentos periféricos garantindo paradas operacionais exatas isentas da mais leve quebra operacional no retorno imediato.",
      "Controles integrados entregam suporte gráfico altamente atrelado às ocorrências reais, munindo a percepção rápida por sinais de feedback precisos que orientam imediatamente a postura na rodada sem demandar leituras frias aos indicadores visuais secundários nas margens da apresentação ativa na tela principal focada limpa na ação pontual e dinâmica de forma limpa e impecável no contexto amplo de funcionamento constante lá na frente pra todos os níveis de percepções distintas do consumidor geral.",
    ],
    techFull: [
      "Godot 4.5",
      "GDScript",
      "Scenes .tscn",
      "CanvasLayer",
      "Control UI",
      "CharacterBody2D",
      "Area2D",
      "AnimatedSprite2D",
      "GDShader",
      "ShaderMaterial",
      "ConfigFile",
      "AudioServer",
      "DisplayServer",
      "Autoloads",
      "Windows Desktop Export",
      "Web Export",
      "Keyboard Input",
      "Gamepad Input",
    ],
    recruiterText:
      "O desenvolvimento de jogos como produtos completos requer planejamento estruturado e controle de performance. Neste projeto, o foco concentrou-se na arquitetura da espinha dorsal do software, integrando menus, lógica de combate, sistema de combos e inteligência artificial do adversário final. O resultado demonstra habilidade em gerenciar projetos de escopo longo, garantindo otimização de recursos e uma experiência de usuário fluida e livre de falhas.",
  },
  {
    id: "fba-automation",
    gallery: buildGallery("fba-automation", 7),
    title: "FBA Automation",
    description:
      "Validar lucros na Amazon abrindo abas massivas sobrecarregava as equipes com processos exaustivos e burocráticos. A automação construiu braços robóticos interativos via ecossistema FastAPI, Python e scriptagens de web scraping pelo Playwright. Com painéis de comandos visuais estruturados no React, a ferramenta minera catálogos, lê UPCs nativamente e gera exportações velozes direto pra Excel.",
    tags: ["Python", "FastAPI", "React", "Playwright", "PostgreSQL", "Docker", "LLMs", "Automation"],
    year: "2023",
    deviceType: "desktop",
    image: "/images/projects/cover/project-fba-automation-preview.png",
    descriptionFull:
      "Explorar métricas entre catálogos profundos pune a viabilidade comercial dos analistas operacionais. Validar margens rentáveis perante taxas agregadas da Amazon em uma escala manual era o grande freio limitante deste modelo diário corporativo nas remessas ao exterior.\n\nDiante da falha da produtividade humana frente aos vastos arranjos na tabela de insumos americanos, montou-se esta automação de vanguarda que interliga processos silenciosos nos navegadores num painel objetivo. A ferramenta substitui leituras visuais pela capacidade de processar simultaneamente bases inteiras buscando e devolvendo produtos matematicamente válidos focados na conversão limpa e assertiva do funil desenhado ao negócio diário.\n\nOs gargalos extenuantes se reduziram a poucos instantes em revisões analíticas puras na ponta. Evitaram-se lapsos humanos de interpretação na extração visual diária alavancando ganhos substanciais e escaláveis, entregando painéis enxutos, velozes e decisivos pra gestão em tempo real.",
    highlights: [
      "As raízes de sondagem estrutural na web foram implementadas suportando plasticidades não padronizadas visando nunca interromper varreduras nos blocos complexos dos parceiros sem perdas nos cruzamentos contínuos requeridos pela lógica pesada executada de fundo na base focada no garimpo incessante sem trava nem manutenção boba pra manter o ritmo operacional limpo.",
      "A ferramenta orquestra os elos invisíveis acoplando visuais amigáveis nos rastros reais dos processamentos escondidos assegurando confiança e acompanhamento constante sem gargalos na face gráfica ofertada ao empresário operante no dia a dia.",
      "O controle ativo blindou os registros gerados de maneira contínua, impedindo devastações em resultados apurados no caso imprevisível das malhas de conectividade oscilarem bruscamente nos turnos longos atuantes nos processos focados na leitura das malhas estrangeiras das vias remotas de conexão pra lá garantindo perenidade limpa dos acervos montados na memória ali da extração pontual pra empresa continuar sempre na linha focada no trabalho diário duro no servidor de rastreio incessante da firma sem medo de bugs sistêmicos locais ou problemas de infra externa imprevisível.",
      "Um espectro altíssimo de customizações assegura ajustes imediatos das engrenagens sem acionar manutenção sistêmica, proporcionando moldes precisos para táticas logísticas de variáveis flexíveis ativas diariamente na mesa das tomadas de decisão comercial na sede na ponta ativa operando tudo sozinhas sem fricção.",
      "Os fluxos geram comunicações instantâneas provendo segurança ao gestor do status tático e do panorama global dos processamentos engajados na rotina pesada de leitura constante com precisão máxima no painel principal monitorado por ele na mesa atenta e dedicada nos rumos do trabalho diário ativo.",
      "A inteligência de checagem afasta links não operantes, canalizando as energias do processamento exclusivamente para fontes lícitas e ativas, ampliando vigorosamente o escopo limpo das checagens sem tráfegos infrutíferos.",
      "Remessas enormes resultam em relatórios lapidados encaixados em planilhas impecáveis otimizando as verificações corporativas e isentando dobras e formatações manuais antes da consolidação do ciclo financeiro nas etapas táticas seguintes da empresa faturadora atuante ali.",
      "O cliente disponibiliza a lista no Google Planilhas e o sistema realiza a extração e integração dos dados de forma automatizada.",
      "Arquitetura robusta projetada para tolerar quedas e reconectar através de túneis VPN para contornar bloqueios regionais de requisições.",
    ],
    techFull: [
      "React",
      "React Router DOM",
      "JavaScript",
      "Vite",
      "Python",
      "FastAPI",
      "Uvicorn",
      "Playwright",
      "Pandas",
      "Requests",
      "BeautifulSoup",
      "lxml",
      "OpenPyXL",
      "Google Sheets CSV",
      "CSS",
      "ESLint",
    ],
    recruiterText:
      "A triagem de produtos para revenda na Amazon exigia análises manuais demoradas, item por item. Esse fluxo operacional foi automatizado com o desenvolvimento de um robô de varredura (web scraper). Com uma interface limpa e intuitiva, o processo que consumia horas passou a ser executado em minutos. A ferramenta analisa as listas de fornecedores automaticamente e filtra as oportunidades mais lucrativas, tornando o negócio escalável e otimizando o tempo dos analistas.",
  },
  {
    id: "panorama-covid",
    gallery: ["/prints-do-projeto/Panorama-covid-brasil.png"],
    title: "Panorama COVID Brasil",
    description:
      "Muitos analistas travam avaliando bases pandêmicas globais massivas preenchidas por lapsos de números ausentes. Direcionou-se essa dor tratando a informação brutal e aplicando lógicas puras via Pandas e linguagens em Python. Focando as descobertas limpas e modeladas nos relatórios gráficos do Matplotlib e Seaborn organizados rigorosamente sobre Jupyter Notebooks pra análises da presidência analítica.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    year: "2022",
    deviceType: "desktop",
    image: "/images/projects/cover/project-panorama-covid-preview.png",
    descriptionFull:
      "Em análises de dados, a grande falha inicial encontra-se na desorganização das fontes massivas repletas de lacunas e incongruências lógicas. Este projeto lidou ativamente sobre essas bases, processando informações reais imensas com foco prático em tratar e alinhar cada ruído antes de projetar conclusões sobre cenários da saúde.\n\nA exploração caminhou de forma sólida em Python, desenhando matrizes de verificações temporais precisas. As tratativas focaram primordialmente na purificação de informações ausentes que mascaram os picos regionais; somente após essa higienização pesada gerou-se as visualizações ativas separando as óticas de análise do globo em detrimento às métricas exclusivas brasileiras.\n\nA intenção deste material ratifica a excelência aplicada para converter a matemática em comunicação de nível gerencial limpa e objetiva sem perder profundidade no rigor numérico da análise estrutural executada por trás para gerar visibilidade estratégica na frente.",
    highlights: [
      "Foi embasado estritamente em bases sólidas e desafiadoras da realidade tangível, fugindo de matrizes simplificadas de escopo acadêmico raso.",
      "Aplica técnicas profundas de profilaxia e verificação prévia buscando total garantia lógica na matéria-prima antes de alavancar conclusões teóricas das checagens processadas.",
      "Padronizações finas garantem alinhamentos temporais puros protegendo todo diagnóstico contra oscilações enganosas ou atípicas ao longo da jornada dos eventos processados ali nas tabelas cruzadas.",
      "A arquitetura visual prioriza narração efetiva de valor tático; os agrupamentos numéricos tornaram-se indicadores estritamente essenciais sem ruídos estéticos vazios pra tela analítica central.",
      "As inferências caminham paralelamente isolando realidades distantes perante os resultados que incidem diretamente na logística espacial de foco central pra evitar leituras genéricas não-acionáveis no escopo da gestão no alvo principal.",
      "As explanações traduzem perfeitamente os cálculos abstratos em direções amigáveis e plenamente utilizáveis até nas pontas não-científicas das hierarquias analíticas com total segurança interpretativa.",
    ],
    techFull: [
      "Python",
      "Jupyter Notebook",
      "Google Colab",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "matplotlib.ticker",
      "warnings",
      "Our World in Data",
      "CSV público via GitHub Raw",
    ],
    recruiterText:
      "Tabelas densas com milhões de registros costumam ser de difícil compreensão. Neste projeto, dados reais e complexos da pandemia foram tratados e estruturados. Em vez de fórmulas isoladas, as informações foram traduzidas in uma narrativa visual clara, com gráficos de fácil interpretação. O projeto demonstra a capacidade de coletar dados brutos e transformá-los em informações estratégicas para a tomada de decisão.",
  },
  {
    id: "dra-julia",
    gallery: buildGallery("site-links-dra-julia-bonette", 5),
    title: "Links Dra. Júlia Bonette",
    description:
      "A perda de pacientes nos complexos e genéricos sistemas de catálogos minou o perfil elitizado da Dra Júlia. Para contornar, gerou-se uma exclusividade limpa escrevendo diretamente em raiz (HTML e CSS). A página pura não sofre de gargalos externos oriundos de frameworks arrastados, contendo preceitos de mobilidade digital pra suportar os pulsos do Instagram entregando retenção instantânea.",
    tags: ["HTML5", "CSS3", "JavaScript", "WhatsApp"],
    year: "2022",
    deviceType: "desktop",
    image: "/images/projects/cover/project-dra-julia-preview.png",
    descriptionFull:
      "Direcionar perfis quentes oriundos das redes para ferramentas engessadas prejudica profundamente a identidade institucional de profissionais de ponta. A meta aplicada nesta interface isolada buscou garantir uma condução suave até a conversão sem pulverizar o tráfego nas rotas de concorrentes indiretos dentro desses agregadores massivos.\n\nA estratégia de formatação focou integralmente na performance purista do carregamento, entregando requisições imediatas assim que demandadas. Com linhas de códigos enxutas, as paletas e botões alocados retém visualmente o contratante sem oscilar por limitações habituais na hospedagem principal da web comum.\n\nA estrutura de ação culmina em caminhos totalmente pré-formatados; acessos focados em propostas recebem atalhos para interagir num ecossistema de negócio com mensagens perfeitamente estabelecidas pra garantir a facilidade exata exigida num setor tão concorrido no momento prático e sensível na tomada final de marcação nos quadros de visitas ativas ali no dia comercial estipulado.",
    highlights: [
      "Operações isentas de frameworks complexos proveem leveza incomparável no repasse ao usuário diminuindo bruscamente perdas de retenções causadas por atrasos na recepção das interfaces finais.",
      "As implementações alinham recados pré-formatados que direcionam perfeitamente as abordagens iniciais mitigando gargalos no primeiro alinhamento técnico entre cliente novo e recepção central.",
      "Campos altamente imersivos providenciam cliques ágeis focados na tolerância e inclusão tátil nas usabilidades em telas móveis contendo blocos interativos em toda sua área visível pra agir.",
      "As estruturas acatam integralmente comandos sequenciais de teclado reforçando bases fundamentais inclusivas na internet e suportando qualquer modo interativo sem travas para usos menos ortodoxos no ambiente final web seguro lá.",
      "Camadas de polimento providenciam retornos visuais engajadores nas marcações estéticas sem afetar severamente índices mecânicos operacionais nas ferramentas gerais de rodagem dos pixels nas visualizações focadas no capricho pra marca sem dor pra tecnologia.",
      "A maleabilidade das marcações transita perfeitamente nas resoluções sem corromper alinhamentos institucionais mantendo fidelidade estrita no computador central corporativo e na margem popular de uso rápido lá fora.",
      "Aplica lógicas sensíveis aos parâmetros internos dos sistemas lendo tolerâncias ao estresse das dinâmicas animadas e focando acessibilidade técnica contínua pro contratante não ter enjoo ou quebra em equipamentos mais limitados na sua origem de hardware lá na praça geral do acesso livre dele na ponta fina final.",
      "Consistência estética total permeia as faixas da aplicação evidenciando um rigor nas hierarquias visuais da identidade sem quebrar o laço corporativo nas separações lógicas entre a base do bloco institucional apresentado nas diretrizes firmadas sem atritos.",
    ],
    techFull: [
      "HTML5",
      "CSS3",
      "JavaScript Vanilla",
      "CSS Variables",
      "Media Queries",
      "Google Fonts",
      "WhatsApp wa.me",
      "Instagram",
      "SVG inline",
      "Assets locais de imagem",
    ],
    recruiterText:
      "Usar aquele Linktree genérico no Instagram estava barateando a imagem da clínica da cliente. Construí uma página exclusiva, rápida como um raio e pensada puramente em não perder a pessoa que clica. Não tem dependência de serviço externo, carrega na hora e manda a pessoa direto para o agendamento no WhatsApp. É a prova de que uma página leve e bem feita converte muito mais que uma ferramenta pronta e engessada.",
  },
  {
    id: "contatos-gabi",
    gallery: buildGallery("site-contatos-gabi", 4),
    title: "Links Gabriela Xavier",
    description:
      "Engessar marca pessoal corporativa sob agregadores rasos reduz o funil agressivo e não remonta a autoridade final na visão do assinante do material educativo. Utilizou-se inteligência fluida (HTML e CSS vanilla baseada em flexibilidade CSS moderna e Javascript) para montar um portfólio digital veloz emulando texturas premium sem perdas latentes, impulsionando tráfego qualificado rumo à compra final.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    year: "2022",
    deviceType: "desktop",
    image: "/images/projects/cover/project-contatos-gabi-preview.png",
    descriptionFull:
      "No cenário digital concorrido das redes fechadas, apresentar contatos através de painéis agrupadores de praça barateiam a experiência de negócios focados na alta captação de clientes rentáveis. A estruturação precisava trazer solidez institucional atrelada à velocidade máxima sem travamentos nas margens do clique.\n\nA composição da plataforma foi concebida sob pilares minimalistas no nível do código porém altamente robusta em acabamentos visuais da frente. Ao remover a dependência de scripts maçantes, cada acesso projeta de imediato uma estrutura de botões inteligentes que dialogam responsivamente em todos os moldes visuais da base final conectada.\n\nO engajamento comercial é fortificado porque a página reage elegantemente e centraliza toda a confiança para o direcionamento de compra no fim do funil tático montado, preservando as medições fundamentais e sem entregar tráfego cruzado pra outros provedores perdidos nas malhas abertas de concorrentes em serviços genéricos gratuitos na operação atuante ali focada firmemente nela no final do mês ativo e limpo pra venda.",
    highlights: [
      "Uma entrega focada exime pesadas linguagens corporativas garantindo extrema aceleração de tráfego, mas emulando perfeitamente visuais sofisticados dignos de arranjos estéticos requintados nos pilares profissionais de grandes frentes na interface limpa e rápida.",
      "Configurou-se uma acessibilidade macro onde os limites de interações nos componentes estão maximizados extinguindo erros práticos na tomada ágil das intenções táticas primárias da navegação na urgência na interface contínua lá final.",
      "As estruturas acatam integralmente comandos sequenciais de teclado reforçando bases fundamentais inclusivas na internet e suportando qualquer modo interativo sem travas para usos menos ortodoxos no ambiente final web seguro lá.",
      "Interatividades pontuais utilizam matemática fundamental de animações nativas na estrutura abolindo dependências frágeis ou densas oriundas de bibliotecas importadas sujeitas a atrasos nos processamentos de estilo na renderização focada e lisa da matriz base final limpa ali no uso orgânico pra garantir retenção exata.",
      "Amplas respostas ao dinamismo dos hardwares reescalam as proporções dos componentes precisamente para a área viável assegurando um ambiente polido independente das oscilações visuais provenientes nas raízes da máquina que solicita o endereço comercial online da provedora da plataforma focada e ativa no domínio limpo pra consumo de conversão constante na massa popular acessando diariamente.",
      "A base contempla validações em preferências de redução cinemática nos sistemas da pessoa usuária para garantir estabilidade visual e confortável perante limitações estéticas de hardware.",
      "Estruturas lógicas elaboradas de maneira isolada proporcionam facilidade extrema na clonagem logística da rede provendo novas contas de serviços em janelas irrisórias de manutenções primárias de implantação ativa.",
    ],
    techFull: [
      "HTML5",
      "CSS3",
      "JavaScript Vanilla",
      "CSS custom properties",
      "Gradientes",
      "Glassmorphism",
      "Media queries",
      "Google Fonts",
      "WhatsApp wa.me",
      "Instagram",
      "Favicon",
      "Meta tags básicas de SEO",
    ],
    recruiterText:
      "A mesma lógica que apliquei para clínicas: a Gabi Xavier precisava de uma recepção digital mais profissional que um agregador de links comum. Fiz uma solução técnica sob medida que não trava, carrega os botões de vendas de forma impecável e reforça a marca pessoal dela de cara. É aquele tipo de detalhe técnico que custa pouco para carregar, mas que retém a pessoa no momento mais crítico: a hora do primeiro contato comercial.",
  },
  {
    id: "twitch-analytics",
    gallery: buildGallery("twitch-analytics", 6),
    title: "Twitch Analytics",
    description:
      "Buscando investidores perdidos em dados de lives em vídeos genéricos cruzados às pressas na interface visual padrão, elaborou-se o dashboard técnico com acesso focado no banco de dados da própria Twitch (API Rest). Aplicou-se Pandas e linguagens no Python conectando na frente analítica com a ferramenta Streamlit para injetar painéis visuais que limpam dados sujos providenciando tabelas de leads instantaneamente em formato CSV.",
    tags: ["Python", "Streamlit", "Twitch API", "Pandas"],
    year: "2024",
    deviceType: "desktop",
    image: "/prints-do-projeto/twitch-analytics-1.png",
    descriptionFull:
      "No ambiente comercial virtual, investidores falham nas tomadas de decisões tentando interpretar planilhas desconexas em plataformas onde os cruzamentos de sucesso limitam as visões macros focadas puramente na publicidade. Frente à ausência de cruzamentos práticos, desenhou-se um dashboard alinhando extrações diretas sobre os servidores raízes em tela polida e imediata.\n\nA estrutura se alimenta sem intermediários através do núcleo dos canais oficiais focando velocidade máxima em requisições seguras. O analista atua configurando blocos fáceis na tela onde em milissegundos o painel converte requisições colossais cruzando a performance das estrelas virtuais, horários em alta e picos de acessos na mesa da gerência da área competitiva.\n\nAbsteve-se do ruído caótico inerente dos métodos manuais. As informações são processadas perfeitamente alinhadas nos filtros propostos, e em frações minúsculas do percurso tradicional são transformadas num documento visual e também passíveis a se transferirem formatadas a repositórios bancários das planilhas para validações fiscais ou publicitárias nas gerências avançadas no ato na nuvem sem requerer engenharias avulsas de pontes nos bastidores ali operantes pra entrega firme de relatórios densos no dia comercial longo deles fechando ciclos analíticos de excelência em tempo recorde comprovado tecnicamente com muita força e fluidez do código-base em ação no mercado no painel seguro de acompanhamentos diários da métrica geral de desempenho de faturamento deles pra alinhar acordos financeiros limpos e velozes.",
    highlights: [
      "As conexões adentram portas oficias garantindo dados autorizados, auditáveis e imediatos em oposição à coleta ruidosa e irregular encontrada em serviços amadores gerando precisão plena comercial nas amostras extraídas.",
      "O layout baseia-se num buscador flexível; matrizes amplas processam o contexto cru devolvendo listas enxutas e qualificadas direcionando rapidamente os focos das pesquisas sem perambular em abas burocráticas inúteis pro gestor no controle veloz geral ali focado na conversão exata requerida de busca pontual sem trava no andamento rotineiro ativo.",
      "A ferramenta disponibiliza seleção avançada de colunas garantindo foco integral nos índices essenciais alinhados à exata necessidade do modelo analítico do gestor no instante da pesquisa.",
      "Operações compostas de agrupamentos lógicos proporcionam extração de nuances táticas nos cenários através de métricas cruzadas de alta relevância simultaneamente acionadas sem comprometer taxas de reposta.",
      "O sistema remata convertendo relatórios em arquivos essenciais gerenciais consolidando o fluxo numa formatação pronta e impecável pro acompanhamento contábil final do ecossistema principal de forma automática e imutável.",
      "Controles e atalhos rápidos dispõem panoramas previamente otimizados alinhando amostras fundamentais para análises preliminares eficientes sem exigir formulações minuciosas nas abordagens focadas puramente na agilidade no horizonte estratégico inicial do projeto.",
    ],
    techFull: [
      "Python",
      "Streamlit",
      "Twitch API",
      "Pandas",
      "Requests",
      "OpenPyXL",
      "Plotly",
      "python-dotenv",
    ],
    recruiterText:
      "Mapear criadores em destaque na Twitch exigia análises manuais lentas e cruzamento de planilhas. A solução foi integrar diretamente a API da plataforma para criar um painel dinâmico. O usuário pode pesquisar, filtrar e exportar relatórios em formato Excel ou CSV rapidamente. O projeto demonstra a habilidade de consumir APIs, conectar dados de forma inteligente e entregar painéis funcionais para análise de mercado.",
  },
];

const FEATURED_PROJECT_ORDER = [
  "zoebot-openclaw",
  "fba-automation",
  "qota-finance",
  "coinsight",
] as const;

function withFeaturedProjectOrder(projects: Project[]): Project[] {
  const featuredRank = new Map<string, number>(
    FEATURED_PROJECT_ORDER.map((id, index) => [id, index]),
  );

  return projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const rankA = featuredRank.get(a.project.id);
      const rankB = featuredRank.get(b.project.id);

      if (rankA !== undefined && rankB !== undefined) return rankA - rankB;
      if (rankA !== undefined) return -1;
      if (rankB !== undefined) return 1;
      return a.index - b.index;
    })
    .map(({ project }) => project);
}

const ORDERED_PROJECTS_PT = withFeaturedProjectOrder(PROJECTS_PT);

const EXPERIENCES_PT: Experience[] = [
  {
    role: "Desenvolvedor Full Stack | IA Aplicada e Automação",
    company: "Moontech",
    employmentType: "Tempo integral",
    period: "mai de 2024 - até o momento",
    location: "Remoto",
    isCurrentRole: false,
    description: [
      "Fábrica de software focada em sistemas, plataformas, automações, IA aplicada e soluções digitais para empresas de diferentes segmentos.",
      "Experiência em fábrica de software com foco no desenvolvimento de sistemas web, plataformas digitais, integrações, automações inteligentes e soluções orientadas a negócio. Forte conexão entre frontend, backend, APIs, dados, infraestrutura, produto e relacionamento com clientes.",
      "A experiência teve foco em construção e evolução de aplicações com Angular, Next.js, GraphQL, PostgreSQL, Python, Docker e AWS, além de apoio a deploy, manutenção, correções, melhorias contínuas e entregas em ambiente produtivo.",
      "Também inclui atuação prática com IA aplicada e IA generativa em fluxos internos e comerciais, especialmente em automações conectadas ao HubSpot para qualificação de leads, geração de propostas, atendimento, suporte ao cliente, pós-venda e organização de informações comerciais.",
      "A vivência fortaleceu a capacidade de conectar desenvolvimento de software, automação, engenharia de IA, dados, produto e visão comercial para resolver problemas reais de operação, eficiência e relacionamento com clientes.",
    ],
    highlights: [
      "Desenvolvimento full stack de sistemas web com Angular, Next.js, GraphQL, PostgreSQL, APIs e integrações entre serviços.",
      "Construção de automações com IA aplicada e IA generativa integradas ao HubSpot para apoiar qualificação de leads, propostas, atendimento e pós-venda.",
      "Uso de LLMs e ferramentas modernas de IA para acelerar fluxos internos, organizar informações, apoiar tomada de decisão e reduzir tarefas manuais.",
      "Desenvolvimento de dashboards e visualizações com Python e Streamlit para acompanhamento de dados internos, indicadores e processos comerciais.",
      "Apoio em Docker, AWS, deploy, manutenção, monitoramento e automações em ambiente de produção.",
      "Integração entre tecnologia, produto, cliente e negócio para transformar demandas reais em soluções digitais aplicáveis.",
      "Colaboração em decisões técnicas e comerciais, com visão de produto, comunicação com clientes e foco em eficiência operacional.",
    ],
    techTags: [
      "Python",
      "Angular",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "AWS",
      "HubSpot",
      "Streamlit",
      "n8n",
      "IA Generativa",
      "IA Aplicada",
      "LLMs",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Llama",
      "LangChain",
      "Hugging Face",
      "Ollama",
      "DeepSeek",
      "Mistral",
      "Perplexity",
      "Copilot",
      "Automação",
      "APIs",
    ],
    logoImage: "/images/experiences/moontech.jpeg",
    logoAlt: "Logo da Moontech",
  },
  {
    role: "Desenvolvedor Full Stack | Automação, IA Aplicada e Processos",
    company: "Pró-Saúde Materiais Odontomédicos",
    employmentType: "Tempo integral",
    period: "abr de 2020 - fev de 2022 · 1 ano 11 meses",
    location: "Itajubá, Minas Gerais, Brasil · No local",
    description: [
      "Digitalização, automação e melhoria de processos administrativos, comerciais e operacionais com foco em sistemas internos, dados, IA aplicada e eficiência.",
      "Experiência voltada à digitalização e automação de processos administrativos, comerciais e operacionais em empresa do setor odontomédico. O foco principal foi transformar rotinas manuais, controles dispersos e tarefas repetitivas em fluxos digitais mais simples, organizados e eficientes.",
      "A atuação envolveu automações com Python, JavaScript, Google Sheets, APIs e integrações entre ferramentas digitais para apoiar áreas como financeiro, estoque, atendimento, marketing, vendas, operação e gestão.",
      "A experiência também incluiu uso de IA aplicada e IA generativa em fluxos de comunicação, automação de redes sociais, organização de informações, atendimento e suporte a processos internos. O desenvolvimento de bot para WhatsApp integrado ao OpenClaw reforçou a aplicação prática de automação conversacional, integração de sistemas e melhoria de atendimento.",
      "Essa vivência consolidou uma base prática em engenharia de soluções com IA aplicada, automação de processos, integração de ferramentas, organização de dados operacionais e criação de sistemas internos para resolver problemas reais de negócio.",
    ],
    highlights: [
      "Automação de processos com Python, JavaScript, Google Sheets, APIs e integrações entre ferramentas digitais.",
      "Construção de sistemas internos para controle financeiro, estoque, organização operacional, atendimento e apoio à gestão.",
      "Uso de IA aplicada e IA generativa para apoiar comunicação, atendimento, redes sociais, rotinas comerciais e fluxos internos.",
      "Desenvolvimento de bot para WhatsApp integrado ao OpenClaw, conectando atendimento, automação e processos operacionais.",
      "Organização de dados financeiros, comerciais e operacionais para facilitar controle, acompanhamento e tomada de decisão.",
      "Redução de tarefas manuais por meio de automações, fluxos digitais e integração entre ferramentas.",
      "Transformação de necessidades reais de usuários não técnicos em soluções simples, acessíveis e úteis para a operação.",
    ],
    techTags: [
      "Python",
      "JavaScript",
      "Google Sheets",
      "APIs",
      "WhatsApp",
      "OpenClaw",
      "n8n",
      "Automação",
      "IA Aplicada",
      "IA Generativa",
      "ChatGPT",
      "Claude",
      "Gemini",
      "LangChain",
      "Ollama",
      "DeepSeek",
      "Copilot",
    ],
    logoImage: "/images/experiences/prosaude.jpg",
    logoAlt: "Logo da Pró-Saúde Materiais Odontomédicos",
  },
  {
    role: "Desenvolvedor Full Stack | Produto e Soluções Digitais",
    company: "(Empresa Júnior) byron.solutions",
    employmentType: "Tempo integral",
    period: "abr de 2020 - nov de 2021 · 1 ano 8 meses",
    location: "Itajubá, Minas Gerais, Brasil · Remoto",
    description: [
      "Software house júnior focada em desenvolvimento web, produto, gestão de projetos, UX/UI, integrações, APIs e soluções digitais para empresas.",
      "Experiência em software house júnior com foco no desenvolvimento de sites, aplicações web, sistemas internos, landing pages, fluxos CRUD, integrações via APIs REST e soluções digitais para clientes e projetos internos.",
      "A atuação combinou desenvolvimento full stack, produto, levantamento de requisitos, definição de escopo, prototipação, organização de entregas, comunicação com clientes e gestão de projetos. Essa base foi essencial para consolidar uma visão prática sobre como transformar necessidades de negócio em soluções técnicas bem estruturadas.",
      "A experiência também fortaleceu competências importantes para engenharia de IA e automação, como modelagem de problemas, análise de requisitos, desenho de fluxos, integração entre sistemas, organização de dados, experiência do usuário e comunicação entre áreas técnicas e não técnicas.",
      "O trabalho em projetos digitais, produto e relacionamento com clientes contribuiu diretamente para a capacidade de entender dores reais, estruturar soluções e conectar tecnologia, negócio e entrega de valor.",
    ],
    highlights: [
      "Desenvolvimento de sites, landing pages, sistemas web, funcionalidades CRUD e integrações via APIs REST.",
      "Construção de soluções digitais conectando frontend, backend, banco de dados, regras de negócio e experiência do usuário.",
      "Levantamento de requisitos, definição de escopo, organização de backlog e acompanhamento de tarefas no Trello.",
      "Versionamento com Git e GitHub em projetos internos e para clientes.",
      "Prototipação de interfaces no Figma e apoio na definição de UX/UI.",
      "Comunicação com clientes, desenvolvedores e stakeholders para transformar necessidades de negócio em entregas técnicas.",
      "Vivência com Product Ownership, gestão de projetos, venda consultiva de soluções digitais e comunicação de valor.",
      "Base prática em produto, requisitos, integrações e modelagem de problemas, competências essenciais para projetos de IA aplicada e automação.",
    ],
    techTags: [
      "Full Stack",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "APIs REST",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Cloud",
      "Figma",
      "UX/UI",
      "Trello",
      "IA Aplicada",
      "IA Generativa",
      "ChatGPT",
    ],
    logoImage: "/images/experiences/byron.jpeg",
    logoAlt: "Logo da byron.solutions",
  },
  {
    role: "Professor Voluntário",
    company: "CAAI - Curso Assistencial Amigos de Itajubá",
    employmentType: "Voluntariado",
    period: "mar de 2019 - fev de 2021 · 2 anos",
    location: "Itajubá, Minas Gerais, Brasil",
    description: [
      "Experiência voluntária em educação, comunicação, didática e explicação de temas complexos de forma simples e acessível.",
      "Experiência voluntária em projeto educacional voltado à preparação de estudantes para vestibulares. A atuação como professor de Interpretação de Texto fortaleceu habilidades de comunicação, didática, liderança, organização de conteúdo, escuta ativa e adaptação de linguagem para diferentes públicos.",
      "Essa experiência contribuiu diretamente para a capacidade de explicar conceitos complexos com clareza, conduzir apresentações, organizar raciocínio, orientar pessoas e comunicar ideias de forma objetiva. Essas competências são aplicadas também em tecnologia, especialmente na comunicação com clientes, usuários, times técnicos, áreas de negócio e stakeholders.",
    ],
    highlights: [
      "Planejamento e condução de aulas para turmas preparatórias para vestibulares.",
      "Organização de conteúdo, didática e comunicação clara com estudantes.",
      "Explicação de temas complexos de forma simples, acessível e objetiva.",
      "Desenvolvimento de liderança, empatia, escuta ativa e adaptação de linguagem.",
      "Fortalecimento da capacidade de comunicar ideias técnicas e não técnicas para diferentes públicos.",
    ],
    techTags: [
      "Educação",
      "Comunicação",
      "Didática",
      "Liderança",
      "Empatia",
      "Clareza",
      "Voluntariado",
      "Organização",
      "Desenvolvimento Humano",
    ],
    logoImage: "/images/experiences/caai.jpeg",
    logoAlt: "Logo do CAAI",
  },
];

const EDUCATION_PT = {
  degree: "Bacharelado em Ciência da Computação",
  institution: "Universidade Federal de Itajubá (UNIFEI)",
  period: "2020 a 2025",
  description:
    "Formação completa em fundamentos de computação, engenharia de software, algoritmos, bancos de dados, redes e inteligência artificial.",
  achievements: [
    "Projetos práticos com times multidisciplinares",
    "Trabalho de conclusão na área de desenvolvimento full stack",
    "Participação ativa em laboratórios e iniciativas acadêmicas",
  ],
};

const NAV_LINKS_PT = [
  { label: "Início", href: "#hero" },
  { label: "Projetos", href: "/projetos" },
  { label: "Tecnologias", href: "#skills" },
  { label: "Experiências", href: "#experience" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

type NavLink = (typeof NAV_LINKS_PT)[number];
type EducationContent = typeof EDUCATION_PT;

export type PortfolioUiContent = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    imageAlt: string;
  };
  language: {
    label: string;
    switchToPortuguese: string;
    switchToEnglish: string;
  };
  theme: {
    enableLight: string;
    enableDark: string;
    lightTitle: string;
    darkTitle: string;
  };
  common: {
    readMore: string;
    readLess: string;
    caseLabel: string;
    featuredProject: string;
    context: string;
    process: string;
    result: string;
    viewDetails: string;
    projectTechAria: (title: string) => string;
    projectSummaryAria: (title: string) => string;
    accessProjectAria: (title: string) => string;
  };
  hero: {
    downloadResume: string;
    contact: string;
    scrollDown: string;
    scrollDownAria: string;
  };
  about: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    graduationLabel: string;
    graduationCaption: string;
    graduationImageAlt: string;
    pillars: Array<{
      title: string;
      text: string;
    }>;
    paragraphs: string[];
  };
  value: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    intro: string;
    previousAria: string;
    nextAria: string;
    points: string[];
    cards: Array<{
      title: string;
      text: string;
      tag: string;
    }>;
    desktopSummary: string;
    mobileSummary: string;
    readSummary: string;
    hideSummary: string;
    mobileSummaryExpanded: string;
  };
  skills: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    filterLabel: string;
    swipeLabel: string;
    areasLabel: string;
    skillsLabel: string;
    itemsLabel: string;
    masteryLabel: string;
    groups: Array<{
      title: string;
      summary: string;
      items: Array<{
        name: string;
        description: string;
      }>;
    }>;
  };
  experience: {
    aria: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    availabilityAria: string;
    timelineAria: string;
    current: string;
    start: string;
    latest: string;
    step: string;
    moontechLetterPt: string;
    moontechLetterEn: string;
    moontechLetterPtTitle: string;
    moontechLetterEnTitle: string;
  };
  projects: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    featuredCases: string;
    featuredCasesDescription: string;
    carouselAria: string;
    viewAll: string;
    allProjects: string;
    backToPortfolio: string;
    backToProjects: string;
    notFoundEyebrow: string;
    notFoundTitle: string;
    projectEyebrow: string;
    aboutProject: string;
    technicalHighlights: string;
    technologiesUsed: string;
    forRecruiters: string;
    viewProject: string;
    repository: string;
    underConstruction: string;
    reservedSpaceTitle: string;
    reservedSpaceText: string;
    openRepository: string;
    placeholderCover: string;
    placeholderInside: string;
    console: {
      windowTitle: string;
      listAria: string;
      runPrefix: string;
      hint: string;
      statusReady: string;
      statusModel: string;
      statusLoaded: (count: number) => string;
      openCase: string;
      outputAria: string;
      promptAria: string;
      promptPlaceholder: string;
      promptSend: string;
      promptEmpty: (query: string) => string;
      promptMatches: (count: number) => string;
      suggestionsLabel: string;
      suggestions: string[];
    };
  };
  gallery: {
    carouselRole: string;
    imagesAria: (title: string) => string;
    videoAria: (title: string) => string;
    imageAlt: (title: string, index: number, total: number) => string;
    previous: string;
    next: string;
    selectImage: string;
    goToImage: (index: number) => string;
    videoFallback: string;
  };
  education: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    mainImageAlt: string;
    ceremony: string;
    graduated: string;
    classImageAlt: string;
    classYear: string;
    degreeShort: string;
    numbers: string;
    yearsFormation: string;
    linesWritten: string;
    location: string;
    diplomaTitle: string;
    viewDiploma: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    copyEmailAria: string;
    emailCopiedAria: string;
    emailCopiedLabel: string;
    responseLabel: string;
    responseValue: string;
    locationLabel: string;
    locationValue: string;
  };
  footer: {
    backToTop: string;
    top: string;
    text: string;
  };
  linksPage: {
    backToPortfolio: string;
    whatsappCta: {
      label: string;
      message: string;
      aria: string;
    };
    links: Array<{
      label: string;
      description: string;
      kind: "portfolio" | "linkedin" | "resume" | "github";
    }>;
  };
  floatingWhatsApp: {
    aria: string;
  };
};

export type PortfolioContent = {
  profile: typeof PROFILE_PT;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: EducationContent;
  navLinks: NavLink[];
  ui: PortfolioUiContent;
};

const PROFILE_EN: typeof PROFILE_PT = {
  ...PROFILE_PT,
  role: "Applied AI Engineer",
  tagline:
    "I design and ship production AI systems with LLMs, RAG, autonomous agents, LangChain, LangGraph, APIs, and full stack automations to solve real operational and business problems.",
  location: "Brazil",
  bio: "Computer Science graduate from the Federal University of Itajuba. Obsessed with solving real problems.",
};

const PROJECT_TRANSLATIONS_EN: Record<string, Partial<Project>> = {
  "zoebot-openclaw": {
    description:
      "Multi-agent assistant controlled from WhatsApp, with a multi-LLM gateway, LangChain.js RAG, and Node.js automations running in a self-hosted home lab.",
    descriptionFull: `ZoeBot OpenClaw is a personal multi-agent automation platform controlled through WhatsApp. Zoe interprets natural language in a multi-LLM gateway and routes commands to Node.js agents responsible for tasks, reminders, ideas, FBA research, and knowledge retrieval with RAG.

The architecture runs in a self-hosted home lab with Evolution API v2.3.6, PostgreSQL, Redis, Docker where it makes sense, and processes managed by systemd. The project also separates AI-based interpretation from deterministic business logic, keeping critical decisions predictable, auditable, and code-driven.`,
    highlights: [
      "Conversational gateway with failover across 5 LLMs to interpret commands and route tasks.",
      "Five Node.js agents, with 4 deterministic flows and 1 RAG agent powered by LangChain.js and Gemini.",
      "End-to-end architecture with Evolution API, PostgreSQL, Redis, systemd, Docker, and an automatic watchdog.",
      "FBA agent using Puppeteer, Keepa, Amazon SP-API, auditable rules, and Google Sheets synchronization.",
    ],
    recruiterText:
      "In this project I designed a real applied AI architecture that connects WhatsApp, multiple LLMs, Node.js agents, RAG, and operational automations in a self-hosted 24/7 environment. The result was a resilient and evolving personal system, built with proportional technical decisions, predictable logic, and end-to-end integration.",
  },
  coinsight: {
    title: "CoinSight Thesis",
    description:
      "Python + Streamlit project that combines price ETL, PostgreSQL, Machine Learning models and analytical dashboards. The thesis investigated how social and geopolitical factors affect cryptocurrency prices.",
    descriptionFull:
      "CoinSight was built to answer a practical research question: how do social and geopolitical factors influence cryptocurrency prices, and how can those signals be incorporated into predictive models?\n\nTechnically, the project implements an end-to-end flow: OHLC data collection and updates for BTC, ETH, ADA and SOL through ETL; structured storage in PostgreSQL; a Streamlit web interface with multiple pages for visual exploration, indicators and forecasts; Machine Learning modules for feature engineering, training, model comparison, backtesting and walk-forward analysis; plus a geopolitical events, news and social sentiment layer to contextualize price movements.\n\nThe project was applied with real data in an analytical workflow, going beyond an academic prototype and showing concrete practical application.",
    highlights: [
      "Modular architecture separating ETL, interface, components and ML.",
      "Technical and geopolitical feature engineering in the same pipeline.",
      "Temporal validation and walk-forward analysis to reduce optimistic evaluation.",
      "Prediction persistence with database metrics for comparable history.",
      "Backtesting with risk and return metrics beyond statistical error.",
      "External context integration (events/news/social) in the analysis flow.",
    ],
    recruiterText:
      "Thesis project with real application that shows maturity across the data lifecycle: ingestion, modeling, evaluation and visualization. CoinSight demonstrates the ability to connect applied research with software engineering, especially in time-series scenarios and multi-source signal integration.",
  },
  "family-money": {
    description:
      "Private full stack web application created to manage real family finances in one place. The project combines manual entries, Open Finance bank sync and PDF statement import with review before saving, giving a practical view of expenses, balance and monthly savings.",
    descriptionFull:
      "FamilyMoney was born from a real household problem: there was no clear visibility into where the family money was going over the month. Checking banking apps, copying values manually and keeping data in scattered spreadsheets created delays, forgotten records and inconsistent totals.\n\nTo solve this, the system was designed as a private day-to-day application that centralizes three data entry flows in the same product: manual entries for quick records, automatic bank synchronization through Open Finance and PDF statement import with review before persistence. The goal was to make financial control simpler for non-technical users without relying on generic tools, ads or exhausting manual routines.\n\nIn practice, the project delivers a complete architecture with Angular 19 on the frontend, Node.js + Express 5 on the backend, PostgreSQL with exact monetary precision and infrastructure prepared for local development and deployment. The result is a tool that helps users understand category spending, track balance and react earlier when the budget starts drifting off course.",
    highlights: [
      "Hybrid data-input flow with manual entries, Pluggy-powered Open Finance sync and PDF statement import in the same product.",
      "Angular 19 frontend with standalone components, signals and lazy loading for a light and modular navigation flow.",
      "Node.js + Express 5 backend with PIN authentication, scrypt hashing and security measures for financial data.",
      "PostgreSQL persistence using NUMERIC(12,2), avoiding monetary rounding issues.",
      "PDF statement parsing on the server with preview before saving, reducing import mistakes.",
      "Bank synchronization with webhooks and deduplication strategies to prevent repeated transactions.",
      "Organized development and deployment setup with Docker Compose and Linux VPS readiness.",
    ],
    recruiterText:
      "This project shows a full stack engineer building a real tool for everyday usage instead of only a visual demo. FamilyMoney combines modern frontend, secure backend, exact monetary persistence, bank API integration, PDF processing and consistency rules for financial data. It demonstrates the ability to turn a concrete family problem into a useful, cohesive and production-minded product.",
  },
  noara: {
    description:
      "Real client project for NOARA Semi Joias, built and deployed after a prototype phase. It now runs with WhatsApp conversion and a custom backoffice for products, reviews, uploads and financial entries.",
    descriptionFull:
      "The NOARA Commerce Platform is a full stack application built for a real client in the semi-jewelry market. The project started as a visual prototype and, after approval, evolved into a production system.\n\nThe architecture is split into two parts: a React/Vite frontend with the public brand experience, catalog filters, product page, reviews and WhatsApp purchase journey; and a Fastify/Prisma/PostgreSQL backend for admin authentication, catalog management, reviews, uploads and financial control.\n\nThe business decision at this stage was to avoid an internal checkout and focus the funnel on WhatsApp, reducing initial complexity and cost. Even so, the system supports a real operation with an internal panel so the store owner can keep data updated without touching code.",
    highlights: [
      "Full stack architecture with clear separation between public frontend and backoffice.",
      "Functional admin panel for a real client operation.",
      "Relational modeling for catalog, reviews and finance with Prisma.",
      "Monetary values using Decimal in the database for financial precision.",
      "Image upload with resizing and automatic WebP conversion.",
      "Admin authentication with HTTP-only cookie and secure session validation.",
      "Automated deployment on Linux server with Nginx, PM2 and HTTPS.",
    ],
    recruiterText:
      "Full stack project for a real client, covering the full product delivery: public React experience, Fastify API with Prisma/PostgreSQL, admin authentication, catalog CRUD, media upload and an operational finance module. It demonstrates pragmatic technical decision-making, end-to-end execution and production deployment.",
  },
  "gabi-xavier": {
    title: "Gabi Xavier Pilates Course",
    description:
      "Real client project created to strengthen a professional brand and increase online course sales. It combines an interactive quiz, commercial landing page, social proof, offer plans and external checkout integration.",
    descriptionFull:
      "This commercial web project was built for a real client with the goal of strengthening brand positioning and generating more digital sales. The application works as a conversion funnel: users engage with a profile quiz, receive personalized direction and continue to an offer landing page with arguments, social proof and calls to action.\n\nIn the quiz, users provide data such as weight, height, age, goals, experience level, available routine and difficulties. The flow validates data step by step, saves the profile in the browser and uses that information to adapt parts of the landing page communication.\n\nThe project includes event tracking with Meta Pixel on the client and server-side delivery through the Conversions API, helping measure interest, clicks and purchase intent. The structure was built to be reusable for other digital products.",
    highlights: [
      "Complete funnel (quiz + personalization + offer + checkout) in one application.",
      "Typed profile-based content personalization.",
      "Hybrid tracking strategy: client-side and server-side through Conversions API.",
      "Code organized with reusable components.",
      "Structure easily adaptable to other infoproducts by changing content and URLs.",
    ],
    recruiterText:
      "Real client project that shows the ability to build web products focused on business outcomes. Complete Next.js funnel with qualification quiz, dynamic content personalization, conversion landing page and event tracking with Pixel + Conversions API. The case shows modern frontend skills, code organization and business-oriented product thinking.",
  },
  "teacher-ediane": {
    title: "Ingles na Mala Course",
    description:
      "Complete web application with landing page, Mercado Pago checkout, authentication, student area with audio and progress, and an admin panel for content and user operations.",
    descriptionFull:
      "The project implements a digital learning platform focused on commercial conversion and content delivery. A prospect enters through the landing page, understands the course, buys through Mercado Pago, confirms the email, sets a password and accesses the student area in one continuous flow.\n\nOn the technical side, the Node.js/Express backend handles JWT authentication, an idempotent purchase webhook, transactional emails through Brevo, audio upload, module progress tracking and content reordering with database transactions.\n\nThe admin panel allows independent management of students, purchases, modules and phrases without code access. The project is in production with its own domain and real daily use.",
    highlights: [
      "Payment flow with idempotent webhook, avoiding duplicate processing.",
      "Route protection by authentication, user role and active purchase.",
      "Registration with token and email verification code, including attempt limits.",
      "Password creation flow through token after purchase approval.",
      "Administrative dashboard for real operation of students, purchases and modules.",
      "Media upload and delivery through the backend itself.",
      "Phrase reordering with transaction to avoid numbering conflicts.",
      "Validations with CORS, Helmet, HPP and rate limiting.",
    ],
    recruiterText:
      "Full stack production project for a real education client, with its own domain, daily admin usage and a strong commercial context. It shows practical command of React, Node.js, PostgreSQL and external integrations, plus the ability to deliver a complete user journey from purchase to content access.",
  },
  "qota-finance": {
    description:
      "Application built for Qota Store real operations, integrating Amazon APIs, financial dashboards, alerts and automations. The system organizes recurring data and supports operational decisions with continuous updates.",
    descriptionFull:
      "Qota Finance is a full stack application built to support Qota Store real operations. The core idea was to move away from scattered screens, spreadsheets and manual checks, concentrating everything in one system with financial and operational reading in the same place.\n\nOn the backend, the project works with broad Amazon API integration used in the operation, plus email and logs for communication and traceability. The code includes periodic synchronization handling, duplicate execution protection, update timing control and business rules that keep data consistent.\n\nOn the frontend, the system delivers separate modules for dashboard, expenses, income, cash flow, purchased products, orders, alerts and automatic responses.",
    highlights: [
      "Broad integration with Amazon APIs used in a real operation.",
      "Custom SP-API client with LWA authentication and SigV4 signing.",
      "Rate limit control, retry and synchronization focused on stability.",
      "Background workers for sync, alerts and autoresponder.",
      "Specific financial business rules, such as Prep Center handling.",
      "Autoresponder with templates, variables and different channels.",
      "Alerts with deduplication, priority and delivery tracking.",
      "Data foundation based on recurring real data and continuous updates.",
    ],
    recruiterText:
      "Qota Finance shows the ability to build a real operations platform, not just an isolated interface. The project brings together Amazon integration, automations, financial rules and data organization in a clear, useful and technically consistent full stack application. It demonstrates product vision, backend strength and operational reliability awareness.",
  },
  odontoclin: {
    title: "OdontoClin Schedule",
    description:
      "Full stack application for a dental clinic routine, with weekly schedule, public appointment confirmation and WhatsApp automations. The project is in production, was used by a real clinic and replaced a manual, disorganized flow.",
    descriptionFull:
      "OdontoClin is a full stack application focused on a dental clinic routine. On the frontend, it delivers a visual weekly schedule, appointment creation and editing, appointment type definition, status control and week navigation. On the backend, it manages JWT authentication, database-level schedule conflict rules, profile photo upload and WhatsApp integration through Baileys.\n\nIn addition to the internal panel, the system includes a public route for patients to confirm or cancel appointments without login, plus automatic reminders with controls to avoid resending the same appointment.\n\nThe project is running in production, was deployed for a real clinic and replaced a process that previously depended on spreadsheets and manual communication. This makes it strong for a portfolio because it shows a real business solution with practical use, not just a demo interface.",
    highlights: [
      "Schedule conflict rule applied at the database level, not only on screen.",
      "Internal and public flows connected in the same system.",
      "WhatsApp integration tied to real clinic usage through Baileys.",
      "Automatic reminders with control to avoid sending the same appointment again.",
      "Role-based authorization with different access for dentist and secretary.",
      "Profile photo upload with file validation.",
      "Interface designed for daily operational use, focused on schedule and routine.",
    ],
    recruiterText:
      "OdontoClin shows the ability to deliver a full stack solution for a real operations problem. The project combines authentication, role permissions, scheduling, public appointment confirmation, WhatsApp automations and a database rule to prevent time conflicts. It is a clear example of work that goes beyond UI and enters product logic.",
  },
  techouse: {
    title: "TecHouse Security App",
    description:
      "Utility mobile app built for a real client in electronic security. In one screen, users access WhatsApp support, Instagram, the company location in Itajuba and open monitoring/alarm apps installed on Android.",
    descriptionFull:
      "The TecHouse Security App is an Android application built in Flutter for a real client in the electronic security sector. The goal is to simplify the routine of end customers who receive cameras, alarms and other security features, offering a single access point for support channels and operational apps.\n\nThe flow is simple and direct: splash screen, main screen and direct action buttons. Each button runs a specific action: open WhatsApp, open Instagram, show the Google Maps location or launch monitoring and alarm apps already installed on the customer phone.\n\nTechnically, integration with external apps uses deeplinks for web services and explicit intents for Android apps, with the correct QUERY_ALL_PACKAGES manifest configuration for Android 11+. The result is a lightweight app with no long loading screen and no unnecessary navigation.",
    highlights: [
      "Hybrid integration with external apps: deeplinks for services and explicit intents for installed apps.",
      "Android 11+ configuration with QUERY_ALL_PACKAGES and <queries> for app visibility.",
      "Productivity-oriented flow: open a resource in one tap, without long navigation.",
      "Simple interface for non-technical users, with correct technical implementation for mobile interoperability.",
    ],
    recruiterText:
      "Mobile project built for a real security client, focused on solving a concrete usability problem: centralizing support and essential tools in one app. It demonstrates the ability to understand business context, implement an objective solution and deliver practical value to end users.",
  },
  "clinica-uh": {
    title: "UH Clinic Web",
    description:
      "Academic full stack project for the XDES03 course, focused on turning a clinic institutional site into a functional experience. Beyond presentation, it implements a complete contact form, account creation and login flow with frontend/backend integration.",
    descriptionFull:
      "This project was developed as an academic assignment for the XDES03 course and represents a full stack web application for a fictional medical clinic called UH Clinic. The proposal combines institutional communication with real interaction features.\n\nThe React frontend delivers Home, About Us and Contact pages, SPA navigation, integrated map and WhatsApp button. On the functional side, the project implements contact form, account registration and login, all validated on the frontend and integrated with real Express backend APIs, with JSON files simulating data persistence.\n\nThe final result received a 9.5 grade in the course, showing execution quality and attention to project requirements.",
    highlights: [
      "Functional full stack delivery (interface + API + persistence).",
      "Complete form flow: contact, registration and login.",
      "Frontend input validation with error/success feedback.",
      "Modular structure with reusable pages and components.",
      "Google Maps and WhatsApp integration for a realistic local business context.",
    ],
    recruiterText:
      "Academic full stack project that shows a solid practical foundation in web development: React with routes and components, validated forms, Express backend integration and data persistence for real-use simulation. It demonstrates complete execution, visual care and understanding of user flows, with an academic result of 9.5.",
  },
  "conversor-mp4": {
    title: "MP4 to MP3 Converter",
    description:
      "Desktop tool with a graphical interface to select multiple MP4 videos, choose the output folder and generate MP3 files locally. It was designed to help a client convert recorded meetings into audio for AI transcription.",
    descriptionFull:
      "The project is a desktop application built in Python to convert MP4 files into MP3 locally. Instead of requiring terminal commands, it offers a visual interface with multiple file selection, destination folder choice, progress bar and clear success, warning and error feedback.\n\nIt was created for a client who recorded meetings on video and needed to convert several files at once to organize audio files and continue with AI transcription. The conversion happens entirely on the user computer, without depending on external services or platform accounts.\n\nThe project includes automated build with PyInstaller and GitHub Actions for Windows executable generation, and was also designed to run on Linux with configured dependencies.",
    highlights: [
      "Local conversion without depending on external services.",
      "Simple interface for non-technical users.",
      "Batch processing with visual feedback per file.",
      "Separate thread to keep the interface responsive during conversion.",
      "Handling for duplicate and invalid files.",
      "Protection against overwriting existing files.",
      "Delivery designed for Linux and Windows.",
      "Automated build with executable generation through GitHub Actions.",
    ],
    recruiterText:
      "This project shows maturity in delivering a simple but well-finished tool. It brings together a graphical interface, FFmpeg integration, batch processing, error handling and Windows packaging, making clear that practical solutions can be built beyond technical demos.",
  },
  "eco-afodelos": {
    title: "Echoes of Asphodels",
    description:
      "Academic 2D game project with arena rhythm, choices between waves and card-based progression. It was designed for in-person presentation and shows a complete match flow from initial menu to victory or defeat.",
    descriptionFull:
      "Echoes of Asphodels is a 2D game made in Godot that organizes the experience into a clear cycle: start screen, main menu, difficulty choice, match, wave progression, final boss and result screen. The project was developed as academic work and presented in person at a university indie games event at UNIFEI.\n\nCombat happens in an arena with waves of enemies. Between each wave, the Fortune Teller appears to offer progression cards that change the character behavior, creating real synergies between choices. The game ends with a boss phase with distinct attack patterns and its own transition.\n\nThe project demonstrates complete command of the Godot engine, using scenes, signals, shaders, autoloads, gamepad support and export to Web and Desktop.",
    highlights: [
      "Card system that changes character behavior in a visible and practical way.",
      "Synergies between card groups, creating a real decision layer in progression.",
      "Boss with its own structure, phase transition and different attack patterns.",
      "Interface and gameplay connected through signals, timers and separated scenes.",
      "Keyboard and controller support for combat, menus, pause and card selection.",
      "Visual and audio feedback for quick player reading during action.",
    ],
    recruiterText:
      "Echoes of Asphodels shows the ability to deliver a complete interactive project in Godot, with menu, combat, progression, interface, visual feedback and a closed experience. The game was developed as academic work and presented in person at a university event, reinforcing the ability to build something that works as both a playable product and a portfolio demo.",
  },
  "fba-automation": {
    description:
      "React, FastAPI and Playwright project built for a real client working with Amazon in the United States. The application centralizes tab capture, supplier scraping, UPC extraction, catalog filters and batch export to speed up a process that was mostly manual.",
    descriptionFull:
      "The FBA Automation Hub was built for a real client working with Amazon-related operations in the United States. The project came from a practical need: finding suppliers, locating products, validating whether those items fit the Amazon selling flow and organizing the data was slow, manual and dependent on many repeated checks.\n\nThe system was built to solve this problem end to end. On the frontend, there is a React interface with separate modules for seller processing, product processing, browser tab capture, supplier scraping and automation panel. On the backend, the application uses FastAPI to receive CSV files, apply filters, control automation and interact with the browser through debug mode.\n\nThe project includes supplier reading through Google Sheets, interrupted execution recovery, real-time logs, configurable operation profiles, XLSX export with template and VPN support for an international scenario.",
    highlights: [
      "UPC and title extraction with multiple strategies for pages with different structures.",
      "Integration between web interface and real browser automation through debug mode.",
      "Operational flow with persisted state and recovery from interrupted execution.",
      "Configurable automation profiles for different usage scenarios.",
      "Real-time log monitoring in the web panel.",
      "Link and domain quarantine for failures to avoid unproductive repetition.",
      "XLSX export with template and clickable HTML for quick review.",
      "Sequential supplier reading through Google Sheets integrated into the operational flow.",
      "Operational support for VPN usage in the international client context.",
    ],
    recruiterText:
      "This project shows the ability to build complete solutions for real operations problems. Instead of creating only an interface or an isolated script, it delivers a full stack tool connecting browser automation, data processing, API and web interface to reduce manual work, speed up decisions and organize a real client workflow.",
  },
  "panorama-covid": {
    title: "Brazil COVID Overview",
    description:
      "Data analysis project built in Jupyter Notebook to study COVID-19 evolution based on public Our World in Data data. It combines exploration, basic cleaning, regional comparison and visualizations focused on Brazil.",
    descriptionFull:
      "The Analytical COVID-19 Overview in Brazil is an exploratory data analysis project built in Python inside a Jupyter Notebook, with Pandas, Matplotlib and Seaborn. The dataset comes from Our World in Data, a public, real and widely recognized dataset for global health studies.\n\nThe notebook organizes the process in a didactic way: it loads data, handles dates, evaluates missing values, compares countries and regions and turns numbers into charts with textual explanations. The analysis is split into two views, global and Brazil, to better contextualize the patterns found.\n\nAs a personal study project, the focus is to show analytical reasoning and the ability to work with real public data. The result is a clear and useful portfolio piece for demonstrating exploratory analysis skills.",
    highlights: [
      "Works with a real and broad public dataset, not artificial data.",
      "Performs exploratory reading focused on data quality, structure and context.",
      "Handles the date column before deeper analysis.",
      "Uses charts to support interpretation, not only decoration.",
      "Separates global analysis and Brazil analysis to improve result reading.",
      "Presents explanations in accessible language inside the notebook.",
    ],
    recruiterText:
      "This project shows a practical data analysis delivery with Python on a real and publicly relevant topic. It demonstrates the ability to organize a large dataset, identify patterns, create useful visualizations and explain results clearly. For recruiters, it shows attention to data, analytical reasoning and technical communication.",
  },
  "dra-julia": {
    title: "Dr. Julia Bonette Links",
    description:
      "Real project for a healthcare client, created to gather important links into a modern, visual and easy-to-use page. The solution helps turn interest into direct contact with a more organized experience than a generic link aggregator.",
    descriptionFull:
      "This project is a static microsite created for the real client Dr. Julia Bonette, a dentist, focused on presentation, organization and conversion. The idea is to gather the main contact and information paths in a single page, making the journey easier for users who arrive at the brand and need to quickly understand how to contact the professional or access services.\n\nThe page was built with pure HTML, CSS and JavaScript, with no framework, focused on lightness, fast loading and consistent responsiveness. WhatsApp buttons use preformatted links to guide the first contact. The whole interaction was designed to work well on both mobile and desktop, with basic keyboard support and attention to reduced motion preferences.",
    highlights: [
      "Lightweight implementation without framework, suitable for a fast conversion page.",
      "Use of preformatted WhatsApp links to guide the first contact.",
      "Entire cards are clickable, improving usability.",
      "Keyboard support for basic accessibility.",
      "Visual microinteractions with mouse pointer and touch, without making the page heavy.",
      "Responsive layout with specific rules for desktop and mobile.",
      "Attention to reduced motion preference (prefers-reduced-motion).",
      "Consistent visual structure between top, cards, institutional section and footer.",
    ],
    recruiterText:
      "This project shows the ability to turn a simple need into a useful digital solution for a real client. The delivery combines content organization, visual identity, responsiveness, basic accessibility and conversion focus, reinforcing practical product vision and the ability to build interfaces that help users act quickly.",
  },
  "contatos-gabi": {
    title: "Gabriela Xavier Links",
    description:
      "Real project for a real client, focused on digital presence, professional presentation and conversion. The page gathers WhatsApp, Instagram, a course project and an institutional section in a responsive and personalized interface.",
    descriptionFull:
      "The links-contatos-gabi project is a static landing page developed for the real client Gabriela Xavier. The proposal is to work as a more beautiful, personalized and professional version of a common Linktree, gathering the client main contact paths, social networks and projects in one page.\n\nThe page was created to be shared in Instagram bio, WhatsApp, ads and other channels, making it easier to access quick actions such as scheduling, visiting the social profile and accessing the related course.\n\nThe implementation uses pure HTML, CSS and JavaScript, with glassmorphism effects, gradients, mouse pointer and touch interactions and support for prefers-reduced-motion, all without external framework dependencies.",
    highlights: [
      "Simple solution without framework, but with professional visual finish.",
      "Entire clickable cards, reducing navigation friction.",
      "Keyboard support for basic accessibility.",
      "Mouse pointer and touch interaction effect without depending on external libraries.",
      "Responsive behavior well solved for large screens and mobile.",
      "prefers-reduced-motion adjustment, showing accessibility care.",
      "Structure easy to reuse for other independent clients.",
    ],
    recruiterText:
      "Real client project that shows the ability to create web interfaces focused on presentation, conversion and usability. The delivery was built with pure HTML, CSS and JavaScript, with attention to responsiveness, basic accessibility and visual interaction, demonstrating frontend command and practical product vision.",
  },
  "twitch-analytics": {
    description:
      "Analytical dashboard that collects data from the public Twitch API and offers global search, advanced filters, table selection and export to Excel, CSV and JSON. It allows analysis of streamers, games, streams, videos and clips in one interface.",
    descriptionFull:
      "Twitch Analytics is a data analysis web application built on top of the public Twitch API. The proposal is to transform raw platform data into useful information for creators, analysts and curious users, allowing them to cross-reference streamers, games, languages and view metrics in the same screen.\n\nUsers choose which tables to use (streamers, games, streams, videos, clips), select columns, apply advanced filters across multiple fields and export results to Excel, CSV or JSON. It also includes global search, shortcuts for top streamers, popular games and segmentation by language and region (for example BR/PT).\n\nThe application uses Python with Streamlit for the interface, Pandas for data manipulation and direct integration with the Twitch API. The result is a practical tool that combines collection, transformation and visualization in a simple flow.",
    highlights: [
      "Direct integration with the public Twitch API for real-time data collection.",
      "Global search for streamers, games and languages in one input.",
      "Dynamic table and column selection to build the analysis view.",
      "Advanced filters across multiple fields with combinable operators.",
      "Result export to Excel, CSV, JSON and chart visualization.",
      "Shortcuts for top streamers, popular games and regional segmentation.",
    ],
    recruiterText:
      "Data analysis project that demonstrates the ability to integrate external APIs, handle large volumes of information with Pandas and deliver a functional analytical interface in Streamlit. It brings collection, filters, visualization and export together in a practical tool.",
  },
};

const PROJECTS_EN: Project[] = ORDERED_PROJECTS_PT.map((project) => ({
  ...project,
  ...PROJECT_TRANSLATIONS_EN[project.id],
}));

const EXPERIENCES_EN: Experience[] = [
  {
    ...EXPERIENCES_PT[0],
    role: "Full Stack Developer",
    employmentType: "Full-time",
    period: "May 2024 - present",
    location: "Remote",
    description: [
      "Software company that develops systems, platforms and automations for companies in different segments.",
      "Full stack developer who became the team problem solver. I joined an 8-person team, reporting to the project manager and CTO. In practice, I became a reference for solving problems beyond the strict technical scope: I worked in development, AI automation, sales and client prospecting, always with autonomy. I delivered code, created automations for the commercial team, sold software and managed servers.",
    ],
    highlights: [
      "Built frontend with Angular and backend with Next.js and GraphQL. Delivered Moontech institutional website and worked on Apolo, an ISO 9001 quality monitoring system for industry.",
      "Built AI automations integrated with the CRM (HubSpot) to qualify leads, generate automatic proposals, answer customers and support post-sales.",
      "Worked on active and passive client prospecting, qualified leads and scheduled meetings that resulted in software sales.",
      "Managed own servers with Docker and AWS. Deployment, maintenance and automations running in production.",
      "Used Python and Streamlit to turn internal data into visualizations that supported team decisions.",
      "Participated directly in the company technical and commercial decisions, with frequent contact with the CTO.",
    ],
    logoAlt: "Moontech logo",
  },
  {
    ...EXPERIENCES_PT[1],
    role: "Full Stack Developer | Process Automation",
    employmentType: "Full-time",
    period: "Apr 2020 - Feb 2022 · 1 yr 11 mos",
    location: "Itajuba, Minas Gerais, Brazil · On-site",
    description: [
      "Digitization and automation of administrative, commercial and operational processes, focused on reducing manual work, organizing data and improving company efficiency.",
    ],
    highlights: [
      "Developed automations with Python, JavaScript, Google Sheets, APIs and integrations between digital tools.",
      "Created internal systems for finance, inventory, operations and management support.",
      "Automated manual tasks, social media and commercial flows with generative AI.",
      "Built a WhatsApp bot integrated with OpenClaw for service and internal processes.",
    ],
    skills:
      "Python, JavaScript, Automation, Generative AI, APIs, Google Sheets, WhatsApp Bot, Internal Systems and Operational Data.",
    logoAlt: "Pro-Saude Materiais Odontomedicos logo",
  },
  {
    ...EXPERIENCES_PT[2],
    company: "(Junior Enterprise) byron.solutions",
    role: "Full Stack Developer",
    employmentType: "Full-time",
    period: "Apr 2020 - Nov 2021 · 1 yr 8 mos",
    location: "Itajuba, Minas Gerais, Brazil · Remote",
    description: [
      "Junior software house focused on developing websites, web applications and digital solutions for companies.",
    ],
    highlights: [
      "Developed websites, landing pages, web systems, backend, CRUD logic and REST API integrations.",
      "Version control with Git/GitHub, requirements discovery, backlog organization in Trello and prototyping in Figma.",
      "Communication between clients and developers to turn business needs into technical deliveries.",
      "Experience with Product Owner work, project management, UX and consultative digital solution sales.",
    ],
    skills:
      "Full Stack, REST APIs, Git/GitHub, Product, Project Management, Figma, UX and Digital Solutions.",
    logoAlt: "byron.solutions logo",
  },
  {
    ...EXPERIENCES_PT[3],
    role: "Volunteer Teacher",
    employmentType: "Full-time",
    period: "Mar 2019 - Feb 2021 · 2 yrs",
    location: "Itajuba, Minas Gerais, Brazil",
    description: [
      "CAAI is an assistance course with the mission of transforming lives through education.",
      "I taught Text Interpretation in this college entrance preparation course, with an average of 180 students around 18 years old.",
    ],
    logoAlt: "CAAI logo",
  },
];

const EDUCATION_EN: EducationContent = {
  degree: "Bachelor of Computer Science",
  institution: "Federal University of Itajuba (UNIFEI)",
  period: "2020 to 2025",
  description:
    "Complete academic foundation in computing fundamentals, software engineering, algorithms, databases, networks and artificial intelligence.",
  achievements: [
    "Practical projects with multidisciplinary teams",
    "Final thesis in full stack development",
    "Active participation in laboratories and academic initiatives",
  ],
};

const LINKEDIN_EXPERIENCES_PT: Experience[] = [
  {
    role: "Desenvolvedor Full Stack | IA Aplicada, RAG e LLMs",
    company: "Moontech",
    employmentType: "Tempo integral",
    period: "mai de 2024 - o momento · 2 anos 2 meses",
    location: "Remoto · Remoto",
    isCurrentRole: true,
    description: [
      "Desenvolvi automações inteligentes com LLMs integradas ao HubSpot, apoiando qualificação de leads, fluxos comerciais, suporte, automação de tarefas e economia de horas semanais.",
      "Construí soluções full stack em produção com Angular, Next.js, GraphQL, Python, PostgreSQL, Docker e AWS, conectando engenharia, produto e operação.",
      "Criei dashboards analíticos com Python e Streamlit para centralizar dados operacionais, melhorar a visualização das informações e apoiar decisões orientadas por dados.",
      "Atuei com IA Aplicada, IA Generativa, RAG, LangChain, LangGraph, PostgreSQL/pgvector, OpenAI, Claude e Gemini em fluxos reais de automação e recuperação de informação.",
      "Desenvolvi sistemas com IA, agentes, integrações com APIs e ferramentas internas focadas em produtividade, automação de processos e impacto no negócio.",
    ],
    highlights: [
      "Automação com LLMs conectada a CRM, suporte e operação comercial.",
      "Soluções full stack em produção com Angular, Next.js, GraphQL, Python e PostgreSQL.",
      "Aplicações reais com RAG, LangChain, LangGraph, pgvector, OpenAI, Claude e Gemini.",
    ],
    techTags: [
      "Python",
      "RAG",
      "LLMs",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Claude",
      "Gemini",
      "FastAPI",
      "Angular",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "AWS",
      "Streamlit",
      "HubSpot",
    ],
    logoImage: "/images/experiences/moontech.jpeg",
    logoAlt: "Logo da Moontech",
  },
  {
    role: "Desenvolvedor Full Stack | Automação de Processos e IA Generativa",
    company: "Pró-Saúde Materiais Odontomédicos",
    employmentType: "Tempo integral",
    period: "abr de 2020 - fev de 2023 · 2 anos 11 meses",
    location: "Itajubá, MG · No local",
    description: [
      "Automatizei rotinas administrativas, financeiras, comerciais e operacionais, reduzindo tarefas manuais e aumentando a organização interna do negócio.",
      "Desenvolvi sistemas e controles internos para estoque, financeiro, operação e processos comerciais com Python, JavaScript, Google Sheets, integrações com APIs e lógica CRUD.",
      "Criei automações com IA Generativa, APIs e bot para WhatsApp, apoiando comunicação, atendimento, presença digital e rotinas operacionais.",
      "Implementei fluxos para organizar informações, centralizar dados e tornar processos internos mais rápidos, rastreáveis e menos dependentes de controles manuais.",
      "Atuei com mentalidade de dono, identificando dores reais da operação e transformando demandas do dia a dia em soluções digitais simples, úteis e escaláveis.",
    ],
    highlights: [
      "Automação de processos administrativos, comerciais e operacionais.",
      "Controles internos com Python, JavaScript, Google Sheets, APIs e CRUD.",
      "Uso prático de IA Generativa e WhatsApp Bot para atendimento e operação.",
    ],
    techTags: [
      "Python",
      "JavaScript",
      "Google Sheets",
      "APIs",
      "Automação de processos",
      "IA Generativa",
      "WhatsApp Bot",
      "CRUD",
      "Integrações",
      "Dados operacionais",
    ],
    logoImage: "/images/experiences/prosaude.jpg",
    logoAlt: "Logo da Pró-Saúde Materiais Odontomédicos",
  },
  {
    role: "Desenvolvedor Full Stack | Automação, Produto e APIs",
    company: "(Empresa Júnior) byron.solutions",
    employmentType: "Tempo integral",
    period: "abr de 2020 - nov de 2021 · 1 ano 8 meses",
    location: "Itajubá, MG · Remoto",
    description: [
      "Atuei em projetos reais para clientes, desenvolvendo sites, landing pages, sistemas web, automações e soluções digitais com foco em usabilidade, conversão e valor de negócio.",
      "Contribuí para definição de escopo, organização de backlog, protótipos e entregas técnicas, conectando necessidades de negócio com desenvolvimento de software.",
      "Apoiei a comunicação entre clientes e equipe técnica, melhorando o entendimento de requisitos, prioridades, prazos e validação das soluções entregues.",
      "Desenvolvi funcionalidades backend, integrações REST, lógica CRUD, interfaces responsivas e fluxos digitais para clientes de diferentes segmentos.",
      "Consolidei uma base forte em engenharia de software, comunicação com stakeholders, gestão de projetos e desenvolvimento full stack que hoje aplico em projetos com IA, RAG, LLMs e automações inteligentes.",
    ],
    highlights: [
      "Projetos para clientes com foco em produto, UX/UI, automação e entrega técnica.",
      "Integrações REST, backend, CRUD e interfaces responsivas.",
      "Base prática em escopo, backlog, prototipação, comunicação e gestão de projetos.",
    ],
    techTags: [
      "JavaScript",
      "Node.js",
      "APIs REST",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Trello",
      "Figma",
      "UX/UI",
      "Automação",
      "Produto digital",
    ],
    logoImage: "/images/experiences/byron.jpeg",
    logoAlt: "Logo da byron.solutions",
  },
  {
    role: "Professor Voluntário de Tecnologia e Computação",
    company: "CAAI - Curso Assistencial Amigos de Itajubá",
    employmentType: "Voluntário",
    period: "2019 - fev de 2021 · 2 anos",
    location: "Itajubá, MG",
    description: [
      "Atuei como professor voluntário, apoiando estudantes em tecnologia, raciocínio lógico, computação e fundamentos práticos de programação.",
      "Transformei temas técnicos em explicações simples, exercícios guiados e atividades acessíveis para diferentes níveis de conhecimento.",
      "Essa experiência fortaleceu minha comunicação, didática e capacidade de traduzir tecnologia em aprendizado útil e aplicável.",
    ],
    highlights: [
      "Ensino voluntário de tecnologia com foco em clareza, prática e inclusão.",
      "Experiência em comunicação técnica, didática e apoio a estudantes.",
    ],
    techTags: ["Ensino", "Tecnologia", "Computação", "Comunicação", "Didática"],
    logoImage: "/images/experiences/caai.jpeg",
    logoAlt: "Logo do CAAI",
  },
];

const LINKEDIN_EDUCATION_PT: EducationContent = {
  degree: "Bacharelado em Ciência da Computação",
  institution: "Universidade Federal de Itajubá",
  period: "2020 - dez de 2025",
  description:
    "Base sólida em engenharia de software, algoritmos, estruturas de dados, bancos de dados, inteligência artificial, redes de computadores e arquitetura de sistemas. Durante a graduação, desenvolvi projetos acadêmicos e práticos com foco em desenvolvimento full stack, IA aplicada, automação, análise de dados, dashboards e sistemas inteligentes.\n\nTambém atuei como professor voluntário no CAAI e participei de empresa júnior, aplicando tecnologia para resolver problemas reais e conectando visão técnica, produto e necessidades de negócio. Essa trajetória fortaleceu minha capacidade de projetar sistemas escaláveis, entender requisitos complexos e construir soluções orientadas por IA, com foco em LLMs, arquiteturas RAG, IA Generativa, automações inteligentes e boas práticas modernas de engenharia de software.",
  achievements: [
    "CAAI / Professor Voluntário",
    "Empresa Júnior",
    "Projetos Full Stack",
    "IA Aplicada, RAG, LLMs e Automação",
    "Análise de Dados e Sistemas Inteligentes",
    "Desenvolvimento Web",
  ],
};

const LINKEDIN_EXPERIENCES_EN: Experience[] = [
  {
    role: "Full Stack Developer | Applied AI, RAG and LLMs",
    company: "Moontech",
    employmentType: "Full-time",
    period: "May 2024 - Present · 2 yrs 2 mos",
    location: "Remote · Remote",
    isCurrentRole: true,
    description: [
      "Built intelligent automations with LLMs integrated into HubSpot, supporting lead qualification, commercial flows, support, task automation and weekly time savings.",
      "Developed production full stack solutions with Angular, Next.js, GraphQL, Python, PostgreSQL, Docker and AWS, connecting engineering, product and operations.",
      "Created analytical dashboards with Python and Streamlit to centralize operational data, improve visibility and support data-driven decisions.",
      "Worked with Applied AI, Generative AI, RAG, LangChain, LangGraph, PostgreSQL/pgvector, OpenAI, Claude and Gemini in real automation and information retrieval flows.",
      "Developed AI systems, agents, API integrations and internal tools focused on productivity, process automation and business impact.",
    ],
    highlights: [
      "LLM automation connected to CRM, support and commercial operations.",
      "Production full stack solutions with Angular, Next.js, GraphQL, Python and PostgreSQL.",
      "Real applications using RAG, LangChain, LangGraph, pgvector, OpenAI, Claude and Gemini.",
    ],
    techTags: [
      "Python",
      "RAG",
      "LLMs",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Claude",
      "Gemini",
      "FastAPI",
      "Angular",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "AWS",
      "Streamlit",
      "HubSpot",
    ],
    logoImage: "/images/experiences/moontech.jpeg",
    logoAlt: "Moontech logo",
  },
  {
    role: "Full Stack Developer | Process Automation and Generative AI",
    company: "Pró-Saúde Materiais Odontomédicos",
    employmentType: "Full-time",
    period: "Apr 2020 - Feb 2023 · 2 yrs 11 mos",
    location: "Itajubá, MG · On-site",
    description: [
      "Automated administrative, financial, commercial and operational routines, reducing manual work and improving internal organization.",
      "Developed internal systems and controls for inventory, finance, operations and commercial processes with Python, JavaScript, Google Sheets, API integrations and CRUD logic.",
      "Created automations with Generative AI, APIs and a WhatsApp bot, supporting communication, customer service, digital presence and operational routines.",
      "Implemented flows to organize information, centralize data and make internal processes faster, traceable and less dependent on manual controls.",
      "Worked with an owner mindset, identifying real operational problems and turning day-to-day needs into simple, useful and scalable digital solutions.",
    ],
    highlights: [
      "Automation of administrative, commercial and operational processes.",
      "Internal controls with Python, JavaScript, Google Sheets, APIs and CRUD.",
      "Practical use of Generative AI and WhatsApp Bot for service and operations.",
    ],
    techTags: [
      "Python",
      "JavaScript",
      "Google Sheets",
      "APIs",
      "Process automation",
      "Generative AI",
      "WhatsApp Bot",
      "CRUD",
      "Integrations",
      "Operational data",
    ],
    logoImage: "/images/experiences/prosaude.jpg",
    logoAlt: "Pró-Saúde Materiais Odontomédicos logo",
  },
  {
    role: "Full Stack Developer | Automation, Product and APIs",
    company: "(Junior Enterprise) byron.solutions",
    employmentType: "Full-time",
    period: "Apr 2020 - Nov 2021 · 1 yr 8 mos",
    location: "Itajubá, MG · Remote",
    description: [
      "Worked on real client projects, building websites, landing pages, web systems, automations and digital solutions focused on usability, conversion and business value.",
      "Contributed to scope definition, backlog organization, prototypes and technical deliveries, connecting business needs with software development.",
      "Supported communication between clients and the technical team, improving requirement clarity, priorities, deadlines and solution validation.",
      "Developed backend features, REST integrations, CRUD logic, responsive interfaces and digital flows for clients from different segments.",
      "Built a strong foundation in software engineering, stakeholder communication, project management and full stack development that I now apply to AI, RAG, LLMs and intelligent automation projects.",
    ],
    highlights: [
      "Client projects focused on product, UX/UI, automation and technical delivery.",
      "REST integrations, backend features, CRUD logic and responsive interfaces.",
      "Practical foundation in scope, backlog, prototyping, communication and project management.",
    ],
    techTags: [
      "JavaScript",
      "Node.js",
      "REST APIs",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Trello",
      "Figma",
      "UX/UI",
      "Automation",
      "Digital product",
    ],
    logoImage: "/images/experiences/byron.jpeg",
    logoAlt: "byron.solutions logo",
  },
  {
    role: "Volunteer Technology and Computing Teacher",
    company: "CAAI - Curso Assistencial Amigos de Itajubá",
    employmentType: "Volunteer",
    period: "2019 - Feb 2021 · 2 yrs",
    location: "Itajubá, MG",
    description: [
      "Worked as a volunteer teacher, supporting students in technology, logical reasoning, computing and practical programming fundamentals.",
      "Turned technical topics into simple explanations, guided exercises and accessible activities for different knowledge levels.",
      "This experience strengthened my communication, teaching and ability to translate technology into useful, applicable learning.",
    ],
    highlights: [
      "Volunteer technology teaching focused on clarity, practice and inclusion.",
      "Experience in technical communication, teaching and student support.",
    ],
    techTags: ["Teaching", "Technology", "Computing", "Communication", "Education"],
    logoImage: "/images/experiences/caai.jpeg",
    logoAlt: "CAAI logo",
  },
];

const LINKEDIN_EDUCATION_EN: EducationContent = {
  degree: "Bachelor's Degree in Computer Science",
  institution: "Federal University of Itajubá",
  period: "2020 - Dec 2025",
  description:
    "Solid foundation in software engineering, algorithms, data structures, databases, artificial intelligence, computer networks and systems architecture. During the degree, I developed academic and practical projects focused on full stack development, applied AI, automation, data analysis, dashboards and intelligent systems.\n\nI also worked as a volunteer teacher at CAAI and participated in a junior enterprise, applying technology to solve real problems and connecting technical vision, product thinking and business needs. This path strengthened my ability to design scalable systems, understand complex requirements and build AI-oriented solutions, with a focus on LLMs, RAG architectures, Generative AI, intelligent automations and modern software engineering practices.",
  achievements: [
    "CAAI / Volunteer Teacher",
    "Junior Enterprise",
    "Full Stack Projects",
    "Applied AI, RAG, LLMs and Automation",
    "Data Analysis and Intelligent Systems",
    "Web Development",
  ],
};

const NAV_LINKS_EN: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "/projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const UI_PT: PortfolioUiContent = {
  metadata: {
    title: "Mateus Bonette | Engenheiro de IA Aplicada & Full Stack",
    description:
      "Engenheiro de IA Aplicada e Full Stack. Python, RAG, LLMs, LangChain e Angular. Crio sistemas com IA Generativa, agentes autônomos e automações em produção. Veja projetos e cases.",
    ogTitle: "Mateus Bonette — Engenheiro de IA Aplicada | RAG, LLMs & LangChain",
    imageAlt: "Mateus Bonette — Engenheiro de IA Aplicada e Desenvolvedor Full Stack",
  },
  language: {
    label: "Idioma",
    switchToPortuguese: "Mudar para português",
    switchToEnglish: "Mudar para inglês",
  },
  theme: {
    enableLight: "Ativar modo claro",
    enableDark: "Ativar modo escuro",
    lightTitle: "Modo claro",
    darkTitle: "Modo escuro",
  },
  common: {
    readMore: "Ver mais",
    readLess: "Ver menos",
    caseLabel: "Case",
    featuredProject: "Projeto em destaque",
    context: "Contexto",
    process: "Processo",
    result: "Resultado",
    viewDetails: "Ver detalhes",
    projectTechAria: (title) => `Tecnologias do projeto ${title}`,
    projectSummaryAria: (title) => `Resumo do case ${title}`,
    accessProjectAria: (title) => `Acessar projeto ${title}`,
  },
  hero: {
    downloadResume: "Baixar currículo",
    contact: "Entrar em contato",
    scrollDown: "Role para baixo",
    scrollDownAria: "Rolar para baixo",
  },
  about: {
    eyebrow: "Sobre mim",
    titleStart: "Engenharia de IA, Produto e ",
    titleAccent: "Automação",
    titleEnd: ".",
    graduationLabel: "Formação",
    graduationCaption: "Ciência da Computação · UNIFEI · 2025",
    graduationImageAlt: "Mateus Bonette na cerimônia de formatura da UNIFEI",
    pillars: [
      {
        title: "Base Acadêmica",
        text: "Formado em Ciência da Computação pela UNIFEI, com base sólida para aprender, construir e evoluir com consistência.",
      },
      {
        title: "Engenharia de IA",
        text: "Atuação com IA Aplicada, LLMs, RAG, agentes inteligentes, prompt engineering, automações, integração com modelos e construção de sistemas que utilizam IA para resolver problemas reais.",
      },
      {
        title: "Produto e Negócio",
        text: "Experiência em traduzir dores de clientes em soluções digitais, conectando visão técnica, produto, UX, automação, dados e impacto operacional para empresas e usuários finais.",
      },
      {
        title: "Full Stack",
        text: "Interesse e foco na compreensão holística de produtos digitais, abrangendo design de interface, arquitetura de back-end, modelagem de dados, experiência do usuário e impacto nos negócios.",
      },
      {
        title: "Empreendedorismo",
        text: "Mentalidade de dono: análise criteriosa de problemas, oportunidades de mercado, custos de desenvolvimento, viabilidade de execução e retorno sobre o investimento antes de definir o direcionamento técnico.",
      },
      {
        title: "Comunicação Técnica",
        text: "Experiência como professor voluntário e atuação com clientes, facilitando a explicação de conceitos complexos, alinhamento entre áreas técnicas e não técnicas e tomada de decisão.",
      },
    ],
    paragraphs: [
      "Engenheiro de IA Aplicada e Desenvolvedor Full Stack com mais de 4 anos de experiência criando sistemas web, automações inteligentes e soluções orientadas por dados. Formado em Ciência da Computação pela UNIFEI, atuo na construção de aplicações com IA Generativa, LLMs, RAG, agentes de IA, dashboards, APIs e integrações voltadas para problemas reais de negócio.",
      "Minha experiência combina engenharia de software, arquitetura full stack, automação de processos e visão de produto. Desenvolvo soluções com Python, Angular, React, Node.js, FastAPI, PostgreSQL, Docker, AWS, LangChain, LangGraph e modelos como OpenAI, Claude, Gemini e LLMs aplicados a fluxos reais de trabalho.",
      "Além da base técnica, trago experiência em comunicação, ensino, vendas, marketing e atendimento a clientes. Essa combinação me ajuda a traduzir problemas complexos em soluções práticas, conectar tecnologia com resultado e construir produtos digitais com foco em eficiência, escalabilidade e impacto operacional.",
    ],
  },
  value: {
    eyebrow: "Metodologia de Trabalho",
    titleStart: "Resolvo Problemas, ",
    titleAccent: "Comunico Valor",
    titleEnd: " E Automatizo Rotinas.",
    intro:
      "Foco em integração com equipes de alto rendimento para entregas de valor: produção orientada a resultados, comunicação transparente, visão estratégica de negócios e conversão de tarefas manuais em fluxos inteligentes.",
    previousAria: "Ver card anterior",
    nextAria: "Ver próximo card",
    points: [
      "Resolver Problemas Reais",
      "Vender A Solução Certa",
      "Automatizar Com IA",
      "Entregar Com Clareza",
    ],
    cards: [
      {
        title: "Produtividade Com Direção",
        text: "Capacidade de estruturar problemas complexos e convertê-los em soluções de software prontas para produção. Ampla experiência no desenvolvimento de sistemas de agendamento, plataformas de ensino com integração de pagamentos e fluxos completos de e-commerce.",
        tag: "Produtivo",
      },
      {
        title: "Comunicação Comercial",
        text: "Habilidade de comunicação técnica para tomadores de decisão. Experiência de atuação em vendas, marketing e tráfego pago, comercializando sistemas e plataformas digitais para clínicas, imobiliárias e e-commerce.",
        tag: "Comercial",
      },
      {
        title: "Cabeça De Dono",
        text: "Postura proativa e focada na resolução de problemas em vez de mera execução de tarefas. Compreensão aprofundada das dores dos usuários, mensuração de impacto e busca contínua por soluções eficientes e de alto valor agregado.",
        tag: "Dono",
      },
      {
        title: "Automação No Dia A Dia",
        text: "Automação de processos repetitivos, desenvolvimento de APIs, web scraping, robôs e agentes de IA, com bots implantados em produção em servidores próprios.",
        tag: "Automação",
      },
    ],
    desktopSummary:
      "Foco em identificar necessidades reais, compreender a viabilidade técnica e comercial, propor soluções objetivas e empregar IA e automações para otimizar fluxos de trabalho.",
    mobileSummary:
      "Em resumo, transformo dor real em solução útil com clareza e automação.",
    readSummary: "Ler resumo",
    hideSummary: "Esconder resumo",
    mobileSummaryExpanded:
      "Foco no desenvolvimento de soluções úteis para problemas reais, aliando clareza comercial e automação inteligente para eliminação de tarefas repetitivas.",
  },
  skills: {
    eyebrow: "Habilidades Técnicas",
    titleStart: "Tecnologias Que ",
    titleAccent: "Uso Para Entregar",
    titleEnd: ".",
    description:
      "Do front ao banco, da automação ao modelo de IA. Não coleciono tecnologias, uso o que resolve o problema certo na hora certa.",
    filterLabel: "Filtrar stack",
    swipeLabel: "Deslize",
    areasLabel: "áreas",
    skillsLabel: "habilidades",
    itemsLabel: "itens",
    masteryLabel: "domínio",
    groups: [
      {
        title: "IA, Automação e Dev Tools",
        summary:
          "Uso ferramentas modernas para acelerar desenvolvimento, revisar código e automatizar tarefas.",
        items: [
          {
            name: "Docker",
            description:
              "Ambientes isolados para rodar aplicações com mais previsibilidade.",
          },
          {
            name: "Git",
            description: "Versionamento, histórico e organização do trabalho.",
          },
          {
            name: "GitHub",
            description:
              "Repositórios, colaboração, issues e entrega de código.",
          },
          {
            name: "GitLab",
            description:
              "Fluxo de repositórios, pipelines e organização de projeto.",
          },
          {
            name: "Automação com IA",
            description:
              "Redução de trabalho repetitivo usando scripts, agentes e integrações.",
          },
        ],
      },
      {
        title: "Backend, APIs e Bancos",
        summary:
          "Construção de serviços, integração com dados e organização de regras de negócio.",
        items: [
          {
            name: "Node.js",
            description: "APIs, serviços e integrações do lado do servidor.",
          },
          {
            name: "Express",
            description: "Rotas, middlewares e APIs simples de manter.",
          },
          {
            name: "Python",
            description:
              "Backend, automação, dados e scripts de produtividade.",
          },
          {
            name: "Django",
            description: "Python para aplicações web com estrutura completa.",
          },
          {
            name: "PostgreSQL",
            description: "Modelagem, consultas e persistência relacional.",
          },
          {
            name: "MySQL",
            description:
              "Banco relacional para sistemas web e aplicações internas.",
          },
          {
            name: "APIs públicas",
            description:
              "Consumo, tratamento de retorno e integração entre sistemas.",
          },
          {
            name: "Modelagem de dados",
            description:
              "Organização de entidades, relações e fluxo de informação.",
          },
          {
            name: "Web scraping",
            description: "Coleta, limpeza e estruturação de dados da web.",
          },
        ],
      },
      {
        title: "Dados e Visualização",
        summary:
          "Transformo dados em análise, dashboards simples e visualizações úteis para decisão.",
        items: [
          {
            name: "Python para dados",
            description: "Limpeza, análise e automações com dados reais.",
          },
          {
            name: "Pandas",
            description:
              "Tratamento de tabelas, filtros, agrupamentos e indicadores.",
          },
          {
            name: "Streamlit",
            description: "Apps de dados, protótipos e painéis interativos.",
          },
          {
            name: "Visualização com Streamlit",
            description: "Interfaces para explorar dados sem complicar o uso.",
          },
          {
            name: "Matplotlib",
            description:
              "Gráficos para análise exploratória e relatórios técnicos.",
          },
          {
            name: "Seaborn",
            description: "Visualizações estatísticas com leitura mais clara.",
          },
        ],
      },
      {
        title: "Frontend e Mobile",
        summary:
          "Interfaces bem acabadas, responsivas e com atenção forte a experiência visual.",
        items: [
          {
            name: "React",
            description: "Componentes, estados, hooks e interfaces modernas.",
          },
          {
            name: "TypeScript",
            description:
              "Tipagem para reduzir erro e deixar o código mais claro.",
          },
          {
            name: "JavaScript",
            description: "Base sólida para front, backend e automações.",
          },
          {
            name: "HTML",
            description: "Estrutura semântica, acessível e bem organizada.",
          },
          {
            name: "CSS",
            description: "Layouts responsivos, animações e acabamento visual.",
          },
          {
            name: "Angular",
            description:
              "Aplicações front com estrutura e componentes reutilizáveis.",
          },
          {
            name: "Flutter",
            description:
              "Desenvolvimento mobile com telas nativas e consistentes.",
          },
          {
            name: "Dart",
            description: "Base para criar aplicações mobile com Flutter.",
          },
        ],
      },
      {
        title: "Design, Produto e Conteúdo",
        summary:
          "Senso visual apurado para traduzir ideias e requisitos de negócio em interfaces elegantes, apresentações claras e materiais de alta qualidade.",
        items: [
          {
            name: "Figma",
            description:
              "Wireframes, layout visual, protótipos e organização de interface.",
          },
          {
            name: "Design UX/UI",
            description:
              "Fluxos, hierarquia visual, legibilidade e experiência de uso.",
          },
          {
            name: "Canva",
            description:
              "Peças visuais rápidas para comunicação e apresentação.",
          },
          {
            name: "OBS Studio",
            description: "Gravação, transmissão e produção de conteúdo visual.",
          },
          {
            name: "Google Planilhas / Excel",
            description:
              "Organização de dados, fórmulas e controles operacionais.",
          },
          {
            name: "Google Docs / Word",
            description:
              "Documentação, propostas, textos e estruturação de informação.",
          },
          {
            name: "Google Apresentações",
            description:
              "Slides claros para vender ideias e explicar soluções.",
          },
        ],
      },
      {
        title: "Gestão, Jogos e Processo",
        summary:
          "Também entendo ferramentas de organização, método de trabalho e criação de experiências interativas.",
        items: [
          {
            name: "Trello",
            description:
              "Organização de tarefas, etapas, prioridade e acompanhamento.",
          },
          {
            name: "Scrum",
            description:
              "Ritmo de entrega, cerimônias, backlog e colaboração em time.",
          },
          {
            name: "Unity",
            description:
              "Base para criação de games, cenas, lógica e interação.",
          },
          {
            name: "Criação de games",
            description:
              "Noções de gameplay, prototipação e experiência interativa.",
          },
        ],
      },
    ],
  },
  experience: {
    aria: "Linha do tempo de experiências profissionais",
    eyebrow: "Experiências",
    titleStart: "Experiências Que ",
    titleAccent: "Me Formaram",
    titleEnd: ".",
    description:
      "Experiências que conectam desenvolvimento full stack, IA aplicada, automação, dados, produto e negócio. Cada etapa contribuiu para formar uma visão prática sobre como transformar processos manuais, demandas complexas e problemas reais em sistemas, integrações, dashboards, automações e soluções digitais com impacto.",
    availabilityAria: "Disponibilidade profissional",
    timelineAria: "Trajetória profissional",
    current: "Atual",
    start: "Início",
    latest: "Mais recente",
    step: "Etapa",
    moontechLetterPt: "CARTA DE RECOMENDAÇÃO PT/BR",
    moontechLetterEn: "CARTA DE RECOMENDAÇÃO EM INGLÊS",
    moontechLetterPtTitle: "Baixar carta de recomendação em português (PDF)",
    moontechLetterEnTitle: "Baixar carta de recomendação em inglês (PDF)",
  },
  projects: {
    eyebrow: "Projetos",
    titleStart: "Projetos de ",
    titleAccent: "IA e Full Stack",
    titleEnd: " em Produção",
    description:
      "Portfólio com cases reais já entregues: agentes com LangChain, RAG e LLMs, além de sistemas web, dados, e-commerce e automações em produção. Cada projeto mostra problema, arquitetura, stack e impacto — com destaque para minha especialidade em Engenharia de IA aplicada.",
    featuredCases: "Cases em destaque",
    featuredCasesDescription:
      "Cada capa abre uma página própria com detalhes do projeto.",
    carouselAria: "Carrossel horizontal de projetos",
    viewAll: "Ver todos os projetos",
    allProjects: "Todos os projetos",
    backToPortfolio: "Voltar para o portfólio",
    backToProjects: "Voltar para projetos",
    notFoundEyebrow: "Projeto não encontrado",
    notFoundTitle: "Esse projeto ainda não existe.",
    projectEyebrow: "Projeto",
    aboutProject: "Sobre o projeto",
    technicalHighlights: "Diferenciais técnicos",
    technologiesUsed: "Tecnologias utilizadas",
    forRecruiters: "Impacto e Resolução de Problema",
    viewProject: "Ver projeto",
    repository: "Repositório",
    underConstruction: "Conteúdo em construção",
    reservedSpaceTitle: "Espaço reservado para o case completo.",
    reservedSpaceText:
      "Aqui pode entrar problema, solução, imagens, resultado, links, aprendizados e qualquer material específico desse projeto.",
    openRepository: "Abrir repositório",
    placeholderCover:
      "Case em preparação para mostrar problema, solução, processo e resultado.",
    placeholderInside:
      "Página reservada para o case completo, com contexto, decisões técnicas e resultado final.",
    console: {
      windowTitle: "mateus@ai-engineer:~/projetos",
      listAria: "Lista de projetos",
      runPrefix: "run",
      hint: "// selecione um projeto para rodar a inferência",
      statusReady: "pronto",
      statusModel: "modelo: mateus-ai · temp: 0.7",
      statusLoaded: (count: number) => `${count} cases carregados`,
      openCase: "Abrir Case Completo",
      outputAria: "Detalhes do projeto selecionado",
      promptAria: "Prompt para filtrar projetos",
      promptPlaceholder: "Pergunte sobre um projeto… ex.: agentes de IA",
      promptSend: "Enviar prompt",
      promptEmpty: (query: string) => `nenhum case encontrado para "${query}"`,
      promptMatches: (count: number) =>
        count === 1 ? "1 case no contexto" : `${count} cases no contexto`,
      suggestionsLabel: "Sugestões de prompt",
      suggestions: [
        "agentes de IA",
        "RAG & LLMs",
        "automação",
        "Amazon SP-API",
        "Python & dados",
        "Machine Learning",
        "Open Finance",
        "e-commerce",
        "React & PostgreSQL",
        "WhatsApp Bot",
        "Playwright",
        "Docker & APIs",
      ],
    },
  },
  gallery: {
    carouselRole: "carrossel",
    imagesAria: (title) => `Imagens do projeto ${title}`,
    videoAria: (title) => `Vídeo do projeto ${title}`,
    imageAlt: (title, index, total) => `${title} - imagem ${index} de ${total}`,
    previous: "Imagem anterior",
    next: "Próxima imagem",
    selectImage: "Selecionar imagem",
    goToImage: (index) => `Ir para imagem ${index}`,
    videoFallback: "Seu navegador não suporta reprodução de vídeo HTML5.",
  },
  education: {
    eyebrow: "Formação",
    titleStart: "Bacharelado em ",
    titleAccent: "Ciência da Computação",
    titleEnd: ".",
    description:
      "Formação concluída na Universidade Federal de Itajubá (UNIFEI), uma das principais instituições de engenharia e tecnologia do país.",
    mainImageAlt: "Mateus Bonette na cerimônia de formatura da UNIFEI",
    ceremony: "Cerimônia de Colação de Grau",
    graduated: "Diplomado",
    classImageAlt: "Turma de formandos da UNIFEI",
    classYear: "Turma 2025",
    degreeShort: "Ciência da Computação",
    numbers: "Em números",
    yearsFormation: "anos de formação",
    linesWritten: "linhas escritas",
    location: "Itajubá, MG",
    diplomaTitle: "Ver Diploma - Bacharelado em Ciência da Computação · UNIFEI",
    viewDiploma: "Ver Diploma",
  },
  contact: {
    eyebrow: "Vamos conversar",
    title: "Tem uma Vaga ou Projeto em Mente?",
    paragraphs: [
      "Estou disponível para oportunidades fixas, posições full-time, freelances e projetos colaborativos.",
      "Se você procura alguém para somar ao time ou desenvolver uma solução digital bem construída, vamos conversar.",
    ],
    copyEmailAria: "Copiar e-mail",
    emailCopiedAria: "E-mail copiado",
    emailCopiedLabel: "Email Copiado",
    responseLabel: "Resposta",
    responseValue: "Em até 24 horas",
    locationLabel: "Localização",
    locationValue:
      "Brasil, Itajubá - MG, Remoto, Híbrido, Presencial, Mundo Todo",
  },
  footer: {
    backToTop: "Voltar ao topo",
    top: "Topo",
    text: "Portfólio desenvolvido para apresentação profissional e conquistas na carreira de desenvolvimento.",
  },
  linksPage: {
    backToPortfolio: "Voltar ao portfólio",
    whatsappCta: {
      label: "Quer impulsionar seu negócio? Clique aqui!",
      message: "Quero impulsionar o meu negócio! Como é que eu faço?",
      aria: "Falar no WhatsApp sobre impulsionar seu negócio",
    },
    links: [
      {
        label: "Portfólio",
        description: "Visualização de projetos e experiências",
        kind: "portfolio",
      },
      {
        label: "LinkedIn",
        description: "Conexão profissional via rede social",
        kind: "linkedin",
      },
      {
        label: "Currículo",
        description: "Download do currículo profissional em formato PDF",
        kind: "resume",
      },
      {
        label: "GitHub",
        description: "Acesso a repositórios e códigos de projetos públicos",
        kind: "github",
      },
    ],
  },
  floatingWhatsApp: {
    aria: "Abrir conversa no WhatsApp",
  },
};

const UI_EN: PortfolioUiContent = {
  ...UI_PT,
  metadata: {
    title: "Mateus Bonette | AI Engineer & Full Stack",
    description:
      "Applied AI Engineer and Full Stack developer. Python, RAG, LLMs, LangChain and Angular. Building Generative AI systems, autonomous agents and production automations. Explore projects and case studies.",
    ogTitle: "Mateus Bonette — AI Engineer | RAG, LLMs & Generative AI",
    imageAlt: "Mateus Bonette — Applied AI Engineer and Full Stack Developer",
  },
  language: {
    label: "Language",
    switchToPortuguese: "Switch to Portuguese",
    switchToEnglish: "Switch to English",
  },
  theme: {
    enableLight: "Enable light mode",
    enableDark: "Enable dark mode",
    lightTitle: "Light mode",
    darkTitle: "Dark mode",
  },
  common: {
    readMore: "Show more",
    readLess: "Show less",
    caseLabel: "Case",
    featuredProject: "Featured project",
    context: "Context",
    process: "Process",
    result: "Result",
    viewDetails: "View details",
    projectTechAria: (title) => `Technologies used in ${title}`,
    projectSummaryAria: (title) => `Case summary for ${title}`,
    accessProjectAria: (title) => `Open project ${title}`,
  },
  hero: {
    downloadResume: "Download resume",
    contact: "Contact me",
    scrollDown: "Scroll down",
    scrollDownAria: "Scroll down",
  },
  about: {
    eyebrow: "About me",
    titleStart: "Technology, Business and ",
    titleAccent: "Growth",
    titleEnd: ".",
    graduationLabel: "Education",
    graduationCaption: "Computer Science · UNIFEI · 2025",
    graduationImageAlt: "Mateus Bonette at the UNIFEI graduation ceremony",
    pillars: [
      {
        title: "Academic Foundation",
        text: "Computer Science graduate from UNIFEI, with a solid foundation to learn, build and evolve consistently.",
      },
      {
        title: "AI Direction",
        text: "I work with applied artificial intelligence, LLM agents, intelligent automations and computer vision.",
      },
      {
        title: "Commercial Vision",
        text: "My sales and marketing experience helps me think about technology connected to customers, product and results.",
      },
      {
        title: "Full Stack",
        text: "I like understanding the whole product: interface, backend, data, user, process and final impact.",
      },
      {
        title: "Entrepreneurial Mindset",
        text: "I think like an owner: problem, opportunity, cost, execution and return come before choosing a path.",
      },
      {
        title: "Practical Communication",
        text: "My experience as a teacher helps me explain hard ideas simply and align different people.",
      },
    ],
    paragraphs: [
      "I am a full stack developer and AI Engineer with 3 and a half years of experience, graduated in Computer Science from UNIFEI (Federal University of Itajuba). I build web systems, mobile apps and artificial intelligence products in practice, including LLM agents, intelligent automations and computer vision applied to industry.",
      "What makes me different is the path that brought me here. Before programming professionally, I worked for two years as a prep course teacher and also in the commercial side of software companies, with sales and marketing. I learned early how to explain hard things simply, listen to customers before proposing solutions and think product, not only code.",
      "Today I combine three things that rarely move together: technical command, business reading and owner mindset. I like hard problems, deliver with focus on results and think of every project as if it were my own.",
    ],
  },
  value: {
    eyebrow: "How I Work",
    titleStart: "I Solve Problems, ",
    titleAccent: "Communicate Value",
    titleEnd: " And Automate Routines.",
    intro:
      "I want to join a team to truly deliver: produce with focus, communicate clearly, think about the business side and turn manual work into intelligent process.",
    previousAria: "View previous card",
    nextAria: "View next card",
    points: [
      "Solve Real Problems",
      "Sell The Right Solution",
      "Automate With AI",
      "Deliver With Clarity",
    ],
    cards: [
      {
        title: "Productivity With Direction",
        text: "I take messy problems and turn them into delivery. I have already built scheduling systems, course platforms with payment integration and e-commerce from end to end.",
        tag: "Productive",
      },
      {
        title: "Commercial Communication",
        text: "I can explain technical ideas to decision makers. I have worked with sales, marketing and paid traffic, and sold systems and websites to clinics, real estate and e-commerce clients.",
        tag: "Commercial",
      },
      {
        title: "Owner Mindset",
        text: "I think like the owner of the problem, not just a task executor. I understand the pain, measure impact and seek the most useful solution for the client, team and business.",
        tag: "Owner",
      },
      {
        title: "Daily Automation",
        text: "When I see repetitive work, I automate it. I work with APIs, web scraping, bots and AI agents, and I have a bot running on my own production server.",
        tag: "Automation",
      },
    ],
    desktopSummary:
      "In short, I like taking a real pain, understanding the human and commercial side, creating a simple solution and using AI and automation to remove what consumes people time.",
    mobileSummary:
      "In short, I turn real pain into useful solutions with clarity and automation.",
    readSummary: "Read summary",
    hideSummary: "Hide summary",
    mobileSummaryExpanded:
      "I work to turn real problems into useful delivery, with commercial clarity and intelligent automation to reduce repetitive work.",
  },
  skills: {
    eyebrow: "Technical Skills",
    titleStart: "Technologies I ",
    titleAccent: "Use To Deliver",
    titleEnd: ".",
    description:
      "From frontend to database, from automation to AI models. I do not collect technologies; I use what solves the right problem at the right time.",
    filterLabel: "Filter stack",
    swipeLabel: "Swipe",
    areasLabel: "areas",
    skillsLabel: "skills",
    itemsLabel: "items",
    masteryLabel: "mastery",
    groups: [
      {
        title: "AI, Automation and Dev Tools",
        summary:
          "I use modern tools to accelerate development, review code and automate tasks.",
        items: [
          {
            name: "Docker",
            description:
              "Isolated environments to run applications with more predictability.",
          },
          {
            name: "Git",
            description: "Versioning, history and work organization.",
          },
          {
            name: "GitHub",
            description:
              "Repositories, collaboration, issues and code delivery.",
          },
          {
            name: "GitLab",
            description: "Repository flow, pipelines and project organization.",
          },
          {
            name: "AI automation",
            description:
              "Reducing repetitive work with scripts, agents and integrations.",
          },
        ],
      },
      {
        title: "Backend, APIs and Databases",
        summary: "Services, data integration and business-rule organization.",
        items: [
          {
            name: "Node.js",
            description: "Server-side APIs, services and integrations.",
          },
          {
            name: "Express",
            description:
              "Routes, middlewares and APIs that are simple to maintain.",
          },
          {
            name: "Python",
            description: "Backend, automation, data and productivity scripts.",
          },
          {
            name: "Django",
            description: "Python for complete web applications.",
          },
          {
            name: "PostgreSQL",
            description: "Relational modeling, queries and persistence.",
          },
          {
            name: "MySQL",
            description:
              "Relational database for web systems and internal applications.",
          },
          {
            name: "Public APIs",
            description:
              "Consuming, handling responses and integrating systems.",
          },
          {
            name: "Data modeling",
            description:
              "Organization of entities, relations and information flow.",
          },
          {
            name: "Web scraping",
            description: "Collecting, cleaning and structuring web data.",
          },
        ],
      },
      {
        title: "Data and Visualization",
        summary:
          "I turn data into analysis, simple dashboards and useful decision-making visuals.",
        items: [
          {
            name: "Python for data",
            description: "Cleaning, analysis and automations with real data.",
          },
          {
            name: "Pandas",
            description: "Table handling, filters, grouping and indicators.",
          },
          {
            name: "Streamlit",
            description: "Data apps, prototypes and interactive dashboards.",
          },
          {
            name: "Streamlit visualization",
            description:
              "Interfaces to explore data without complicating usage.",
          },
          {
            name: "Matplotlib",
            description:
              "Charts for exploratory analysis and technical reports.",
          },
          {
            name: "Seaborn",
            description: "Statistical visualizations with clearer reading.",
          },
        ],
      },
      {
        title: "Frontend and Mobile",
        summary:
          "Polished, responsive interfaces with strong attention to visual experience.",
        items: [
          {
            name: "React",
            description: "Components, state, hooks and modern interfaces.",
          },
          {
            name: "TypeScript",
            description: "Typing to reduce errors and make code clearer.",
          },
          {
            name: "JavaScript",
            description:
              "Solid foundation for frontend, backend and automations.",
          },
          {
            name: "HTML",
            description: "Semantic, accessible and well-organized structure.",
          },
          {
            name: "CSS",
            description: "Responsive layouts, animations and visual finish.",
          },
          {
            name: "Angular",
            description:
              "Frontend applications with structure and reusable components.",
          },
          {
            name: "Flutter",
            description:
              "Mobile development with native and consistent screens.",
          },
          {
            name: "Dart",
            description:
              "Foundation for building mobile applications with Flutter.",
          },
        ],
      },
      {
        title: "Design, Product and Content",
        summary:
          "I have visual judgment and can turn ideas into screens, presentations and clear material.",
        items: [
          {
            name: "Figma",
            description:
              "Wireframes, visual layout, prototypes and interface organization.",
          },
          {
            name: "UX/UI Design",
            description:
              "Flows, visual hierarchy, readability and user experience.",
          },
          {
            name: "Canva",
            description:
              "Fast visual assets for communication and presentation.",
          },
          {
            name: "OBS Studio",
            description: "Recording, streaming and visual content production.",
          },
          {
            name: "Google Sheets / Excel",
            description:
              "Data organization, formulas and operational controls.",
          },
          {
            name: "Google Docs / Word",
            description:
              "Documentation, proposals, texts and information structure.",
          },
          {
            name: "Google Slides",
            description: "Clear slides to sell ideas and explain solutions.",
          },
        ],
      },
      {
        title: "Management, Games and Process",
        summary:
          "I also understand organization tools, work methods and creation of interactive experiences.",
        items: [
          {
            name: "Trello",
            description: "Task organization, steps, priority and follow-up.",
          },
          {
            name: "Scrum",
            description:
              "Delivery rhythm, ceremonies, backlog and team collaboration.",
          },
          {
            name: "Unity",
            description:
              "Foundation for creating games, scenes, logic and interaction.",
          },
          {
            name: "Game creation",
            description:
              "Gameplay notions, prototyping and interactive experience.",
          },
        ],
      },
    ],
  },
  experience: {
    aria: "Professional experience timeline",
    eyebrow: "Experience",
    titleStart: "Experiences That ",
    titleAccent: "Shaped Me",
    titleEnd: ".",
    description:
      "Each company, each project and each sale taught me something I still carry in code, communication and problem solving.",
    availabilityAria: "Professional availability",
    timelineAria: "Professional journey",
    current: "Current",
    start: "Start",
    latest: "Latest",
    step: "Step",
    moontechLetterPt: "RECOMMENDATION LETTER PT-BR",
    moontechLetterEn: "RECOMMENDATION LETTER IN ENGLISH",
    moontechLetterPtTitle: "Download recommendation letter in Portuguese (PDF)",
    moontechLetterEnTitle: "Download recommendation letter in English (PDF)",
  },
  projects: {
    eyebrow: "Projects",
    titleStart: "Production ",
    titleAccent: "AI & Full Stack",
    titleEnd: " Projects",
    description:
      "A portfolio of real shipped work: LangChain agents, RAG, and LLMs, plus web systems, data pipelines, e-commerce, and automations in production. Each project covers the problem, architecture, stack, and impact — with a clear focus on applied AI engineering.",
    featuredCases: "Featured cases",
    featuredCasesDescription:
      "Each cover opens its own page with project details.",
    carouselAria: "Horizontal projects carousel",
    viewAll: "View all projects",
    allProjects: "All projects",
    backToPortfolio: "Back to portfolio",
    backToProjects: "Back to projects",
    notFoundEyebrow: "Project not found",
    notFoundTitle: "This project does not exist yet.",
    projectEyebrow: "Project",
    aboutProject: "About the project",
    technicalHighlights: "Technical highlights",
    technologiesUsed: "Technologies used",
    forRecruiters: "Impact & Value Delivered",
    viewProject: "View project",
    repository: "Repository",
    underConstruction: "Content under construction",
    reservedSpaceTitle: "Reserved space for the full case.",
    reservedSpaceText:
      "This area can include problem, solution, images, results, links, lessons learned and any specific material for this project.",
    openRepository: "Open repository",
    placeholderCover:
      "Case being prepared to show problem, solution, process and result.",
    placeholderInside:
      "Page reserved for the full case, with context, technical decisions and final result.",
    console: {
      windowTitle: "mateus@ai-engineer:~/projects",
      listAria: "Project list",
      runPrefix: "run",
      hint: "// select a project to run inference",
      statusReady: "ready",
      statusModel: "model: mateus-ai · temp: 0.7",
      statusLoaded: (count: number) => `${count} cases loaded`,
      openCase: "Open full case",
      outputAria: "Selected project details",
      promptAria: "Prompt to filter projects",
      promptPlaceholder: "Ask about a project… e.g.: AI agents",
      promptSend: "Send prompt",
      promptEmpty: (query: string) => `no case found for "${query}"`,
      promptMatches: (count: number) =>
        count === 1 ? "1 case in context" : `${count} cases in context`,
      suggestionsLabel: "Prompt suggestions",
      suggestions: [
        "AI agents",
        "RAG & LLMs",
        "automation",
        "Amazon SP-API",
        "Python & data",
        "Machine Learning",
        "Open Finance",
        "e-commerce",
        "React & PostgreSQL",
        "WhatsApp Bot",
        "Playwright",
        "Docker & APIs",
      ],
    },
  },
  gallery: {
    carouselRole: "carousel",
    imagesAria: (title) => `Images from project ${title}`,
    videoAria: (title) => `Project video for ${title}`,
    imageAlt: (title, index, total) => `${title} - image ${index} of ${total}`,
    previous: "Previous image",
    next: "Next image",
    selectImage: "Select image",
    goToImage: (index) => `Go to image ${index}`,
    videoFallback: "Your browser does not support HTML5 video playback.",
  },
  education: {
    eyebrow: "Education",
    titleStart: "Bachelor of ",
    titleAccent: "Computer Science",
    titleEnd: ".",
    description:
      "Degree completed at the Federal University of Itajuba (UNIFEI), one of Brazil major engineering and technology institutions.",
    mainImageAlt: "Mateus Bonette at the UNIFEI graduation ceremony",
    ceremony: "Graduation Ceremony",
    graduated: "Graduated",
    classImageAlt: "UNIFEI graduating class",
    classYear: "Class of 2025",
    degreeShort: "Computer Science",
    numbers: "In numbers",
    yearsFormation: "years of education",
    linesWritten: "lines written",
    location: "Itajuba, MG",
    diplomaTitle: "View Diploma - Bachelor of Computer Science · UNIFEI",
    viewDiploma: "View Diploma",
  },
  contact: {
    eyebrow: "Let us talk",
    title: "Have a Role or Project in Mind?",
    paragraphs: [
      "I am available for fixed opportunities, full-time roles, freelance work and collaborative projects.",
      "If you are looking for someone to join the team or build a well-crafted digital solution, let us talk.",
    ],
    copyEmailAria: "Copy email",
    emailCopiedAria: "Email copied",
    emailCopiedLabel: "Email Copied",
    responseLabel: "Response",
    responseValue: "Within 24 hours",
    locationLabel: "Location",
    locationValue: "Brazil, Itajuba - MG, Remote, Hybrid, On-site, Worldwide",
  },
  footer: {
    backToTop: "Back to top",
    top: "Top",
    text: "Portfolio built to get a good job and buy my bread.",
  },
  linksPage: {
    backToPortfolio: "Back to portfolio",
    whatsappCta: {
      label: "Want to grow your business? Click here!",
      message: "I want to grow my business! How do I do it?",
      aria: "Open WhatsApp to talk about growing your business",
    },
    links: [
      {
        label: "Portfolio",
        description: "See my projects and experience",
        kind: "portfolio",
      },
      {
        label: "LinkedIn",
        description: "Connect with me professionally",
        kind: "linkedin",
      },
      { label: "Resume", description: "Download my CV in PDF", kind: "resume" },
      {
        label: "GitHub",
        description: "Check my repositories and code",
        kind: "github",
      },
    ],
  },
  floatingWhatsApp: {
    aria: "Open WhatsApp conversation",
  },
};

const CONTENT_BY_LOCALE: Record<Locale, PortfolioContent> = {
  "pt-BR": {
    profile: PROFILE_PT,
    skills: SKILLS_PT,
    projects: ORDERED_PROJECTS_PT,
    experiences: LINKEDIN_EXPERIENCES_PT,
    education: LINKEDIN_EDUCATION_PT,
    navLinks: NAV_LINKS_PT,
    ui: UI_PT,
  },
  en: {
    profile: PROFILE_EN,
    skills: SKILLS_PT,
    projects: PROJECTS_EN,
    experiences: LINKEDIN_EXPERIENCES_EN,
    education: LINKEDIN_EDUCATION_EN,
    navLinks: NAV_LINKS_EN,
    ui: UI_EN,
  },
};

export function getPortfolioContent(
  locale = getCurrentLocale(),
): PortfolioContent {
  return CONTENT_BY_LOCALE[locale];
}

const ACTIVE_CONTENT = getPortfolioContent();

export const PROFILE = ACTIVE_CONTENT.profile;
export const SKILLS = ACTIVE_CONTENT.skills;
export const PROJECTS = ACTIVE_CONTENT.projects;
export const EXPERIENCES = ACTIVE_CONTENT.experiences;
export const EDUCATION = ACTIVE_CONTENT.education;
export const NAV_LINKS = ACTIVE_CONTENT.navLinks;
export const UI = ACTIVE_CONTENT.ui;
