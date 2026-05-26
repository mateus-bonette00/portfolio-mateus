# OdontoClin Agenda Inteligente

## Metadados
- Caminho analisado: `/home/mateus/Documentos/Projetos/meus-projetos/odontoclin`
- Data de geração: `2026-05-15`

## 1. Nome profissional do projeto
OdontoClin Agenda Inteligente

## 2. Nome curto para exibir no portfólio
OdontoClin Agenda

## 3. Resumo ultra curto
Sistema real de agenda odontológica com confirmação por WhatsApp e controle por perfil de usuário.

## 4. Resumo curto
Aplicação full stack para a rotina de uma clínica odontológica, com agenda semanal, confirmação pública de consulta e automações via WhatsApp.

O projeto está em produção, foi usado por uma clínica real e substituiu um fluxo que antes era manual e desorganizado.

## 5. Descrição média
O OdontoClin foi desenvolvido para uma clínica odontológica real e está em uso em produção. A proposta foi centralizar a agenda, reduzir o trabalho manual da equipe e deixar o controle de consultas mais claro para secretária e dentistas.

Além do painel interno, o sistema também conversa com o paciente por link público e por WhatsApp, com confirmação, cancelamento e lembretes automáticos. Isso torna o projeto forte para portfólio porque mostra solução real de negócio, com uso prático e não apenas uma interface bonita.

## 6. Descrição completa
O OdontoClin é uma aplicação full stack voltada para a rotina de uma clínica odontológica. No front-end, ele entrega uma agenda semanal visual, criação e edição de consultas, definição de tipo de atendimento, registro de procedimento, telefone do paciente e acompanhamento de status da consulta.

Na operação diária, o sistema ajuda dois perfis principais: secretária e dentista. A secretária consegue gerenciar a agenda completa. O dentista acessa a própria agenda e trabalha dentro das permissões definidas no sistema. Isso deixa o fluxo mais claro, reduz erro operacional e melhora a organização do atendimento.

No back-end, a API trata autenticação com JWT, autorização por papel e regras de negócio importantes para a clínica. O banco de dados impede conflito de horário para o mesmo dentista, o que evita que a agenda seja salva com sobreposição de consultas. O projeto também integra WhatsApp Web para envio de mensagens, gera QR code para conexão e roda lembretes automáticos para consultas próximas.

O ponto mais forte do projeto é que ele une solução técnica e problema real. Antes, o processo era manual, com mais ligações, menos controle e mais chance de perda de confirmação. Agora, a clínica tem um sistema centralizado para agenda, confirmação, cancelamento e comunicação com o paciente. Como o projeto segue em produção e continua evoluindo, ele mostra não só capacidade de construir, mas também de manter e melhorar um produto real.

## 7. Problema que o projeto resolve
O projeto resolve a desorganização da rotina de agendamento de uma clínica odontológica.

Antes, a equipe dependia de controles manuais, ligações e acompanhamento separado de confirmações e cancelamentos. Isso deixava o processo mais lento e confuso. O OdontoClin centraliza tudo em um só sistema.

## 8. Objetivo do projeto
Criar um sistema simples e prático para organizar consultas odontológicas, reduzir trabalho manual da equipe e dar mais controle sobre confirmações, cancelamentos e agenda.

## 9. Funcionalidades principais
- Login com usuário, senha e persistência de sessão.
- Controle de acesso por perfil de usuário.
- Agenda semanal com visualização por dias e horários.
- Criação e edição de agendamentos.
- Registro de paciente, telefone, procedimento, tipo de consulta e plano.
- Confirmação e cancelamento de consulta.
- Página pública para o paciente confirmar ou cancelar pelo link.
- Envio de mensagens por WhatsApp.
- Conexão com WhatsApp por QR code.
- Lembretes automáticos de consulta.
- Atualização de nome e foto de perfil.
- Troca de senha para dentistas.
- Bloqueio de conflito de horário no banco.
- Visualização da agenda com status e cores por dentista.

## 10. Tecnologias identificadas por categoria

### Front-end
- React 19
- React Router DOM
- Axios
- Dayjs
- clsx

### Back-end
- Node.js
- Express
- bcryptjs
- jsonwebtoken
- multer
- pg

### Banco de dados
- PostgreSQL
- Enums para tipo de usuário, status e tipo de consulta
- `btree_gist`
- `tstzrange`

### Autenticação
- JWT
- Bearer token
- Controle de acesso por papel

### APIs e integrações
- WhatsApp Web com `baileys`
- `qrcode`
- Envio de confirmação, cancelamento e lembrete

### Estilização
- CSS puro
- Google Fonts
- Manrope
- Sora

### Build e ferramentas
- Vite
- ESLint
- Nodemon
- dotenv
- dotenv-cli

### Deploy ou infraestrutura
- Script de deploy com SSH
- SCP para envio de arquivos
- PM2 para reinício do backend
- Variáveis de ambiente para front-end, back-end e CORS

### Outras ferramentas
- pino

## 11. Diferenciais técnicos
- Regra de conflito de horário aplicada no banco, não só na tela.
- Fluxo interno e fluxo público conectados no mesmo sistema.
- Integração com WhatsApp ligada ao uso real da clínica.
- Lembretes automáticos com controle para não reenviar a mesma consulta.
- Autorização por perfil, com dentista e secretária tendo acessos diferentes.
- Upload de foto de perfil com validação de arquivo.
- Interface pensada para uso diário, com foco em agenda e operação.

## 12. O que esse projeto demonstra sobre mim como desenvolvedor
- Consigo transformar um problema real de negócio em sistema funcional.
- Consigo trabalhar com front-end, back-end e banco de dados no mesmo projeto.
- Sei implementar autenticação, permissões e regras de acesso.
- Consigo integrar o sistema com serviços externos, como WhatsApp.
- Tenho cuidado com organização de agenda, validação e consistência dos dados.
- Consigo entregar uma interface útil para operação real, não só uma tela de demonstração.
- Consigo manter um produto em produção e pensar em evolução contínua.

## 13. Texto focado em recrutadores
O OdontoClin mostra minha capacidade de entregar uma solução full stack para um problema real de operação. O projeto reúne autenticação, permissões por perfil, agenda, confirmação pública de consulta, automações por WhatsApp e regra de banco para evitar conflito de horário. É um exemplo claro de trabalho que vai além da interface e entra na lógica do produto.

## 14. Texto focado em clientes de freelance
Esse projeto foi criado para uma clínica odontológica real e ajudou a substituir um processo manual e desorganizado. Ele centraliza agenda, confirmações, cancelamentos e comunicação com o paciente em um só sistema, reduzindo trabalho repetido e dando mais controle para a equipe. É o tipo de solução que melhora a rotina do dia a dia de forma direta.

## 15. SEO title
OdontoClin Agenda | Sistema de Agendamento Odontológico com WhatsApp

## 16. SEO description
Sistema full stack para clínica odontológica com agenda semanal, confirmação pública de consulta, lembretes automáticos e integração com WhatsApp.

## 17. SEO keywords
- sistema odontológico
- agenda odontológica
- agendamento de consultas
- React
- Node.js
- PostgreSQL
- WhatsApp
- confirmação de consulta
- portfólio full stack

## 18. CTA sugerido
Ver o fluxo completo de agendamento

## 19. Tecnologias para capa/card
- React
- Node.js
- PostgreSQL
- WhatsApp
- JWT
- Express

## 20. Tecnologias para página de detalhes
- React 19
- React Router DOM
- Axios
- Dayjs
- Node.js
- Express
- PostgreSQL
- pg
- bcryptjs
- jsonwebtoken
- multer
- Baileys
- qrcode
- Vite
- ESLint
- Nodemon
- dotenv
- dotenv-cli
- CSS puro
- PM2

## 21. JSON final para integração futura no React
```json
{
  "name": "OdontoClin Agenda Inteligente",
  "shortName": "OdontoClin Agenda",
  "slug": "odontoclin-agenda-inteligente",
  "ultraShortSummary": "Sistema real de agenda odontológica com confirmação por WhatsApp e controle por perfil de usuário.",
  "shortSummary": "Aplicação full stack para a rotina de uma clínica odontológica, com agenda semanal, confirmação pública de consulta e automações via WhatsApp. O projeto está em produção, foi usado por uma clínica real e substituiu um fluxo que antes era manual e desorganizado.",
  "mediumDescription": "O OdontoClin foi desenvolvido para uma clínica odontológica real e está em uso em produção. A proposta foi centralizar a agenda, reduzir o trabalho manual da equipe e deixar o controle de consultas mais claro para secretária e dentistas. Além do painel interno, o sistema também conversa com o paciente por link público e por WhatsApp, com confirmação, cancelamento e lembretes automáticos. Isso torna o projeto forte para portfólio porque mostra solução real de negócio, com uso prático e não apenas uma interface bonita.",
  "fullDescription": "O OdontoClin é uma aplicação full stack voltada para a rotina de uma clínica odontológica. No front-end, ele entrega uma agenda semanal visual, criação e edição de consultas, definição de tipo de atendimento, registro de procedimento, telefone do paciente e acompanhamento de status da consulta. Na operação diária, o sistema ajuda dois perfis principais: secretária e dentista. A secretária consegue gerenciar a agenda completa. O dentista acessa a própria agenda e trabalha dentro das permissões definidas no sistema. Isso deixa o fluxo mais claro, reduz erro operacional e melhora a organização do atendimento. No back-end, a API trata autenticação com JWT, autorização por papel e regras de negócio importantes para a clínica. O banco de dados impede conflito de horário para o mesmo dentista, o que evita que a agenda seja salva com sobreposição de consultas. O projeto também integra WhatsApp Web para envio de mensagens, gera QR code para conexão e roda lembretes automáticos para consultas próximas. O ponto mais forte do projeto é que ele une solução técnica e problema real. Antes, o processo era manual, com mais ligações, menos controle e mais chance de perda de confirmação. Agora, a clínica tem um sistema centralizado para agenda, confirmação, cancelamento e comunicação com o paciente. Como o projeto segue em produção e continua evoluindo, ele mostra não só capacidade de construir, mas também de manter e melhorar um produto real.",
  "problemSolved": "O projeto resolve a desorganização da rotina de agendamento de uma clínica odontológica. Antes, a equipe dependia de controles manuais, ligações e acompanhamento separado de confirmações e cancelamentos. Isso deixava o processo mais lento e confuso. O OdontoClin centraliza tudo em um só sistema.",
  "projectGoal": "Criar um sistema simples e prático para organizar consultas odontológicas, reduzir trabalho manual da equipe e dar mais controle sobre confirmações, cancelamentos e agenda.",
  "mainFeatures": [
    "Login com usuário, senha e persistência de sessão.",
    "Controle de acesso por perfil de usuário.",
    "Agenda semanal com visualização por dias e horários.",
    "Criação e edição de agendamentos.",
    "Registro de paciente, telefone, procedimento, tipo de consulta e plano.",
    "Confirmação e cancelamento de consulta.",
    "Página pública para o paciente confirmar ou cancelar pelo link.",
    "Envio de mensagens por WhatsApp.",
    "Conexão com WhatsApp por QR code.",
    "Lembretes automáticos de consulta.",
    "Atualização de nome e foto de perfil.",
    "Troca de senha para dentistas.",
    "Bloqueio de conflito de horário no banco.",
    "Visualização da agenda com status e cores por dentista."
  ],
  "technologiesCard": [
    "React",
    "Node.js",
    "PostgreSQL",
    "WhatsApp",
    "JWT",
    "Express"
  ],
  "technologiesDetails": {
    "frontend": [
      "React 19",
      "React Router DOM",
      "Axios",
      "Dayjs",
      "clsx"
    ],
    "backend": [
      "Node.js",
      "Express",
      "bcryptjs",
      "jsonwebtoken",
      "multer",
      "pg"
    ],
    "database": [
      "PostgreSQL",
      "Enums para tipo de usuário, status e tipo de consulta",
      "btree_gist",
      "tstzrange"
    ],
    "authentication": [
      "JWT",
      "Bearer token",
      "Controle de acesso por papel"
    ],
    "apisAndIntegrations": [
      "WhatsApp Web com baileys",
      "qrcode",
      "Envio de confirmação, cancelamento e lembrete"
    ],
    "styling": [
      "CSS puro",
      "Google Fonts",
      "Manrope",
      "Sora"
    ],
    "buildAndTools": [
      "Vite",
      "ESLint",
      "Nodemon",
      "dotenv",
      "dotenv-cli"
    ],
    "deployOrInfrastructure": [
      "Script de deploy com SSH",
      "SCP para envio de arquivos",
      "PM2 para reinício do backend",
      "Variáveis de ambiente para front-end, back-end e CORS"
    ],
    "other": [
      "pino"
    ]
  },
  "technicalHighlights": [
    "Banco impede sobreposição de consultas do mesmo dentista.",
    "API separa o que secretária pode fazer do que dentista pode fazer.",
    "A confirmação do paciente funciona por página pública.",
    "O WhatsApp é usado tanto no envio manual quanto nos lembretes automáticos.",
    "O sistema tem suporte a foto de perfil e troca de senha.",
    "O deploy já está organizado com script próprio."
  ],
  "developerSkillsDemonstrated": [
    "Consigo transformar um problema real de negócio em sistema funcional.",
    "Consigo trabalhar com front-end, back-end e banco de dados no mesmo projeto.",
    "Sei implementar autenticação, permissões e regras de acesso.",
    "Consigo integrar o sistema com serviços externos, como WhatsApp.",
    "Tenho cuidado com organização de agenda, validação e consistência dos dados.",
    "Consigo entregar uma interface útil para operação real, não só uma tela de demonstração.",
    "Consigo manter um produto em produção e pensar em evolução contínua."
  ],
  "recruiterText": "O OdontoClin mostra minha capacidade de entregar uma solução full stack para um problema real de operação. O projeto reúne autenticação, permissões por perfil, agenda, confirmação pública de consulta, automações por WhatsApp e regra de banco para evitar conflito de horário. É um exemplo claro de trabalho que vai além da interface e entra na lógica do produto.",
  "freelanceClientText": "Esse projeto foi criado para uma clínica odontológica real e ajudou a substituir um processo manual e desorganizado. Ele centraliza agenda, confirmações, cancelamentos e comunicação com o paciente em um só sistema, reduzindo trabalho repetido e dando mais controle para a equipe. É o tipo de solução que melhora a rotina do dia a dia de forma direta.",
  "seo": {
    "title": "OdontoClin Agenda | Sistema de Agendamento Odontológico com WhatsApp",
    "description": "Sistema full stack para clínica odontológica com agenda semanal, confirmação pública de consulta, lembretes automáticos e integração com WhatsApp.",
    "keywords": [
      "sistema odontológico",
      "agenda odontológica",
      "agendamento de consultas",
      "React",
      "Node.js",
      "PostgreSQL",
      "WhatsApp",
      "confirmação de consulta",
      "portfólio full stack"
    ],
    "category": "Saúde / Gestão de Agenda"
  },
  "cta": "Ver o fluxo completo de agendamento",
  "factsFoundInCode": [
    "O projeto tem dois lados: web em React/Vite e server em Node/Express.",
    "A autenticação usa JWT com armazenamento de sessão no front-end.",
    "Existem dois perfis de usuário: SECRETARY e DOCTOR.",
    "A agenda é semanal e trabalha com blocos de 15 minutos.",
    "O sistema permite criar, editar, confirmar, cancelar e excluir consultas.",
    "Existe uma rota pública para confirmar ou cancelar consulta pelo link.",
    "O banco usa uma constraint para evitar choque de horário do mesmo dentista.",
    "O projeto integra WhatsApp Web via baileys e gera QR code para conexão.",
    "O sistema envia lembretes automáticos de consulta em janela próxima do horário.",
    "O perfil do usuário permite editar nome e foto.",
    "Dentistas podem trocar a própria senha.",
    "O front-end usa VITE_API_URL para apontar para produção.",
    "Existe script de deploy com build, envio por SSH/SCP e reinício via PM2."
  ],
  "assumptions": [],
  "manualReviewPoints": [
    "Confirmar se você quer destacar no portfólio que o projeto está em produção até hoje.",
    "Revisar se os nomes da clínica e dos dentistas devem aparecer no texto público ou só em versões internas.",
    "Se for mostrar prints, ocultar dados reais de paciente, telefone e horários sensíveis.",
    "Revisar se o texto deve citar as melhorias em andamento ou focar só no produto atual."
  ]
}
```

## 22. Fatos encontrados no código
- O projeto tem dois lados: `web` em React/Vite e `server` em Node/Express.
- A autenticação usa JWT com armazenamento de sessão no front-end.
- Existem dois perfis de usuário: `SECRETARY` e `DOCTOR`.
- A agenda é semanal e trabalha com blocos de 15 minutos.
- O sistema permite criar, editar, confirmar, cancelar e excluir consultas.
- Existe uma rota pública para confirmar ou cancelar consulta pelo link.
- O banco usa uma constraint para evitar choque de horário do mesmo dentista.
- O projeto integra WhatsApp Web via `baileys` e gera QR code para conexão.
- O sistema envia lembretes automáticos de consulta em janela próxima do horário.
- O perfil do usuário permite editar nome e foto.
- Dentistas podem trocar a própria senha.
- O front-end usa `VITE_API_URL` para apontar para produção.
- Existe script de deploy com build, envio por SSH/SCP e reinício via PM2.

## 23. Hipóteses
Nenhuma hipótese relevante.

## 24. Pontos para revisão manual
- Confirmar se você quer destacar no portfólio que o projeto está em produção até hoje.
- Revisar se os nomes da clínica e dos dentistas devem aparecer no texto público ou só em versões internas.
- Se for mostrar prints, ocultar dados reais de paciente, telefone e horários sensíveis.
- Revisar se o texto deve citar as melhorias em andamento ou focar só no produto atual.
