# ProjetoWeb_ClinicaMedica_UH

- **Projeto analisado:** `/home/mateus/Documentos/Projetos/meus-projetos/ProjetoWeb_ClinicaMedica_UH`
- **Data de geração:** 2026-05-15
- **Contexto informado pelo autor:** trabalho acadêmico da disciplina XDES03 (UNIFEI), com nota **9,5**.

## 1. Nome profissional do projeto
**UH Clínica Web — Aplicação Institucional com Fluxos de Atendimento Digital**

## 2. Nome curto para exibir no portfólio
**UH Clínica Web**

## 3. Resumo ultra curto
Aplicação web full stack de clínica fictícia com páginas institucionais e fluxo completo de contato, cadastro e login.

## 4. Resumo curto
Projeto acadêmico full stack da disciplina XDES03, focado em transformar um site institucional de clínica em uma experiência funcional. Além da apresentação da clínica, implementa fluxo completo de formulário de contato, cadastro de conta e login com integração front-end/back-end.

## 5. Descrição média
A UH Clínica Web é uma aplicação construída com React no front-end e Node.js/Express no back-end para simular a presença digital de uma clínica médica fictícia. O sistema reúne páginas institucionais (Início, Sobre Nós e Contato), navegação SPA e elementos de conversão como botão de WhatsApp e mapa da localização.

No lado funcional, o projeto implementa um fluxo completo de interação: o visitante pode enviar mensagem pelo formulário de contato, criar conta e fazer login. Esses fluxos são validados no front-end e enviados para APIs próprias no back-end, com persistência local em arquivos JSON para simulação de armazenamento.

## 6. Descrição completa
Este projeto foi desenvolvido como trabalho acadêmico da disciplina XDES03 e representa uma aplicação web full stack para uma clínica médica fictícia chamada UH Clínica. A proposta combina comunicação institucional com funcionalidades práticas de interação com usuário.

No front-end, a aplicação usa React com roteamento entre cinco páginas: Início, Sobre Nós, Contato, Cadastro e Login. A experiência inclui navbar responsiva, footer com informações da clínica, botão flutuante de WhatsApp, seção de especialistas em carrossel, seção institucional com narrativa da clínica e integração com mapa para localização.

No fluxo funcional, o projeto vai além de um site expositivo: implementa formulário de contato, cadastro de usuários e autenticação por login. Cada fluxo possui validação de formulário no cliente e retorno visual de sucesso/erro para o usuário. No back-end, as rotas recebem os dados e fazem persistência local em JSON, permitindo demonstrar integração completa entre interface e API.

Como peça de portfólio, o valor deste projeto está em mostrar entrega ponta a ponta com foco em produto: experiência visual, navegação, formulários reais, integração com serviços externos (Google Maps/WhatsApp) e backend funcional. Também evidencia sua atuação em **frontend, design e concepção do projeto**, além da capacidade de transformar uma proposta acadêmica em solução demonstrável e organizada.

## 7. Problema que o projeto resolve
Resolver a falta de uma presença digital estruturada para uma clínica (mesmo fictícia no contexto acadêmico), unindo:
- apresentação institucional clara;
- canal de contato direto;
- simulação de relacionamento inicial com usuário por cadastro e login.

## 8. Objetivo do projeto
Construir uma aplicação web acadêmica que simulasse um site de clínica com experiência moderna e fluxo completo de interação (contato + cadastro + login), validando a integração entre front-end React e back-end Express.

## 9. Funcionalidades principais
- Rotas para páginas: `/`, `/sobrenos`, `/contato`, `/cadastro` e `/login`.
- Navbar fixa com versão desktop/mobile e links de navegação.
- Footer com links, contato e redes sociais.
- Botão flutuante de WhatsApp para contato rápido.
- Hero principal com CTA de agendamento.
- Seção "Sobre Nós" na home com navegação para página dedicada.
- Carrossel de especialistas na página inicial.
- Página Sobre Nós com texto institucional, timeline e carrossel de imagens.
- Página de Contato com formulário validado e feedback de envio.
- Página de Cadastro com validação de campos, confirmação de senha e feedback de API.
- Página de Login com validação, retorno de erro e redirecionamento após autenticação.
- Backend com endpoints `POST /cadastro`, `POST /login` e `POST /contato`.
- Persistência local em `contas.json` e `contatos.json`.

## 10. Tecnologias identificadas por categoria
### Front-end
- React 18
- React Router DOM
- React Hook Form
- Yup
- Axios

### Back-end
- Node.js
- Express

### Banco de dados
- Arquivos JSON locais (`contas.json` e `contatos.json`) como persistência simulada

### Autenticação
- Login por e-mail e senha via endpoint próprio (`/login`)
- Sem token/sessão persistente no código analisado

### APIs e integrações
- Google Maps via `@react-google-maps/api`
- Link de atendimento via WhatsApp API

### Estilização
- Tailwind CSS
- CSS global com variáveis de tema
- React Icons

### Build e ferramentas
- Create React App (`react-scripts`)
- Testing Library (estrutura padrão)
- Web Vitals

### Deploy ou infraestrutura
- Não identificado no código analisado.

### Outras ferramentas
- Dependências extras declaradas no `package.json` sem uso direto confirmado no código-fonte atual (ex.: MUI, React Bootstrap, slick).

## 11. Tecnologias para capa/card
- React
- Node.js
- Express
- React Router DOM
- React Hook Form + Yup
- Tailwind CSS

## 12. Tecnologias para página de detalhes
- React 18
- React Router DOM
- Axios
- React Hook Form
- Yup
- Tailwind CSS
- React Icons
- Node.js
- Express
- `@react-google-maps/api`
- Persistência em JSON local

## 13. Diferenciais técnicos
- Entrega full stack funcional (interface + API + persistência).
- Fluxo completo de formulários: contato, cadastro e login.
- Validação de entrada no front-end com feedback de erro/sucesso.
- Estrutura modular por páginas e componentes reutilizáveis.
- Integração prática com Google Maps e WhatsApp para contexto realista de negócio local.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
Este projeto demonstra sua capacidade de:
- construir interfaces React com foco em experiência do usuário;
- transformar ideias de produto em telas e fluxos navegáveis;
- estruturar formulários com validação e integração com API;
- colaborar em projeto acadêmico em equipe com entrega consistente;
- atuar em **frontend, design e definição de direção do projeto**.

## 15. Texto focado em recrutadores
Projeto acadêmico full stack que mostra boa base prática de desenvolvimento web: React com rotas e componentes, formulários validados, integração com backend Express e persistência de dados para simulação de uso real. É um trabalho que evidencia execução completa, cuidado visual e entendimento de fluxo de usuário, com resultado acadêmico de **nota 9,5** (informado pelo autor).

## 16. Texto focado em clientes de freelance
Mesmo sendo um projeto acadêmico, ele demonstra exatamente o tipo de entrega útil para pequenos negócios: site institucional com aparência profissional, páginas organizadas, contato direto por WhatsApp, formulário de mensagem e fluxo de cadastro/login integrado ao backend. Mostra capacidade de criar soluções web sob medida com foco em clareza, usabilidade e comunicação do negócio.

## 17. SEO title
**UH Clínica Web | Projeto Full Stack com React, Node.js e Express**

## 18. SEO description
Aplicação web acadêmica de clínica médica fictícia com páginas institucionais, formulário de contato, cadastro e login, desenvolvida com React no front-end e Node.js/Express no back-end.

## 19. SEO keywords
- projeto react node
- site clínica médica fictícia
- portfólio full stack
- cadastro e login com express
- formulário de contato react
- integração google maps react
- integração whatsapp site
- trabalho acadêmico programação web

## 20. CTA sugerido
**Ver fluxo completo: Contato, Cadastro e Login em ação**

## 21. Fatos encontrados no código
- O README define o projeto como trabalho acadêmico da disciplina XDES03 (UNIFEI) para uma clínica fictícia.
- O front-end possui cinco rotas principais: home, sobre nós, contato, cadastro e login.
- O backend implementa três rotas `POST`: `/cadastro`, `/login` e `/contato`.
- O cadastro verifica e-mail duplicado antes de salvar em `contas.json`.
- O login compara e-mail/senha com dados persistidos localmente em JSON.
- O contato salva mensagens em `contatos.json`.
- Os formulários usam `react-hook-form` com `yupResolver` para validação.
- O mapa usa `@react-google-maps/api`.
- Há botão de WhatsApp com link direto para atendimento.
- O tema visual usa Tailwind + variáveis CSS customizadas.
- A senha é persistida em texto simples (hash de senha está comentado no backend).

## 22. Hipóteses
- **Hipótese:** a execução do backend é feita a partir da pasta `back`, já que o código lê/escreve `contas.json` e `contatos.json` com caminho relativo.
- **Hipótese:** parte das dependências declaradas no `package.json` foi herdada de experimentos anteriores, pois não há uso direto delas no código-fonte atual.

## 23. Pontos para revisão manual
- Confirmar se você quer manter a nota 9,5 visível em todas as versões do texto (site/LinkedIn/CV) ou apenas em algumas.
- Verificar se deseja explicitar no portfólio que os dados da clínica são 100% fictícios.
- Revisar segurança para eventual evolução futura (hash de senha e estratégia de autenticação persistente).
- Revisar a dependência `cors` no backend (`index.js` usa, mas `back/package.json` não declara).
- Atualizar o teste padrão do CRA (`App.test.js`) para refletir os componentes reais do projeto.

## 24. JSON final para integração futura no React
```json
{
  "name": "UH Clínica Web — Aplicação Institucional com Fluxos de Atendimento Digital",
  "shortName": "UH Clínica Web",
  "slug": "uh-clinica-web",
  "ultraShortSummary": "Aplicação web full stack de clínica fictícia com páginas institucionais e fluxo completo de contato, cadastro e login.",
  "shortSummary": "Projeto acadêmico full stack da disciplina XDES03, focado em transformar um site institucional de clínica em uma experiência funcional. Além da apresentação da clínica, implementa fluxo completo de formulário de contato, cadastro de conta e login com integração front-end/back-end.",
  "mediumDescription": "A UH Clínica Web é uma aplicação construída com React no front-end e Node.js/Express no back-end para simular a presença digital de uma clínica médica fictícia. O sistema reúne páginas institucionais, navegação SPA e elementos de conversão como botão de WhatsApp e mapa da localização. No lado funcional, implementa formulário de contato, criação de conta e login com validação no cliente e persistência local em JSON.",
  "fullDescription": "Este projeto foi desenvolvido como trabalho acadêmico da disciplina XDES03 e representa uma aplicação web full stack para uma clínica médica fictícia. A aplicação combina páginas institucionais com fluxos funcionais de contato, cadastro e login. No front-end, utiliza React com estrutura modular de componentes e rotas. No back-end, usa Express com endpoints para receber e persistir dados em arquivos JSON. Como projeto de portfólio, demonstra entrega ponta a ponta, integração entre camadas e atuação em frontend, design e concepção do produto.",
  "problemSolved": "Centralizar a presença digital de uma clínica fictícia em um único sistema com informações institucionais e fluxo funcional de contato e autenticação.",
  "projectGoal": "Simular, em contexto acadêmico, uma aplicação web de clínica que unisse apresentação institucional e fluxo completo de interação (contato, cadastro e login) com integração front-end/back-end.",
  "mainFeatures": [
    "Navegação SPA com 5 páginas",
    "Navbar responsiva e footer institucional",
    "Botão de contato via WhatsApp",
    "Seções institucionais e carrosséis visuais",
    "Mapa de localização com Google Maps",
    "Formulário de contato com validação",
    "Cadastro com validação e verificação de e-mail duplicado",
    "Login com validação e redirecionamento",
    "API Express com rotas para contato, cadastro e login",
    "Persistência local em arquivos JSON"
  ],
  "technologiesCard": [
    "React",
    "Node.js",
    "Express",
    "React Router DOM",
    "React Hook Form + Yup",
    "Tailwind CSS"
  ],
  "technologiesDetails": {
    "frontend": [
      "React 18",
      "React Router DOM",
      "React Hook Form",
      "Yup",
      "Axios"
    ],
    "backend": [
      "Node.js",
      "Express"
    ],
    "database": [
      "JSON local (contas.json e contatos.json)"
    ],
    "authentication": [
      "Login por e-mail e senha (sem token persistente no código analisado)"
    ],
    "apisAndIntegrations": [
      "@react-google-maps/api",
      "WhatsApp API (link direto)"
    ],
    "styling": [
      "Tailwind CSS",
      "CSS global com variáveis",
      "React Icons"
    ],
    "buildAndTools": [
      "react-scripts (Create React App)",
      "Testing Library",
      "Web Vitals"
    ],
    "deployOrInfrastructure": [
      "Não identificado no código analisado"
    ],
    "other": [
      "Projeto acadêmico com nota 9,5 (informação do autor)",
      "Foco principal do autor em frontend, design e concepção"
    ]
  },
  "technicalHighlights": [
    "Integração full stack funcional",
    "Fluxo completo de contato, cadastro e login",
    "Validação de formulários com feedback visual",
    "Organização modular por páginas e componentes",
    "Integração com Google Maps e WhatsApp"
  ],
  "developerSkillsDemonstrated": [
    "Desenvolvimento frontend em React",
    "Integração com APIs",
    "Validação de formulários",
    "Modelagem de fluxo de usuário",
    "Design de interface e consistência visual",
    "Colaboração em projeto acadêmico"
  ],
  "recruiterText": "Projeto acadêmico full stack que evidencia fundamentos sólidos de desenvolvimento web: React com roteamento e componentes, formulários validados, integração com backend Express e persistência de dados. Resultado acadêmico com nota 9,5 (informada pelo autor).",
  "freelanceClientText": "Demonstra capacidade de criar sites institucionais modernos com funcionalidades úteis de atendimento digital, como contato, cadastro e login, mantendo boa organização visual e técnica.",
  "seo": {
    "title": "UH Clínica Web | Projeto Full Stack com React, Node.js e Express",
    "description": "Aplicação web acadêmica de clínica médica fictícia com páginas institucionais, formulário de contato, cadastro e login, desenvolvida com React no front-end e Node.js/Express no back-end.",
    "keywords": [
      "projeto react node",
      "site clínica médica fictícia",
      "portfólio full stack",
      "cadastro e login com express",
      "formulário de contato react",
      "integração google maps react",
      "integração whatsapp site",
      "trabalho acadêmico programação web"
    ],
    "category": "Aplicação Web Full Stack (Acadêmico)"
  },
  "cta": "Ver fluxo completo: Contato, Cadastro e Login em ação"
}
```
