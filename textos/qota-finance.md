# Portfólio - Qota Finance

## Metadados
- **Projeto analisado:** `/home/mateus/Documentos/Projetos/meus-projetos/qota-finance`
- **Data da geração:** `2026-05-15`
- **Contexto validado com o autor:** operação real da Qota Store, uso amplo das APIs da Amazon, uso de e-mail e log, política contábil fixa do negócio, dados reais recorrentes, registro das ações operacionais diárias, uso contínuo em tempo real e também por filtros, sincronização periódica em ciclos curtos de 5 minutos, narrativa dupla de operação e inteligência financeira.

## 1) Nome profissional do projeto
**Qota Finance | Plataforma Operacional e Financeira para Seller Amazon**

## 2) Nome curto para exibir no portfólio
**Qota Finance**

## 3) Resumo ultra curto
Hub full stack que centraliza finanças, pedidos, alertas e automações da operação Amazon.

## 4) Resumo curto
Aplicação criada para a operação real da Qota Store, com integração às APIs da Amazon, painéis financeiros, alertas e automações. O sistema organiza dados recorrentes e apoia decisões operacionais com atualização contínua.

## 5) Descrição média
O Qota Finance reúne em um único painel os dados que normalmente ficam espalhados entre Seller Central, planilhas e processos manuais. A aplicação combina frontend React, backend TypeScript e PostgreSQL para acompanhar finanças, pedidos, produtos, alertas e respostas automáticas em uma operação real.

O projeto foi pensado para uso contínuo em tempo real e também para consultas filtradas por período. Na prática, ele mantém a base atualizada com sincronizações periódicas e oferece uma visão clara do que entrou, saiu, vendeu, gerou alerta ou exigiu ação operacional.

## 6) Descrição completa
O Qota Finance é uma aplicação full stack criada para sustentar uma operação real da Qota Store. A ideia principal foi sair da dependência de várias telas soltas, planilhas e conferências manuais e concentrar tudo em um sistema único, com leitura financeira e operacional no mesmo lugar.

No backend, o projeto trabalha com integração ampla às APIs da Amazon usadas na operação, além de e-mail e log para comunicação e rastreio. O código também mostra tratamento para sincronização periódica, proteção contra execuções duplicadas, controle de tempo de atualização e regras de negócio que ajudam a manter os dados consistentes.

No frontend, o sistema entrega módulos separados para dashboard, despesas, entradas, fluxo de caixa, produtos comprados, pedidos, alertas e respostas automáticas. Isso deixa o projeto fácil de entender para quem avalia o portfólio, porque cada parte mostra um problema real da operação sendo tratado de forma objetiva.

O projeto tem valor de portfólio porque mostra mais do que uma interface bonita. Ele evidencia domínio de integração com serviço externo crítico, organização de dados financeiros, automação de rotina e construção de produto para uso real. A narrativa do projeto funciona em duas frentes ao mesmo tempo: como plataforma operacional da loja e como ferramenta de inteligência financeira para acompanhar o negócio.

## 7) Problema que o projeto resolve
Centralizar uma operação Amazon real que, sem sistema, depende de consultas dispersas, controles manuais e acompanhamento separado de finanças, pedidos, alertas e automações.

## 8) Objetivo do projeto
Dar suporte contínuo à operação da Qota Store com um sistema que atualiza dados com frequência, registra ações importantes e organiza a rotina financeira e operacional em uma única interface.

## 9) Funcionalidades principais
- Dashboard com visão geral, KPIs, movimentações e transações Amazon.
- Cadastro e gestão de despesas.
- Cadastro e gestão de entradas.
- Fluxo de caixa com regra específica para `Prep Center`.
- Produtos comprados com margem, lucro por produto e edição por ASIN.
- Remoção lógica de itens do catálogo por override.
- Sincronização Amazon com workers e proteção contra execução duplicada.
- Alertas com categorias, prioridade, resolução e filtros.
- Notificações por e-mail e WhatsApp.
- Logs de envio e rastreio de ações.
- Autoresponder com templates, variáveis e múltiplos canais.
- Integração com notificações da Amazon e consumo de eventos via SQS.

## 10) Tecnologias identificadas por categoria

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Recharts
- CSS Modules

### Backend
- Node.js
- Express
- TypeScript
- Knex
- Zod
- Nodemailer
- UUID

### Banco de dados
- PostgreSQL
- Knex migrations

### Integrações
- Amazon SP-API
- AWS LWA
- AWS SigV4
- AWS SQS
- AWS STS
- SMTP / e-mail
- Evolution API / WhatsApp

### Infra e deploy
- Docker Compose
- Nginx
- Caddy
- Scripts de deploy com SSH e rsync

### Testes
- Vitest

## 11) Tecnologias para capa/card
- React
- Node.js
- TypeScript
- PostgreSQL
- Amazon SP-API

## 12) Tecnologias para página de detalhes
- React 18
- Vite
- React Router DOM
- Axios
- Recharts
- CSS Modules
- Node.js
- Express
- TypeScript
- Knex
- Zod
- PostgreSQL
- Amazon SP-API
- AWS LWA
- AWS SigV4
- AWS SQS
- Nodemailer
- Docker Compose
- Nginx
- Caddy
- Vitest

## 13) Diferenciais técnicos
- Integração ampla com as APIs da Amazon usadas na operação real.
- Cliente próprio de SP-API com autenticação LWA e assinatura SigV4.
- Controle de rate limit, retry e sincronização com foco em estabilidade.
- Workers em background para sync, alertas e autoresponder.
- Regras de negócio financeiras específicas, como o tratamento de `Prep Center`.
- Autoresponder com templates, variáveis e canais diferentes.
- Alertas com deduplicação, prioridade e rastreio de envio.
- Base orientada a dados reais recorrentes e atualização contínua.

## 14) O que esse projeto demonstra sobre mim como desenvolvedor
- Consigo transformar uma operação real em sistema funcional.
- Consigo integrar backend, frontend, banco e serviços externos sem perder organização.
- Sei trabalhar com regras de negócio que não são genéricas, mas específicas da operação.
- Tenho cuidado com estabilidade, sincronização e consistência dos dados.
- Consigo entregar um projeto que é útil para o negócio e também forte para portfólio.

## 15) Texto focado em recrutadores
O Qota Finance mostra minha capacidade de construir uma plataforma real de operação, não só uma interface isolada. O projeto reúne integração com Amazon, automações, regras financeiras e organização de dados em uma aplicação full stack clara, útil e tecnicamente consistente. Para recrutadores, ele evidencia visão de produto, domínio de backend e atenção a confiabilidade operacional.

## 16) Texto focado em clientes de freelance
Este projeto mostra como eu estruturo uma solução para tirar a rotina do improviso. Em vez de depender de planilhas e conferências manuais, a operação passa a ter um painel único para acompanhar finanças, pedidos, alertas e automações. Para um cliente, isso significa mais controle, menos trabalho repetitivo e uma base pronta para crescer.

## 17) SEO title
**Qota Finance | Plataforma Operacional e Financeira para Seller Amazon**

## 18) SEO description
Projeto full stack para operação real da Qota Store, com integração Amazon, dashboard financeiro, alertas, automações, fluxo de caixa e acompanhamento operacional em tempo real.

## 19) SEO keywords
qota finance, seller amazon, plataforma operacional, dashboard financeiro, integração amazon sp-api, automação de alertas, autoresponder, fluxo de caixa, react node typescript, postgresql, portfólio desenvolvedor

## 20) CTA sugerido
**Ver detalhes técnicos e fluxos operacionais**

## 21) Fatos encontrados no código
- O backend expõe `GET /api/health`.
- O servidor sobe workers para autoresponder, alertas e sincronização.
- As rotas principais incluem dashboard, despesas, entradas, fluxo de caixa, produtos, autoresponder, alertas e Amazon.
- O frontend possui telas para dashboard, financeiro, produtos, pedidos, respostas automáticas e alertas.
- A API do frontend chama módulos para dashboard, despesas, entradas, fluxo de caixa, catálogo Amazon, pedidos, autoresponder e alertas.
- O dashboard combina dados financeiros do banco com resumo de pedidos e pode usar APIs ao vivo quando habilitado.
- O fluxo de caixa mistura entradas manuais com entradas derivadas da Amazon.
- A tela de produtos comprados calcula margem e lucro por ASIN e aceita overrides.
- Existe um módulo de alertas com canais de e-mail e WhatsApp.
- O sistema de alertas registra logs e permite resolver e reabrir alertas no painel.
- Há consumo de eventos da Amazon via SQS.
- O autoresponder suporta eventos como `pedido_enviado`, `pedido_sem_envio`, `produto_vendido` e `cliente_inativo`.
- O autoresponder suporta canais como `log`, `webhook`, `email`, `amazon_messaging` e `amazon_solicitation`.
- O projeto tem Docker Compose com banco, backend e frontend.
- O projeto tem scripts de deploy, sincronização e testes.
- Existem testes para janela segura de tempo, throttle, catálogo de operações e idempotência de upsert.
- Não identifiquei um fluxo claro de login/autenticação de usuário na área analisada do código.

## 22) Hipóteses
- O melhor posicionamento de portfólio é apresentar o projeto como plataforma operacional e também como ferramenta de inteligência financeira.
- O ciclo de sincronização de 5 minutos deve ser tratado como contexto de uso informado, a menos que você queira destacá-lo explicitamente no portfólio.
- A cobertura ampla das APIs da Amazon pode ser resumida no texto público como integração forte com a operação Amazon, para manter a leitura mais simples.
- Parte dos endpoints de compatibilidade parece ter sido mantida por legado técnico e continuidade operacional.

## 23) Pontos para revisão manual
- Confirmar se vale citar explicitamente o ciclo de sincronização de 5 minutos no texto do portfólio.
- Revisar se a diferença entre `/alertas/notificacoes/runtime` e `/alertas/worker/status` precisa aparecer ou ser ignorada no texto público.
- Definir se o projeto deve ser apresentado mais como plataforma operacional completa ou como hub financeiro com automações.
- Confirmar se a frase sobre integração ampla com as APIs da Amazon deve entrar como detalhe forte ou como descrição mais discreta.
- Verificar se a ausência de login/autenticação deve ser mencionada ou omitida na versão final do portfólio.

## 24) JSON final para integração futura no React
```json
{
  "projectNameProfessional": "Qota Finance | Plataforma Operacional e Financeira para Seller Amazon",
  "projectNameShort": "Qota Finance",
  "projectSlug": "qota-finance",
  "contextConfirmedByAuthor": [
    "Operação real da Qota Store",
    "Uso amplo das APIs da Amazon",
    "Uso de e-mail e log",
    "Política contábil fixa do negócio",
    "Dados reais recorrentes",
    "Registro das ações operacionais diárias",
    "Uso contínuo em tempo real e também por filtros",
    "Sincronização periódica em ciclos curtos de 5 minutos",
    "Narrativa dupla de operação e inteligência financeira"
  ],
  "summaries": {
    "ultraShort": "Hub full stack que centraliza finanças, pedidos, alertas e automações da operação Amazon.",
    "short": "Aplicação criada para a operação real da Qota Store, com integração às APIs da Amazon, painéis financeiros, alertas e automações. O sistema organiza dados recorrentes e apoia decisões operacionais com atualização contínua.",
    "medium": "O Qota Finance reúne em um único painel os dados que normalmente ficam espalhados entre Seller Central, planilhas e processos manuais. A aplicação combina frontend React, backend TypeScript e PostgreSQL para acompanhar finanças, pedidos, produtos, alertas e respostas automáticas em uma operação real. O projeto foi pensado para uso contínuo em tempo real e também para consultas filtradas por período.",
    "full": "O Qota Finance é uma aplicação full stack criada para sustentar uma operação real da Qota Store. A ideia principal foi sair da dependência de várias telas soltas, planilhas e conferências manuais e concentrar tudo em um sistema único, com leitura financeira e operacional no mesmo lugar. No backend, o projeto trabalha com integração ampla às APIs da Amazon usadas na operação, além de e-mail e log para comunicação e rastreio. O código também mostra tratamento para sincronização periódica, proteção contra execuções duplicadas, controle de tempo de atualização e regras de negócio que ajudam a manter os dados consistentes. No frontend, o sistema entrega módulos separados para dashboard, despesas, entradas, fluxo de caixa, produtos comprados, pedidos, alertas e respostas automáticas. Isso deixa o projeto fácil de entender para quem avalia o portfólio, porque cada parte mostra um problema real da operação sendo tratado de forma objetiva. O projeto tem valor de portfólio porque mostra mais do que uma interface bonita. Ele evidencia domínio de integração com serviço externo crítico, organização de dados financeiros, automação de rotina e construção de produto para uso real. A narrativa do projeto funciona em duas frentes ao mesmo tempo: como plataforma operacional da loja e como ferramenta de inteligência financeira para acompanhar o negócio."
  },
  "problemSolved": "Centralizar uma operação Amazon real que, sem sistema, depende de consultas dispersas, controles manuais e acompanhamento separado de finanças, pedidos, alertas e automações.",
  "projectGoal": "Dar suporte contínuo à operação da Qota Store com um sistema que atualiza dados com frequência, registra ações importantes e organiza a rotina financeira e operacional em uma única interface.",
  "mainFeatures": [
    "Dashboard com visão geral, KPIs, movimentações e transações Amazon",
    "Cadastro e gestão de despesas",
    "Cadastro e gestão de entradas",
    "Fluxo de caixa com regra específica para Prep Center",
    "Produtos comprados com margem, lucro por produto e edição por ASIN",
    "Remoção lógica de itens do catálogo por override",
    "Sincronização Amazon com workers e proteção contra execução duplicada",
    "Alertas com categorias, prioridade, resolução e filtros",
    "Notificações por e-mail e WhatsApp",
    "Logs de envio e rastreio de ações",
    "Autoresponder com templates, variáveis e múltiplos canais",
    "Integração com notificações da Amazon e consumo de eventos via SQS"
  ],
  "technologiesByCategory": {
    "frontend": [
      "React 18",
      "Vite",
      "React Router DOM",
      "Axios",
      "Recharts",
      "CSS Modules"
    ],
    "backend": [
      "Node.js",
      "Express",
      "TypeScript",
      "Knex",
      "Zod",
      "Nodemailer",
      "UUID"
    ],
    "database": [
      "PostgreSQL",
      "Knex migrations"
    ],
    "integrations": [
      "Amazon SP-API",
      "AWS LWA",
      "AWS SigV4",
      "AWS SQS",
      "AWS STS",
      "SMTP / e-mail",
      "Evolution API / WhatsApp"
    ],
    "infraAndDeploy": [
      "Docker Compose",
      "Nginx",
      "Caddy",
      "Scripts de deploy com SSH e rsync"
    ],
    "tests": [
      "Vitest"
    ]
  },
  "technologiesCard": [
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Amazon SP-API"
  ],
  "technologiesDetails": [
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
    "AWS STS",
    "Nodemailer",
    "Docker Compose",
    "Nginx",
    "Caddy",
    "Vitest"
  ],
  "technicalHighlights": [
    "Integração ampla com as APIs da Amazon usadas na operação real",
    "Cliente próprio de SP-API com autenticação LWA e assinatura SigV4",
    "Controle de rate limit, retry e sincronização com foco em estabilidade",
    "Workers em background para sync, alertas e autoresponder",
    "Regras de negócio financeiras específicas, como o tratamento de Prep Center",
    "Autoresponder com templates, variáveis e canais diferentes",
    "Alertas com deduplicação, prioridade e rastreio de envio",
    "Base orientada a dados reais recorrentes e atualização contínua"
  ],
  "whatThisProjectDemonstratesAboutMe": [
    "Consigo transformar uma operação real em sistema funcional",
    "Consigo integrar backend, frontend, banco e serviços externos sem perder organização",
    "Sei trabalhar com regras de negócio específicas da operação",
    "Tenho cuidado com estabilidade, sincronização e consistência dos dados",
    "Consigo entregar um projeto útil para o negócio e forte para portfólio"
  ],
  "recruiterText": "O Qota Finance mostra minha capacidade de construir uma plataforma real de operação, não só uma interface isolada. O projeto reúne integração com Amazon, automações, regras financeiras e organização de dados em uma aplicação full stack clara, útil e tecnicamente consistente. Para recrutadores, ele evidencia visão de produto, domínio de backend e atenção a confiabilidade operacional.",
  "freelanceClientText": "Este projeto mostra como eu estruturo uma solução para tirar a rotina do improviso. Em vez de depender de planilhas e conferências manuais, a operação passa a ter um painel único para acompanhar finanças, pedidos, alertas e automações. Para um cliente, isso significa mais controle, menos trabalho repetitivo e uma base pronta para crescer.",
  "seo": {
    "title": "Qota Finance | Plataforma Operacional e Financeira para Seller Amazon",
    "description": "Projeto full stack para operação real da Qota Store, com integração Amazon, dashboard financeiro, alertas, automações, fluxo de caixa e acompanhamento operacional em tempo real.",
    "keywords": [
      "qota finance",
      "seller amazon",
      "plataforma operacional",
      "dashboard financeiro",
      "integração amazon sp-api",
      "automação de alertas",
      "autoresponder",
      "fluxo de caixa",
      "react node typescript",
      "postgresql",
      "portfólio desenvolvedor"
    ]
  },
  "suggestedCta": "Ver detalhes técnicos e fluxos operacionais",
  "factsFoundInCode": [
    "O backend expõe GET /api/health.",
    "O servidor sobe workers para autoresponder, alertas e sincronização.",
    "As rotas principais incluem dashboard, despesas, entradas, fluxo de caixa, produtos, autoresponder, alertas e Amazon.",
    "O frontend possui telas para dashboard, financeiro, produtos, pedidos, respostas automáticas e alertas.",
    "A API do frontend chama módulos para dashboard, despesas, entradas, fluxo de caixa, catálogo Amazon, pedidos, autoresponder e alertas.",
    "O dashboard combina dados financeiros do banco com resumo de pedidos e pode usar APIs ao vivo quando habilitado.",
    "O fluxo de caixa mistura entradas manuais com entradas derivadas da Amazon.",
    "A tela de produtos comprados calcula margem e lucro por ASIN e aceita overrides.",
    "Existe um módulo de alertas com canais de e-mail e WhatsApp.",
    "O sistema de alertas registra logs e permite resolver e reabrir alertas no painel.",
    "Há consumo de eventos da Amazon via SQS.",
    "O autoresponder suporta eventos como pedido_enviado, pedido_sem_envio, produto_vendido e cliente_inativo.",
    "O autoresponder suporta canais como log, webhook, email, amazon_messaging e amazon_solicitation.",
    "O projeto tem Docker Compose com banco, backend e frontend.",
    "O projeto tem scripts de deploy, sincronização e testes.",
    "Existem testes para janela segura de tempo, throttle, catálogo de operações e idempotência de upsert.",
    "Não identifiquei um fluxo claro de login/autenticação de usuário na área analisada do código."
  ],
  "hypotheses": [
    "O melhor posicionamento de portfólio é apresentar o projeto como plataforma operacional e também como ferramenta de inteligência financeira.",
    "O ciclo de sincronização de 5 minutos deve ser tratado como contexto de uso informado, a menos que você queira destacá-lo explicitamente no portfólio.",
    "A cobertura ampla das APIs da Amazon pode ser resumida no texto público como integração forte com a operação Amazon, para manter a leitura mais simples.",
    "Parte dos endpoints de compatibilidade parece ter sido mantida por legado técnico e continuidade operacional."
  ],
  "manualReviewPoints": [
    "Confirmar se vale citar explicitamente o ciclo de sincronização de 5 minutos no texto do portfólio.",
    "Revisar se a diferença entre /alertas/notificacoes/runtime e /alertas/worker/status precisa aparecer ou ser ignorada no texto público.",
    "Definir se o projeto deve ser apresentado mais como plataforma operacional completa ou como hub financeiro com automações.",
    "Confirmar se a frase sobre integração ampla com as APIs da Amazon deve entrar como detalhe forte ou como descrição mais discreta.",
    "Verificar se a ausência de login/autenticação deve ser mencionada ou omitida na versão final do portfólio."
  ]
}
```
