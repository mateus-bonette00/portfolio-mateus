# Projeto Analisado
- **Pasta analisada:** `/home/mateus/Documentos/Projetos/meus-projetos/curso-pilates-gabi`
- **Data da geração:** `2026-05-15`
- **Contexto informado por Mateus:** Cliente real; objetivo principal de fortalecer marca e vender mais; texto com foco em recrutadores e clientes freelance; posicionamento como solução replicável para infoprodutos.

## 1. Nome profissional do projeto
**Funil de Conversão para Infoprodutos com Quiz Personalizado (Case Pilates 8GX)**

## 2. Nome curto para exibir no portfólio
**Quiz + Landing 8GX**

## 3. Resumo ultra curto
Landing de alta conversão em Next.js com quiz de perfil, personalização de oferta e rastreamento de eventos para venda de infoproduto.

## 4. Resumo curto
Projeto real de cliente para fortalecer marca profissional e aumentar vendas de curso online.  
Combina quiz interativo, landing page comercial, prova social, oferta com planos e integração com checkout externo.

## 5. Descrição média
Este projeto entrega um funil digital completo para infoprodutos: qualifica o visitante com quiz, personaliza a comunicação com base nas respostas e direciona para uma página de oferta com CTAs de compra. A implementação foi feita em Next.js com TypeScript, arquitetura componentizada e foco em experiência responsiva.

Além da interface, o projeto inclui rastreamento de eventos com Meta Pixel no cliente e envio server-side para a Conversions API, ajudando a medir interesse, cliques e intenção de compra. Embora o case seja do nicho de Pilates, a estrutura foi construída de forma reaproveitável para outros produtos digitais.

## 6. Descrição completa
Este é um projeto web comercial desenvolvido para cliente real, com objetivo de fortalecer posicionamento de marca e gerar mais vendas no digital. A aplicação foi construída como um funil de conversão: o usuário é engajado por um quiz de perfil, recebe direcionamento personalizado e segue para uma landing page de oferta com argumentos, provas sociais e chamadas para ação.

No quiz, a pessoa informa dados como peso, altura, idade, objetivos, nível de experiência, rotina disponível e dificuldades. O fluxo valida os dados por etapa, salva o perfil no navegador e usa essas informações para adaptar trechos da comunicação na landing, como headline e plano sugerido.

Na página de oferta, o projeto reúne elementos típicos de venda de infoproduto: seção hero, vídeo de apresentação, benefícios, módulos do curso, prévia de exercícios, depoimentos em carrossel, FAQ, planos de compra e botão flutuante de WhatsApp. Os botões de compra abrem links externos de checkout.

No lado técnico, o projeto também cuida de mensuração: eventos importantes (início e conclusão do quiz, cliques em CTA, clique de compra e visualização da landing) são enviados ao Pixel e à Conversions API por rota server-side do Next.js. Isso reforça o valor de negócio do projeto, porque conecta desenvolvimento front-end com análise de funil.

Como peça de portfólio, o case demonstra capacidade de construir solução completa orientada a resultado comercial, com base reutilizável para outros nichos de infoproduto além de Pilates.

## 7. Problema que o projeto resolve
Resolver a dificuldade de transformar tráfego em oportunidades reais de venda, por meio de:
- qualificação rápida de perfil;
- personalização de mensagem;
- oferta estruturada com múltiplos pontos de conversão;
- encaminhamento direto para checkout e canal de contato.

## 8. Objetivo do projeto
Criar uma estrutura de funil digital para fortalecer a marca da profissional e vender mais, usando uma experiência guiada do quiz até a oferta final.

## 9. Funcionalidades principais
- Redirecionamento automático de `/` para `/landing`.
- Quiz de 11 etapas com validação de respostas.
- Coleta de objetivos, rotina, preferências, local de treino e dificuldades.
- Seleção visual de tipo corporal por imagens.
- Tela de resultado com resumo do perfil antes da conversão.
- Persistência do perfil no `localStorage`.
- Controle de exibição de modal pós-quiz via `sessionStorage`.
- Personalização dinâmica de headline, bullets e selo de plano sugerido.
- Landing page longa com seções de oferta, benefícios, módulos, exercícios, depoimentos e FAQ.
- Carrossel de depoimentos com autoplay e navegação manual.
- Banner e bloco de contagem regressiva de oferta.
- Dois planos comerciais (Básico e Plus) com botões dedicados.
- Abertura de checkout externo em nova aba.
- Botão flutuante de WhatsApp para contato direto.
- Tracking de eventos no cliente (Pixel) e no servidor (Conversions API).
- Metadata de SEO, Open Graph e Twitter.

## 10. Tecnologias identificadas por categoria
### Front-end
- Next.js 16 (App Router)
- React 19
- TypeScript

### Back-end
- Route Handler do Next.js (`app/api/fb-event/route.ts`)
- `fetch` server-side para API externa

### Banco de dados
Não identificado no código analisado.

### Autenticação
Não identificado no código analisado.

### APIs e integrações
- Meta Pixel (cliente)
- Facebook/Meta Conversions API (server-side)
- Kiwify (links de checkout)
- WhatsApp (`wa.me`)

### Estilização
- CSS Modules
- CSS global com design tokens

### Build e ferramentas
- npm scripts (`dev`, `build`, `start`, `lint`)
- ESLint (config Next + TypeScript)

### Deploy ou infraestrutura
- Não identificado no código analisado.
- Documentação cita Vercel como recomendação de deploy.

### Outras ferramentas
- `localStorage`
- `sessionStorage`
- `next/image`
- `next/script`

## 11. Tecnologias para capa/card
- Next.js
- React
- TypeScript
- CSS Modules
- Meta Pixel + CAPI
- Kiwify

## 12. Tecnologias para página de detalhes
- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules
- Route Handlers (API no Next.js)
- Meta Pixel
- Facebook Conversions API
- ESLint
- `localStorage` / `sessionStorage`
- Integração com checkout Kiwify
- Integração com WhatsApp

## 13. Diferenciais técnicos
- Funil completo (quiz + personalização + oferta + checkout) em uma única aplicação.
- Personalização de conteúdo baseada em perfil tipado.
- Estratégia de tracking híbrido: client-side e server-side.
- Código organizado por componentes reutilizáveis.
- Estrutura facilmente adaptável para outros infoprodutos com troca de conteúdo e URLs.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
- Capacidade de transformar necessidade de negócio em solução web funcional.
- Domínio de React/Next.js com TypeScript em projeto real.
- Entrega de interface comercial com foco em UX e conversão.
- Integração prática com ferramentas de marketing e vendas.
- Visão de produto: não só página bonita, mas fluxo que conduz o usuário até a ação.

## 15. Texto focado em recrutadores
Projeto real de cliente que demonstra minha capacidade de construir produtos web orientados a resultado. Desenvolvi um funil completo em Next.js com quiz de qualificação, personalização dinâmica de conteúdo, landing de conversão e tracking de eventos com Pixel + Conversions API. O case evidencia domínio técnico de front-end moderno, organização de código e visão de negócio aplicada ao desenvolvimento.

## 16. Texto focado em clientes de freelance
Este projeto mostra como posso estruturar uma máquina de vendas digital para infoprodutos: desde o diagnóstico do perfil do visitante até a oferta com CTA para checkout e contato direto no WhatsApp. A mesma base pode ser adaptada para outros nichos (mentorias, cursos, programas de saúde, educação e serviços), acelerando entrega e reduzindo custo de implementação.

## 17. SEO title
Funil de Conversão para Infoprodutos com Quiz | Case em Next.js e TypeScript

## 18. SEO description
Case real de funil digital com quiz personalizado, landing page de vendas, tracking com Meta Pixel/Conversions API e integração com checkout. Projeto desenvolvido em Next.js, React e TypeScript com foco em conversão.

## 19. SEO keywords
- funil de conversão
- landing page para infoproduto
- quiz personalizado
- next.js
- react
- typescript
- meta pixel
- conversions api
- kiwify
- desenvolvimento web freelance

## 20. CTA sugerido
**Ver implementação do funil Quiz + Landing para infoprodutos**

## 21. Fatos encontrados no código
- O projeto usa Next.js `16.0.10`, React `19.2.1` e TypeScript.
- A rota inicial redireciona para `/landing`.
- Existe quiz com 11 etapas e validações por campo.
- O perfil do quiz é salvo em `localStorage` na chave `gx_quiz_profile`.
- O estado de abertura de modal pós-quiz usa `sessionStorage` (`gx_show_quiz_modal`).
- A landing gera conteúdo personalizado com `generatePersonalizedContent`.
- Há dois links de checkout distintos: plano básico e plano plus.
- Há botão flutuante com link direto de WhatsApp.
- Eventos de tracking são disparados no front e enviados para `/api/fb-event`.
- Existe rota API que envia eventos para Graph API da Meta.
- Existem metadata de SEO, Open Graph e Twitter no `layout.tsx`.
- O projeto não apresenta banco de dados e não apresenta autenticação.
- Não foram encontrados testes automatizados na base analisada.

## 22. Hipóteses
- **(Hipótese)** A estratégia de quiz + personalização foi escolhida para aumentar conversão no checkout; o código implementa o mecanismo, mas não traz relatório de métricas.
- **(Hipótese)** Parte dos números e promessas de copy comercial da landing depende de validação externa do cliente antes de publicar no portfólio como evidência de resultado.

## 23. Pontos para revisão manual
- Revisar segurança: `FB_ACCESS_TOKEN` está hardcoded em `app/api/fb-event/route.ts`; ideal mover para variável de ambiente.
- Revisar coerência entre README e comportamento atual da rota inicial (`README` menciona `/quiz`, código redireciona para `/landing`).
- Confirmar validade atual dos links de checkout e WhatsApp.
- Validar textos sensíveis de marketing (promessas e números públicos) antes da publicação do case.
- Decidir se componentes não utilizados no fluxo atual (`StickyMobileCTA`, `VideoBlock`, `Testimonials`) devem ser removidos ou reaproveitados.
- Ajustar warnings de lint já detectados (função não usada e regra de `<img>` no `noscript` do Pixel).

## 24. JSON final para integração futura no React
```json
{
  "name": "Funil de Conversão para Infoprodutos com Quiz Personalizado (Case Pilates 8GX)",
  "shortName": "Quiz + Landing 8GX",
  "slug": "curso-pilates-gabi",
  "ultraShortSummary": "Landing de alta conversão em Next.js com quiz de perfil, personalização de oferta e rastreamento de eventos para venda de infoproduto.",
  "shortSummary": "Projeto real de cliente para fortalecer marca profissional e aumentar vendas de curso online. Combina quiz interativo, landing page comercial, prova social, oferta com planos e integração com checkout externo.",
  "mediumDescription": "Este projeto entrega um funil digital completo para infoprodutos: qualifica o visitante com quiz, personaliza a comunicação com base nas respostas e direciona para uma página de oferta com CTAs de compra. A implementação foi feita em Next.js com TypeScript, arquitetura componentizada e foco em experiência responsiva. Além da interface, inclui tracking com Meta Pixel no cliente e Conversions API no servidor.",
  "fullDescription": "Projeto web comercial desenvolvido para cliente real com foco em fortalecimento de marca e aumento de vendas. O fluxo combina quiz de perfil, personalização de conteúdo e landing page de oferta com benefícios, módulos, prova social, FAQ, planos comerciais e direcionamento para checkout externo. Também implementa rastreamento de eventos no cliente e no servidor, conectando desenvolvimento front-end com estratégia de marketing e conversão. Apesar do case ser de Pilates, a arquitetura é reaproveitável para outros infoprodutos.",
  "problemSolved": "Transforma visitantes em oportunidades de venda por meio de qualificação de perfil, personalização de mensagem e oferta estruturada com CTAs de conversão.",
  "projectGoal": "Fortalecer a marca da profissional e vender mais com um funil digital guiado do quiz até o checkout.",
  "mainFeatures": [
    "Redirecionamento de / para /landing",
    "Quiz de 11 etapas com validação",
    "Resumo final de perfil",
    "Persistência de dados no localStorage",
    "Modal pós-quiz controlado por sessionStorage",
    "Personalização dinâmica de conteúdo",
    "Landing completa de vendas",
    "Carrossel de depoimentos",
    "FAQ em accordion",
    "Contagem regressiva de oferta",
    "Dois planos com checkout externo",
    "Botão flutuante de WhatsApp",
    "Tracking de eventos com Pixel + CAPI"
  ],
  "technologiesCard": [
    "Next.js",
    "React",
    "TypeScript",
    "CSS Modules",
    "Meta Pixel + CAPI",
    "Kiwify"
  ],
  "technologiesDetails": {
    "frontend": [
      "Next.js 16",
      "React 19",
      "TypeScript"
    ],
    "backend": [
      "Next.js Route Handler",
      "Fetch server-side"
    ],
    "database": [],
    "authentication": [],
    "apisAndIntegrations": [
      "Meta Pixel",
      "Facebook Conversions API",
      "Kiwify",
      "WhatsApp"
    ],
    "styling": [
      "CSS Modules",
      "Global CSS Tokens"
    ],
    "buildAndTools": [
      "npm scripts",
      "ESLint",
      "TypeScript"
    ],
    "deployOrInfrastructure": [],
    "other": [
      "localStorage",
      "sessionStorage",
      "next/image",
      "next/script"
    ]
  },
  "technicalHighlights": [
    "Funil de conversão completo em aplicação única",
    "Personalização de copy baseada em perfil do usuário",
    "Tracking híbrido client-side e server-side",
    "Arquitetura componentizada e reaproveitável",
    "Base adaptável para outros infoprodutos"
  ],
  "developerSkillsDemonstrated": [
    "Desenvolvimento front-end com React e Next.js",
    "Modelagem de dados com TypeScript",
    "Construção de UX orientada a conversão",
    "Integração com ferramentas de marketing e vendas",
    "Organização de código para manutenção e escala"
  ],
  "recruiterText": "Projeto real de cliente que demonstra construção de produto web orientado a resultado. Implementa quiz, personalização, landing de conversão e tracking com Pixel + Conversions API em stack moderna com Next.js, React e TypeScript.",
  "freelanceClientText": "Solução prática e replicável para infoprodutos: quiz de qualificação, oferta estruturada, CTA para checkout e canal direto de contato. Pode ser adaptada para diferentes nichos com baixo retrabalho.",
  "seo": {
    "title": "Funil de Conversão para Infoprodutos com Quiz | Case em Next.js e TypeScript",
    "description": "Case real de funil digital com quiz personalizado, landing page de vendas, tracking com Meta Pixel/Conversions API e integração com checkout. Projeto desenvolvido em Next.js, React e TypeScript com foco em conversão.",
    "keywords": [
      "funil de conversão",
      "landing page para infoproduto",
      "quiz personalizado",
      "next.js",
      "react",
      "typescript",
      "meta pixel",
      "conversions api",
      "kiwify",
      "desenvolvimento web freelance"
    ],
    "category": "Web App de Marketing e Conversão"
  },
  "cta": "Ver implementação do funil Quiz + Landing para infoprodutos"
}
```
