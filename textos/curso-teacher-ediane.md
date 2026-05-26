# Portfólio - Curso Teacher Ediane

> Contexto informado pelo usuário: cliente real Teacher Ediane, projeto em uso diário, domínio próprio pode ser citado e o fluxo principal de acesso do aluno é por e-mail com redirecionamento para `/definir-senha`. A Teacher Ediane tem audiência consolidada, com mais de 50 mil seguidores, e o projeto está em operação.

## 1. Nome profissional do projeto
Plataforma de Curso Online Inglês na Mala | Teacher Ediane

## 2. Nome curto para exibir no portfólio
Inglês na Mala

## 3. Resumo ultra curto
Plataforma full stack para vender e entregar um curso de inglês para viagens, com pagamento online, acesso do aluno e painel administrativo.

## 4. Resumo curto
Aplicação web completa com landing page, checkout Mercado Pago, autenticação, área do aluno com áudio e progresso, e painel admin para operação do conteúdo e dos usuários.

## 5. Descrição média
Este projeto é uma plataforma de curso online focada em inglês para viagens, pensada para vender o produto, liberar o acesso do aluno e organizar o conteúdo em um fluxo simples e claro.

Ele combina frontend em React, backend em Node.js/Express, banco PostgreSQL e integrações com pagamento e e-mail. O resultado é um sistema que funciona como vitrine, checkout, área de estudo e painel operacional ao mesmo tempo.

## 6. Descrição completa
O projeto implementa uma plataforma digital de ensino com foco em conversão comercial e entrega de conteúdo. A pessoa interessada entra pela landing page, entende a proposta do curso, faz a compra no checkout e segue para o fluxo de acesso ao conteúdo. O acesso principal do aluno foi desenhado para ocorrer por e-mail, com definição de senha no caminho `/definir-senha`, o que torna a experiência mais controlada e segura.

Depois do acesso, o aluno encontra uma área com curso organizado por módulos, frases em inglês, tradução em português, player de áudio e acompanhamento de progresso. O sistema marca a frase como concluída ao final do áudio e permite navegar entre as lições. Isso deixa o aprendizado mais prático e mais próximo do uso real do curso.

No lado administrativo, o projeto traz um painel completo para operação diária: visão geral, lista de alunos, compras, vendas, frases, módulos, upload de áudio, upload de imagem e criação de usuários. Como esse painel está em uso real no dia a dia, o projeto mostra mais do que interface bonita. Mostra capacidade de sustentar uma operação viva, com regras de negócio, suporte e manutenção contínua.

Esse é o ponto que mais fortalece o portfólio: não se trata só de um estudo isolado. É um case real de cliente, com produto ativo, marca já conhecida e operação recorrente. Para recrutadores e clientes, isso prova que você consegue entregar uma solução que não para no visual. Você entrega fluxo, backoffice, segurança, integração e manutenção.

## 7. Problema que o projeto resolve
O projeto resolve o problema de vender e entregar um curso digital de forma organizada, sem depender de processos manuais para pagamento, liberação de acesso, controle de alunos e gestão do conteúdo.

## 8. Objetivo do projeto
O objetivo foi criar uma plataforma simples de usar para vender o curso, dar acesso ao aluno com segurança e permitir que a operação do conteúdo fosse feita de forma centralizada no painel administrativo.

## 9. Funcionalidades principais
- Landing page com apresentação do curso, vídeo, proposta comercial, módulos, depoimentos e chamada para compra.
- Checkout com nome, e-mail e CPF.
- Integração com Mercado Pago para criação da preferência de pagamento.
- Páginas de status de pagamento: sucesso, pendente e falha.
- Verificação automática do status da compra na tela de pendência.
- Login com JWT.
- Cadastro com token de acesso e código de verificação por e-mail.
- Definição de senha com token após compra aprovada.
- Área do aluno com lista de cursos e card principal do curso.
- Dashboard do aluno com módulos, progresso e continuidade de estudo.
- Player de áudio por frase com play, pause, repetir, avançar e voltar.
- Marcação de frase concluída ao fim do áudio.
- Tela de configurações com perfil, troca de senha, suporte e cancelamento do curso dentro da janela de 7 dias.
- Painel admin com visão geral de alunos, vendas e progresso.
- Gestão de alunos com edição e exclusão.
- Gestão de compras com filtro por status.
- Gestão de frases com criação, edição, exclusão, reorder e upload de áudio.
- Gestão de módulos com criação, edição, exclusão e upload de imagem.
- Criação manual de aluno ou admin pelo painel.
- Rotas protegidas por autenticação, perfil e compra ativa.
- Servir arquivos estáticos de áudio e imagens pelo backend.

## 10. Tecnologias identificadas por categoria

### Front-end
React 19, React DOM, React Router DOM, Axios

### Back-end
Node.js, Express 5, bcrypt, jsonwebtoken, multer, cors, helmet, express-rate-limit, hpp

### Banco de dados
PostgreSQL, `pg`

### Autenticação
JWT, hash de senha com bcrypt, tokens de cadastro, tokens de definição de senha

### APIs e integrações
Mercado Pago SDK, Brevo API, Nodemailer SMTP

### Estilização
CSS puro, variáveis CSS globais

### Build e ferramentas
Vite, ESLint, Nodemon

### Deploy ou infraestrutura
PM2, Nginx, `rsync`, `ssh`, migrações SQL

### Outras ferramentas
Script de deploy, script de criação de admin, script de teste do fluxo de pagamento

## 11. Tecnologias para capa/card
React, Node.js, Express, PostgreSQL, Mercado Pago, JWT

## 12. Tecnologias para página de detalhes
React, React Router DOM, Axios, Node.js, Express 5, PostgreSQL, `pg`, bcrypt, jsonwebtoken, multer, cors, helmet, express-rate-limit, hpp, Nodemailer, Brevo API, Vite, ESLint, PM2, Nginx

## 13. Diferenciais técnicos
- Fluxo de pagamento com webhook idempotente, evitando processamento duplicado.
- Proteção de rotas por autenticação, papel do usuário e compra ativa.
- Cadastro com token e código de verificação por e-mail, com limite de tentativas.
- Fluxo de criação de senha por token após a aprovação da compra.
- Dashboard administrativo com operação real de alunos, compras, frases e módulos.
- Upload e entrega de mídia no próprio backend.
- Reordenação de frases com transação para evitar conflito de numeração.
- Validações de entrada e proteção com CORS, Helmet, HPP e rate limiting.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
Esse projeto mostra que eu consigo construir uma solução completa, não só uma tela isolada. Eu consigo ligar venda, acesso, conteúdo, segurança e operação em um sistema só.

Também mostra que eu consigo trabalhar em contexto real de cliente, com produto em uso, painel administrativo ativo e regras que precisam funcionar de verdade. Isso pesa mais no portfólio do que um projeto apenas demonstrativo.

Além disso, o projeto evidencia que eu sei lidar com:
- integração com gateway de pagamento
- autenticação e autorização
- modelagem de banco relacional
- consumo e entrega de arquivos de mídia
- painel administrativo
- experiência do aluno
- regras de negócio de produto digital

## 15. Texto focado em recrutadores
Projeto full stack em produção real para cliente do nicho de educação, com domínio próprio, uso diário do painel administrativo e contexto comercial forte. Mostra domínio prático de React, Node.js, PostgreSQL e integrações externas, além de capacidade de entregar uma jornada completa do usuário, da compra ao acesso do conteúdo.

## 16. Texto focado em clientes de freelance
Este projeto mostra que eu entrego mais do que layout. Eu consigo montar a estrutura completa para vender e operar um curso digital, com checkout, liberação de acesso, área do aluno, painel administrativo e controle do conteúdo. É o tipo de solução que reduz trabalho manual e organiza a operação do produto.

## 17. SEO title
Inglês na Mala | Plataforma Full Stack de Curso Online com Pagamento e Área do Aluno

## 18. SEO description
Projeto full stack em React, Node.js e PostgreSQL para venda e entrega de curso online, com checkout Mercado Pago, autenticação, progresso do aluno e painel administrativo.

## 19. SEO keywords
curso online, plataforma educacional, React, Node.js, PostgreSQL, Mercado Pago, JWT, dashboard do aluno, painel administrativo, projeto full stack, inglês para viagens

## 20. CTA sugerido
Ver fluxo completo: da compra ao acesso do aluno

## 21. Fatos encontrados no código
- O projeto está dividido em `frontend`, `backend` e `database`.
- O frontend usa React 19, React Router DOM, Axios e Vite.
- O backend usa Express 5, PostgreSQL, JWT, bcrypt e middlewares de segurança.
- Existe rota de saúde em `/health`.
- Existe autenticação com JWT e verificação de token no backend.
- Existe fluxo de cadastro com token e código de verificação por e-mail.
- Existe fluxo de definição de senha em `/definir-senha`.
- O checkout envia nome, e-mail e CPF e cria preferência no Mercado Pago.
- O backend processa webhook de pagamento e atualiza compra.
- A área autenticada tem dashboard do aluno, progresso e player de áudio por frase.
- O painel admin permite gerenciar alunos, compras, frases, módulos e arquivos de mídia.
- O schema do banco inclui `users`, `purchases`, `signup_tokens`, `password_set_tokens`, `user_progress`, `modules`, `phrases`, `landing_page_content`, `testimonials` e `faq`.
- O frontend mostra o curso como uma oferta de 25 frases essenciais.
- O backend mantém estrutura para até 50 frases no banco, com organização interna para o curso.
- O fluxo de cancelamento em 7 dias está implementado no sistema.
- O script de deploy usa `rsync`, `ssh`, migrações SQL e PM2.
- O `index.html` já traz SEO, Open Graph e JSON-LD de curso.

## 22. Hipóteses
- O projeto foi feito para cliente real, não apenas como estudo.
- O fluxo principal de acesso usado na prática foi o link por e-mail com definição de senha.
- O painel administrativo está em uso diário na operação do curso.
- A audiência de mais de 50 mil seguidores foi informada pelo usuário e reforça o contexto comercial do projeto.
- Os depoimentos da landing parecem ter contexto real de marca, mas isso não é confirmado pelo código.
- As tabelas `landing_page_content`, `testimonials` e `faq` parecem preparadas para conteúdo dinâmico, mas a landing atual usa dados estáticos no frontend.
- O fluxo `claim-purchase` existe como alternativa operacional, mas não parece ser o caminho principal da interface atual.
- O fluxo de reset de senha existe no backend, mas não aparece como página dedicada no frontend atual.
- A combinação entre 25 frases comerciais e 50 registros técnicos indica uma estrutura interna preparada para expansão e repetição de áudio.

## 23. Pontos para revisão manual
- Decidir se o portfólio vai citar explicitamente a audiência de mais de 50 mil seguidores ou só mencionar "cliente real com audiência consolidada".
- Confirmar se vale destacar o domínio `teacherediane.com.br` como parte do case público.
- Ajustar a narrativa entre 25 frases comerciais e 50 registros internos do banco, para não gerar dúvida.
- Definir se o fluxo `claim-purchase` deve aparecer no texto final ou ficar só como recurso técnico.
- Confirmar se os depoimentos devem ser tratados como reais, exemplificativos ou mistos.
- Verificar se o fluxo de reset de senha merece uma página no frontend ou apenas menção no backend.
- Revisar o fato de que as tabelas de conteúdo dinâmico existem, mas a landing atual é estática.
- Revisar o card do admin, porque alguns campos exibidos no frontend não batem exatamente com os nomes retornados pelo backend.
- Se o portfólio for usado para recrutamento, vale destacar que o projeto não é só uma landing, mas uma operação ativa de produto digital.

## 24. JSON final para integração futura no React
```json
{
  "name": "Plataforma de Curso Online Inglês na Mala | Teacher Ediane",
  "shortName": "Inglês na Mala",
  "slug": "ingles-na-mala-teacher-ediane",
  "ultraShortSummary": "Plataforma full stack para vender e entregar um curso de inglês para viagens, com pagamento online, acesso do aluno e painel administrativo.",
  "shortSummary": "Aplicação web completa com landing page, checkout Mercado Pago, autenticação, área do aluno com áudio e progresso, e painel admin para operação do conteúdo e dos usuários.",
  "mediumDescription": "Projeto full stack de educação digital com jornada completa de compra e estudo. O aluno passa por landing, checkout, pagamento, criação de acesso e consumo de aulas com áudio e progresso. O admin opera frases, módulos, alunos e vendas em painel dedicado.",
  "fullDescription": "Projeto full stack em produção real para cliente do nicho de educação, com foco em vender e entregar um curso de inglês para viagens. O frontend em React apresenta o curso, conduz o checkout e organiza a área do aluno. O backend em Node.js e Express centraliza autenticação, pagamentos, progresso e administração. A integração com Mercado Pago cria a preferência de pagamento e processa o webhook para atualizar compras. O acesso principal do aluno acontece por e-mail, com definição de senha no fluxo /definir-senha. O painel administrativo permite gerenciar alunos, compras, frases, módulos, áudios e imagens, mostrando que o projeto foi pensado para operação contínua e não apenas para demonstração visual.",
  "problemSolved": "Centraliza a venda, o acesso e a operação de um curso digital em um único sistema, reduzindo trabalho manual e organizando a experiência do aluno.",
  "projectGoal": "Digitalizar e operacionalizar a entrega do curso de inglês para viagens com uma aplicação web de ponta a ponta.",
  "mainFeatures": [
    "Landing page com vídeo, proposta e oferta",
    "Checkout com nome, e-mail e CPF",
    "Integração de pagamento via Mercado Pago",
    "Páginas de status de pagamento",
    "Login com JWT",
    "Cadastro por token com verificação por e-mail",
    "Definição de senha por token pós-compra",
    "Área do aluno com progresso",
    "Player de aula por frase com áudio e conclusão automática",
    "Configurações de perfil, senha, suporte e cancelamento",
    "Painel admin com alunos, vendas, frases e módulos",
    "Upload de áudio e imagem para conteúdo"
  ],
  "technologiesCard": [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Mercado Pago",
    "JWT"
  ],
  "technologiesDetails": {
    "frontend": [
      "React",
      "React Router DOM",
      "Axios"
    ],
    "backend": [
      "Node.js",
      "Express 5",
      "bcrypt",
      "jsonwebtoken",
      "multer",
      "cors",
      "helmet",
      "express-rate-limit",
      "hpp"
    ],
    "database": [
      "PostgreSQL",
      "pg"
    ],
    "authentication": [
      "JWT",
      "bcrypt",
      "signup_tokens",
      "password_set_tokens"
    ],
    "apisAndIntegrations": [
      "Mercado Pago SDK",
      "Brevo API",
      "Nodemailer SMTP"
    ],
    "styling": [
      "CSS puro",
      "CSS variables"
    ],
    "buildAndTools": [
      "Vite",
      "ESLint",
      "Nodemon"
    ],
    "deployOrInfrastructure": [
      "PM2",
      "Nginx",
      "rsync",
      "ssh"
    ],
    "other": [
      "Script de deploy",
      "Script de criação de admin",
      "Script de teste de pagamento",
      "Migrações SQL"
    ]
  },
  "technicalHighlights": [
    "Webhook de pagamento com tratamento idempotente",
    "Proteção de rotas por autenticação, papel e compra ativa",
    "Fluxo de onboarding por token de senha após compra",
    "Cadastro com verificação por código de e-mail e limite de tentativas",
    "CRUD administrativo com upload de mídia",
    "Reordenação de frases em transação para evitar conflito de unicidade",
    "Metadados SEO e JSON-LD já presentes no frontend"
  ],
  "developerSkillsDemonstrated": [
    "Desenvolvimento full stack",
    "Integração com gateway de pagamento",
    "Modelagem relacional em PostgreSQL",
    "Implementação de autenticação e autorização",
    "Criação de painel administrativo",
    "Construção de UX para fluxo de compra e estudo",
    "Entrega de produto em uso real"
  ],
  "recruiterText": "Projeto full stack em produção real, com cliente real, domínio próprio e contexto comercial forte. Mostra domínio prático de React, Node.js, PostgreSQL e integrações externas, além de capacidade de entregar uma jornada completa do usuário, da compra ao acesso do conteúdo.",
  "freelanceClientText": "Este projeto mostra que eu entrego mais do que layout. Eu consigo montar a estrutura completa para vender e operar um curso digital, com checkout, liberação de acesso, área do aluno, painel administrativo e controle do conteúdo. É o tipo de solução que reduz trabalho manual e organiza a operação do produto.",
  "seo": {
    "title": "Inglês na Mala | Plataforma Full Stack de Curso Online com Pagamento e Área do Aluno",
    "description": "Projeto full stack em React, Node.js e PostgreSQL para venda e entrega de curso online, com checkout Mercado Pago, autenticação, progresso do aluno e painel administrativo.",
    "keywords": [
      "curso online",
      "plataforma educacional",
      "React",
      "Node.js",
      "PostgreSQL",
      "Mercado Pago",
      "JWT",
      "dashboard do aluno",
      "painel administrativo",
      "projeto full stack",
      "inglês para viagens"
    ],
    "category": "EdTech / Plataforma de Curso Online"
  },
  "cta": "Ver fluxo completo: da compra ao acesso do aluno"
}
```
