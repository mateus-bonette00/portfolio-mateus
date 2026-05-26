# Projeto: E-commerce NOARA

- Projeto analisado: `/home/mateus/Documentos/Projetos/meus-projetos/e-commerce-noara`
- Data da geração: 2026-05-15
- Contexto validado com o autor: cliente real, projeto em produção, operação comercial atual via WhatsApp, painel usado pela dona da loja.

## 1. Nome profissional do projeto
**NOARA Commerce Platform**

## 2. Nome curto para exibir no portfólio
**NOARA Semi Joias**

## 3. Resumo ultra curto
E-commerce MVP full stack para semi joias, com vitrine pública e painel admin para catálogo, avaliações, imagens e financeiro.

## 4. Resumo curto
Projeto real de cliente para a NOARA Semi Joias, construído e publicado em produção após fase de protótipo.
Hoje opera com conversão via WhatsApp e backoffice próprio para gestão de produtos, avaliações, uploads e lançamentos financeiros.

## 5. Descrição média
A solução foi desenvolvida como um MVP de e-commerce com foco em investimento inicial enxuto e operação rápida. O site público entrega posicionamento de marca, catálogo filtrável, página de produto e contato comercial direto por WhatsApp.

No administrativo, há login protegido, CRUD de produtos, upload otimizado de imagens, controle de avaliações e módulo financeiro simples para lançamentos de entrada/saída, atendendo a rotina da dona da loja.

## 6. Descrição completa
A **NOARA Commerce Platform** é uma aplicação full stack criada para um cliente real do segmento de semi joias. O projeto começou como protótipo visual e, após aprovação, foi evoluído e publicado em produção no domínio informado pelo cliente (`www.noarasemijoias.com.br`).

A arquitetura foi separada em duas partes:
- **Frontend (React + Vite):** experiência pública da marca com páginas institucionais, catálogo com filtros, detalhes de produto, avaliações e jornada de compra direcionada para WhatsApp.
- **Backend (Fastify + Prisma + PostgreSQL):** autenticação administrativa, gestão de catálogo, avaliações, uploads de imagens e controle financeiro.

A decisão de negócio nesta fase foi não implementar checkout interno ainda. Em vez disso, o funil comercial é concentrado no WhatsApp para reduzir complexidade e custo inicial. Mesmo sem checkout online, o sistema já sustenta operação real com painel interno para a dona da loja manter os dados atualizados sem depender de código.

Tecnicamente, o projeto demonstra entrega ponta a ponta: interface, regras de negócio, persistência em banco relacional, proteção de rotas administrativas, upload com otimização de imagem e rotina de deploy em servidor Linux.

## 7. Problema que o projeto resolve
Resolver a necessidade de colocar a marca no ar com baixo custo inicial, oferecendo:
- presença digital profissional;
- catálogo navegável para gerar interesse;
- canal comercial simples (WhatsApp);
- painel interno para manter catálogo e operação sem retrabalho manual.

## 8. Objetivo do projeto
Entregar um **MVP comercial funcional** para cliente real, com base sólida para evolução futura para um e-commerce completo com checkout dentro do site.

## 9. Funcionalidades principais
- Site público com home, coleção, produto, sobre, ateliê, contato e página 404.
- Catálogo com filtros por categoria, material, pedra, ocasião e faixa de preço.
- Ordenação por mais recentes, menor preço, maior preço e melhor avaliação.
- Página de produto com galeria de imagens, preço, detalhes, avaliações e produtos relacionados.
- CTA de compra e contato via WhatsApp.
- Cadastro público de avaliações de produto.
- Painel admin com login protegido por sessão.
- Dashboard com resumo de catálogo e financeiro.
- CRUD de produtos no painel.
- Upload de imagens pelo painel com processamento no backend.
- Controle financeiro com lançamentos de entrada e saída.
- Vinculação opcional de entrada financeira a produto do catálogo.

## 10. Tecnologias identificadas por categoria
### Front-end
- React 18
- React Router DOM 7
- Zustand
- Lucide React

### Back-end
- Node.js
- Fastify
- Prisma Client
- bcryptjs
- Sharp

### Banco de dados
- PostgreSQL
- Prisma ORM (schema + migrations)

### Autenticação
- JWT (`@fastify/jwt`)
- Cookie HTTP-only (`@fastify/cookie`)
- Rate limit no login (`@fastify/rate-limit`)

### APIs e integrações
- API REST própria (`/api/...`)
- WhatsApp (`wa.me`) para conversão comercial

### Estilização
- Tailwind CSS
- CSS global com variáveis de tema

### Build e ferramentas
- Vite
- PostCSS
- Autoprefixer
- ESLint
- Prisma CLI

### Deploy ou infraestrutura
- Script de deploy para Ubuntu (Nginx, PM2, PostgreSQL, Certbot, UFW)
- `vercel.json` para build e saída estática do frontend

### Outras ferramentas
- Scripts de banco (criação/semente/migração)
- Script de otimização retroativa de imagens de upload

## 11. Tecnologias para capa/card
- React
- Fastify
- PostgreSQL
- Prisma
- Tailwind CSS
- Zustand

## 12. Tecnologias para página de detalhes
- React 18
- React Router DOM 7
- Zustand
- Vite
- Tailwind CSS
- Node.js
- Fastify
- Prisma ORM
- PostgreSQL
- JWT
- bcryptjs
- Sharp
- Nginx
- PM2

## 13. Diferenciais técnicos
- Projeto full stack com separação clara entre front-end público e backoffice.
- Painel administrativo funcional para operação real do cliente.
- Modelagem de dados relacional para produtos, avaliações e financeiro.
- Tratamento de valores monetários com tipo `Decimal` no banco.
- Upload de imagens com redimensionamento e conversão para WebP.
- Controle de acesso administrativo com cookie HTTP-only e validação de sessão.
- Roteiro de deploy automatizado para ambiente Linux com HTTPS.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
- Consigo conduzir projeto real de cliente do protótipo até produção.
- Entrego solução full stack com foco em resultado de negócio.
- Transformo restrições de orçamento em escopo viável e funcional.
- Estruturo backend com autenticação, banco relacional e APIs organizadas.
- Implemento front-end com identidade visual forte e navegação clara.
- Construo base técnica preparada para evolução de produto (ex.: checkout futuro).

## 15. Texto focado em recrutadores
Projeto full stack de cliente real, com entrega completa de produto: experiência pública em React, API Fastify com Prisma/PostgreSQL, autenticação administrativa, CRUD de catálogo, upload de mídia e módulo financeiro operacional. Evidencia capacidade de decisão técnica pragmática, execução ponta a ponta e publicação em produção.

## 16. Texto focado em clientes de freelance
Este projeto mostra meu modelo de entrega para negócios que querem começar com investimento inicial controlado: um site profissional para vender melhor, com painel simples para você gerenciar produtos e operação no dia a dia. Também deixo a estrutura pronta para evolução futura, como checkout completo dentro do site.

## 17. SEO title
**NOARA Semi Joias | MVP E-commerce Full Stack com React, Fastify e PostgreSQL**

## 18. SEO description
Projeto full stack para cliente real de semi joias: catálogo online com filtros, página de produto, avaliações, painel admin, upload de imagens e controle financeiro, já publicado em produção.

## 19. SEO keywords
- noara semi joias
- e-commerce mvp
- projeto full stack react
- fastify prisma postgresql
- painel administrativo de produtos
- upload de imagens webp
- catálogo com filtros
- portfólio desenvolvedor full stack

## 20. CTA sugerido
**Ver projeto em produção e detalhes técnicos**

## 21. Fatos encontrados no código
- Estrutura do projeto separada em `frontend` e `backend`.
- Frontend com React, Vite, Tailwind e roteamento com React Router.
- Backend com Fastify, Prisma e PostgreSQL.
- Modelos Prisma: `AdminUser`, `Product`, `Review`, `FinanceTransaction`.
- Rotas de autenticação: login, logout, sessão (`/api/auth/me`) e atualização de perfil (`PATCH /api/auth/me`).
- Rotas de produtos com CRUD completo.
- Rotas de avaliações com criação pública e exclusão autenticada.
- Rotas de financeiro protegidas por autenticação.
- Upload de imagens protegido, com limite e otimização para `.webp`.
- Catálogo no frontend com filtros e ordenações implementados.
- Fluxo comercial de compra no frontend apontando para WhatsApp.
- Painel admin com dashboard, produtos, financeiro e perfil.
- Scripts de deploy e infraestrutura presentes no repositório.
- Não foram encontrados testes automatizados no escopo analisado.

## 22. Hipóteses
- **Hipótese:** o lançamento financeiro manual foi escolhido porque, no fluxo atual via WhatsApp, o valor final da venda pode variar (ex.: negociação, frete, combinação de peças), então não há geração automática confiável de entrada.

## 23. Pontos para revisão manual
- Validar se todos os textos institucionais e números de prova social do front-end estão alinhados com dados reais da marca.
- Definir roadmap técnico para migração do fluxo WhatsApp para checkout interno (pedido, pagamento, status, estoque).
- Revisar políticas legais exibidas no site (privacidade, trocas, termos) para garantir conformidade com o negócio real.
- Confirmar se o acesso administrativo por rota/atalho oculto deve permanecer em produção.
- Planejar estratégia de anti-spam para avaliações públicas quando o volume crescer.

## 24. JSON final para integração futura no React
```json
{
  "name": "NOARA Commerce Platform",
  "shortName": "NOARA Semi Joias",
  "slug": "noara-semi-joias",
  "ultraShortSummary": "E-commerce MVP full stack para semi joias, com vitrine pública e painel admin para catálogo, avaliações, imagens e financeiro.",
  "shortSummary": "Projeto real de cliente para a NOARA Semi Joias, construído e publicado em produção após fase de protótipo. Hoje opera com conversão via WhatsApp e backoffice próprio para gestão de produtos, avaliações, uploads e lançamentos financeiros.",
  "mediumDescription": "A solução foi desenvolvida como um MVP de e-commerce com foco em investimento inicial enxuto e operação rápida. O site público entrega posicionamento de marca, catálogo filtrável, página de produto e contato comercial direto por WhatsApp. No administrativo, há login protegido, CRUD de produtos, upload otimizado de imagens, controle de avaliações e módulo financeiro simples para lançamentos de entrada/saída, atendendo a rotina da dona da loja.",
  "fullDescription": "A NOARA Commerce Platform é uma aplicação full stack criada para um cliente real do segmento de semi joias. O projeto começou como protótipo visual e, após aprovação, foi evoluído e publicado em produção no domínio informado pelo cliente. A arquitetura foi separada em frontend React/Vite para experiência pública e backend Fastify/Prisma/PostgreSQL para autenticação, catálogo, avaliações, uploads e financeiro. Nesta fase, o funil de venda é via WhatsApp para manter baixo custo inicial, com base técnica preparada para evolução futura para checkout completo dentro do site.",
  "problemSolved": "Colocar a marca no ar com investimento inicial básico, oferecendo catálogo online profissional, canal comercial simples via WhatsApp e painel interno para operação diária.",
  "projectGoal": "Entregar um MVP comercial funcional para cliente real e criar base técnica para evolução futura para e-commerce completo com checkout interno.",
  "mainFeatures": [
    "Site público com home, coleção, produto, sobre, ateliê, contato e 404",
    "Catálogo com filtros por categoria, material, pedra, ocasião e faixa de preço",
    "Ordenação por recentes, preço e avaliação",
    "Página de produto com galeria, detalhes, avaliações e relacionados",
    "Conversão comercial via WhatsApp",
    "Cadastro público de avaliações",
    "Painel admin com login protegido",
    "Dashboard operacional",
    "CRUD de produtos",
    "Upload de imagens com processamento no backend",
    "Controle financeiro com entradas e saídas",
    "Vínculo opcional de entrada financeira a produto"
  ],
  "technologiesCard": [
    "React",
    "Fastify",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Zustand"
  ],
  "technologiesDetails": {
    "frontend": [
      "React 18",
      "React Router DOM 7",
      "Zustand",
      "Lucide React"
    ],
    "backend": [
      "Node.js",
      "Fastify",
      "Prisma Client",
      "bcryptjs",
      "Sharp"
    ],
    "database": [
      "PostgreSQL",
      "Prisma ORM"
    ],
    "authentication": [
      "JWT",
      "Cookie HTTP-only",
      "Rate limit no login"
    ],
    "apisAndIntegrations": [
      "API REST própria",
      "WhatsApp (wa.me)"
    ],
    "styling": [
      "Tailwind CSS",
      "CSS global com variáveis de tema"
    ],
    "buildAndTools": [
      "Vite",
      "PostCSS",
      "Autoprefixer",
      "ESLint",
      "Prisma CLI"
    ],
    "deployOrInfrastructure": [
      "Ubuntu",
      "Nginx",
      "PM2",
      "PostgreSQL",
      "Certbot",
      "UFW",
      "vercel.json"
    ],
    "other": [
      "Scripts utilitários de banco",
      "Script de otimização de imagens"
    ]
  },
  "technicalHighlights": [
    "Arquitetura full stack com separação front/back",
    "Painel administrativo funcional para cliente real",
    "Modelagem relacional de catálogo, reviews e financeiro",
    "Uso de Decimal no banco para valores monetários",
    "Upload com otimização e padronização de imagens em WebP",
    "Autenticação admin com sessão em cookie HTTP-only",
    "Deploy automatizado em servidor Linux com HTTPS"
  ],
  "developerSkillsDemonstrated": [
    "Entrega full stack ponta a ponta",
    "Trabalho com cliente real e validação de escopo",
    "Implementação de API e regras de negócio",
    "Modelagem de dados com Prisma/PostgreSQL",
    "Construção de painel administrativo",
    "UI/UX de vitrine digital",
    "Deploy e operação inicial em produção"
  ],
  "recruiterText": "Projeto full stack de cliente real, com entrega completa de produto: frontend React para experiência pública e backend Fastify/Prisma/PostgreSQL para autenticação, catálogo, avaliações, uploads e financeiro, incluindo publicação em produção.",
  "freelanceClientText": "Exemplo de entrega para negócio que quer começar com investimento inicial básico: site profissional para conversão e painel simples para gestão diária, com arquitetura pronta para evolução futura para checkout interno.",
  "seo": {
    "title": "NOARA Semi Joias | MVP E-commerce Full Stack com React, Fastify e PostgreSQL",
    "description": "Projeto full stack para cliente real de semi joias: catálogo online com filtros, página de produto, avaliações, painel admin, upload de imagens e controle financeiro, já publicado em produção.",
    "keywords": [
      "noara semi joias",
      "e-commerce mvp",
      "projeto full stack react",
      "fastify prisma postgresql",
      "painel administrativo de produtos",
      "upload de imagens webp",
      "catálogo com filtros",
      "portfólio desenvolvedor full stack"
    ],
    "category": "E-commerce Full Stack"
  },
  "cta": "Ver projeto em produção e detalhes técnicos"
}
```
