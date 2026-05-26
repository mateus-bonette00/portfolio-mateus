# Projeto de Portfólio - aplicativo_techouse

## Metadados
- **Projeto analisado:** `/home/mateus/Documentos/Projetos/meus-projetos/aplicativo_techouse`
- **Arquivo gerado em:** `15/05/2026`
- **Contexto confirmado por Mateus:** projeto feito para cliente real (dono da TecHouse/ITA SEG), com foco em centralizar acesso para facilitar o uso de serviços de segurança.

## 1. Nome profissional do projeto
**TecHouse Segurança - Hub Mobile de Atendimento e Acesso**

## 2. Nome curto para exibir no portfólio
**TecHouse Segurança App**

## 3. Resumo ultra curto
Aplicativo Flutter para Android que centraliza suporte técnico e abertura rápida dos apps de segurança usados pelos clientes da TecHouse Segurança.

## 4. Resumo curto
App mobile utilitário criado para um cliente real da área de segurança eletrônica.  
Em uma única tela, o usuário acessa suporte via WhatsApp, Instagram, localização da empresa em Itajubá e abre diretamente apps de monitoramento e alarme instalados no Android.

## 5. Descrição média
Este projeto foi desenvolvido em Flutter para resolver uma necessidade prática de operação: concentrar, em um único aplicativo, os principais atalhos que clientes da TecHouse Segurança usam no dia a dia após a instalação de câmeras e sistemas de segurança.

O fluxo é simples e objetivo: splash screen, tela principal e botões de ação direta. O app reduz passos, evita confusão para o usuário final e acelera o acesso ao suporte técnico e aos apps de segurança já instalados no celular.

## 6. Descrição completa
O **TecHouse Segurança App** é um aplicativo Android desenvolvido em Flutter para um cliente real do setor de segurança eletrônica. O objetivo é facilitar a rotina dos clientes finais que recebem instalação de câmeras, alarmes e outros recursos de segurança, entregando um ponto único de acesso para canais de atendimento e aplicativos operacionais.

Na prática, o app funciona como um hub de uso rápido. Após uma splash screen de 3 segundos com identidade visual da marca, o usuário entra em uma tela com botões grandes e diretos para: contato de suporte técnico via WhatsApp, perfil no Instagram da empresa, localização da TecHouse Segurança em Itajubá e abertura de quatro aplicativos específicos de segurança (ISIC Lite, WD-MOB V2, AMT Mobile V2 e Active Mobile V4).

A implementação técnica usa duas estratégias: abertura de URLs/deeplinks com `url_launcher` e abertura de apps Android por package name com `android_intent_plus`. Também existe configuração de permissões e `queries` no AndroidManifest para compatibilidade com Android 11+ ao interagir com apps externos.  

Como peça de portfólio, este projeto se destaca por mostrar aplicação prática com contexto real de cliente, foco em usabilidade objetiva e integração mobile orientada a tarefa. Ao mesmo tempo, pode ser apresentado como uma base validada que evolui bem tanto para operação em uso quanto para versão expandida de produto.

## 7. Problema que o projeto resolve
Clientes de segurança eletrônica normalmente precisam abrir vários apps diferentes e ainda localizar canais de suporte separadamente. Isso gera atrito e perda de tempo. O projeto resolve esse problema ao concentrar tudo em uma interface única de acesso rápido.

## 8. Objetivo do projeto
Entregar um aplicativo simples para a TecHouse Segurança que facilite o pós-instalação para os clientes finais, centralizando suporte técnico, localização da empresa e abertura dos apps de segurança necessários.

## 9. Funcionalidades principais
- Splash screen com logo e transição automática após 3 segundos.
- Tela principal com layout de botões de ação rápida.
- Abertura do suporte técnico via WhatsApp (`whatsapp://send`).
- Abertura do perfil da empresa no Instagram.
- Abertura da localização da empresa no Google Maps (Itajubá/MG).
- Abertura direta de apps Android instalados:
  - ISIC Lite
  - WD-MOB V2
  - AMT Mobile V2
  - Active Mobile V4
- Tratamento básico de exceção quando app externo não está instalado.

## 10. Tecnologias identificadas por categoria

### Front-end
- Flutter
- Dart
- Material Design (widgets nativos do Flutter)

### Back-end
Não identificado no código analisado.

### Banco de dados
Não identificado no código analisado.

### Autenticação
Não identificado no código analisado.

### APIs e integrações
- `url_launcher`
- `android_intent_plus`
- Deep links/URLs externas (WhatsApp, Instagram, Google Maps)

### Estilização
- Estilização com widgets Flutter (`Container`, `BoxDecoration`, `InkWell`, `SafeArea`, etc.)
- `flutter_svg` para ícones SVG

### Build e ferramentas
- Flutter SDK (`>=3.8.0 <4.0.0`)
- Android Gradle Plugin (`8.7.3`)
- Kotlin Android Plugin (`2.1.0`)
- `flutter_lints`
- `flutter_launcher_icons`

### Deploy ou infraestrutura
- Build Android por Flutter/Gradle
- Configuração de permissões e visibilidade de pacotes no AndroidManifest

### Outras ferramentas
- Estrutura multi-plataforma padrão do Flutter (android/ios/web/linux/macos/windows)

## 11. Tecnologias para capa/card
- Flutter
- Dart
- Android Intents
- url_launcher
- flutter_svg
- Material UI

## 12. Tecnologias para página de detalhes
- Flutter
- Dart
- Material Design
- url_launcher
- android_intent_plus
- flutter_svg
- Flutter Lints
- Flutter Launcher Icons
- Gradle KTS
- Kotlin Android Plugin

## 13. Diferenciais técnicos
- Integração híbrida com apps externos: deeplink para serviços e intent explícita para apps instalados.
- Configuração Android 11+ com `QUERY_ALL_PACKAGES` e `<queries>` para garantir visibilidade dos apps de destino.
- Fluxo orientado a produtividade: abrir recurso em 1 toque, sem navegação longa.
- Interface simples para público não técnico, mantendo implementação técnica correta para interoperabilidade mobile.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
- Capacidade de traduzir uma necessidade real de cliente em aplicação funcional.
- Competência em Flutter para construção de apps utilitários focados em uso diário.
- Domínio de integração com recursos nativos do Android.
- Foco em experiência prática do usuário final, com redução de fricção na jornada.
- Entrega orientada a resultado operacional, não apenas a demonstração visual.

## 15. Texto focado em recrutadores
Projeto mobile desenvolvido para cliente real da área de segurança, com foco em resolver um problema concreto de usabilidade: centralizar suporte e ferramentas essenciais em um único app. Demonstra capacidade de entender contexto de negócio, implementar solução objetiva e entregar valor prático para usuários finais.

## 16. Texto focado em clientes de freelance
Este projeto mostra como eu transformo uma necessidade operacional em um app simples e útil para o dia a dia do cliente. No caso da TecHouse Segurança, concentrei suporte técnico, localização da empresa e acesso aos apps de segurança em uma interface direta, reduzindo passos para o usuário final e melhorando a experiência após a instalação do serviço.

## 17. SEO title
TecHouse Segurança App | Hub Flutter para Suporte e Apps de Segurança no Android

## 18. SEO description
Aplicativo Flutter Android criado para cliente real de segurança eletrônica, com acesso rápido a suporte técnico via WhatsApp, localização da empresa e abertura direta de apps de monitoramento e alarme.

## 19. SEO keywords
- aplicativo flutter android
- app de segurança eletrônica
- hub mobile de suporte técnico
- android intent flutter
- url launcher flutter
- portfólio desenvolvimento mobile
- app para empresa de segurança
- tecHouse segurança app

## 20. CTA sugerido
**Ver como o app simplifica o suporte e o acesso às ferramentas de segurança**

## 21. Fatos encontrados no código
- O app inicializa com `ITASEGApp` e título `TecHouse` em `lib/main.dart`.
- Existe splash screen com `Timer` de 3 segundos antes da Home em `lib/main.dart`.
- A Home contém botões para WhatsApp, Instagram e Localização em `lib/main.dart`.
- O WhatsApp usa URI `whatsapp://send?phone=5535998829986` em `lib/main.dart`.
- O Maps usa endereço em Itajubá/MG em `lib/main.dart`.
- O app abre quatro pacotes Android específicos em `lib/main.dart`:
  - `com.intelbras.isiclite`
  - `com.mcu.JFL`
  - `br.com.amt.v2`
  - `br.virtus.jfl.amiot`
- O projeto usa `url_launcher`, `android_intent_plus` e `flutter_svg` em `pubspec.yaml`.
- O AndroidManifest declara `QUERY_ALL_PACKAGES` e `<queries>` com os pacotes externos em `android/app/src/main/AndroidManifest.xml`.
- O nome visível do app está como `TecHouse` em `android/app/src/main/res/values/strings.xml`.
- O teste `test/widget_test.dart` está no template padrão e referencia `MyApp`, que não existe no `main.dart` atual.
- O build de release está assinado com chave de debug em `android/app/build.gradle.kts`.

## 22. Hipóteses
- **Hipótese:** o app é usado no contexto de pós-instalação dos serviços da TecHouse Segurança, mas o código não mostra métricas de uso real.
- **Hipótese:** o projeto é funcional para operação atual e também pode ser apresentado como base de produto em evolução, conforme seu direcionamento de portfólio.

## 23. Pontos para revisão manual
- Confirmar se o número de WhatsApp pode aparecer publicamente no portfólio.
- Confirmar se o endereço completo no Maps pode ser exibido publicamente.
- Validar e atualizar o teste `widget_test.dart` para o app atual, se quiser destacar testes no portfólio.
- Alinhar README com a implementação atual (`android_intent_plus`).
- Definir se haverá configuração de assinatura de release real (além de debug key).
- Verificar se deseja manter `applicationId` padrão `com.example.ita_seg_app` ou usar ID final da marca.

## 24. JSON final para integração futura no React
```json
{
  "name": "TecHouse Segurança - Hub Mobile de Atendimento e Acesso",
  "shortName": "TecHouse Segurança App",
  "slug": "techouse-seguranca-app",
  "ultraShortSummary": "Aplicativo Flutter para Android que centraliza suporte técnico e abertura rápida dos apps de segurança usados pelos clientes da TecHouse Segurança.",
  "shortSummary": "App mobile utilitário criado para cliente real da área de segurança eletrônica. Em uma única tela, reúne suporte via WhatsApp, Instagram, localização da empresa e abertura direta dos apps de segurança instalados.",
  "mediumDescription": "Projeto Flutter Android desenvolvido para a TecHouse Segurança com foco em facilitar a rotina dos clientes após instalação de câmeras e sistemas de segurança. O app concentra canais de suporte e ferramentas operacionais em uma interface simples e rápida.",
  "fullDescription": "O TecHouse Segurança App foi desenvolvido para um cliente real da área de segurança eletrônica. A proposta é centralizar, em um único aplicativo, os principais acessos usados pelos clientes finais no pós-instalação: suporte técnico por WhatsApp, Instagram da empresa, localização em Itajubá e abertura direta dos apps de segurança ISIC Lite, WD-MOB V2, AMT Mobile V2 e Active Mobile V4. Tecnicamente, o app usa Flutter para a interface, url_launcher para links externos e android_intent_plus para abrir aplicativos instalados por package name, com configuração de permissões e queries no AndroidManifest para Android 11+. É um projeto com valor prático imediato e também com potencial de evolução como produto.",
  "problemSolved": "Reduz a fricção de usuários que precisam acessar múltiplos aplicativos e canais de suporte separados após contratação de serviços de segurança.",
  "projectGoal": "Facilitar o atendimento e o uso operacional dos clientes da TecHouse Segurança por meio de um hub mobile único e simples.",
  "mainFeatures": [
    "Splash screen com logo e transição automática",
    "Tela principal com botões de acesso rápido",
    "Abertura de suporte técnico via WhatsApp",
    "Abertura de Instagram da empresa",
    "Abertura de localização da empresa no Google Maps",
    "Abertura direta de 4 apps de segurança instalados no Android",
    "Tratamento básico para app externo não instalado"
  ],
  "technologiesCard": [
    "Flutter",
    "Dart",
    "Android Intents",
    "url_launcher",
    "flutter_svg",
    "Material UI"
  ],
  "technologiesDetails": {
    "frontend": [
      "Flutter",
      "Dart",
      "Material Design"
    ],
    "backend": [],
    "database": [],
    "authentication": [],
    "apisAndIntegrations": [
      "url_launcher",
      "android_intent_plus",
      "WhatsApp deep link",
      "Instagram URL",
      "Google Maps URL"
    ],
    "styling": [
      "Widgets Flutter",
      "BoxDecoration",
      "flutter_svg"
    ],
    "buildAndTools": [
      "Flutter SDK >=3.8.0 <4.0.0",
      "Android Gradle Plugin 8.7.3",
      "Kotlin Android Plugin 2.1.0",
      "Flutter Lints",
      "Flutter Launcher Icons",
      "Gradle KTS"
    ],
    "deployOrInfrastructure": [
      "Build Android com Flutter/Gradle",
      "AndroidManifest com permissões e queries de pacotes"
    ],
    "other": [
      "Estrutura multi-plataforma padrão do Flutter"
    ]
  },
  "technicalHighlights": [
    "Integração com apps externos via deeplink e intents Android explícitas",
    "Compatibilidade Android 11+ com QUERY_ALL_PACKAGES e queries de pacote",
    "Fluxo de uso em 1 toque para ações críticas de suporte e operação",
    "Tratamento de exceção para ausência de aplicativo no dispositivo"
  ],
  "developerSkillsDemonstrated": [
    "Desenvolvimento mobile com Flutter",
    "Integração Android nativa via intents",
    "Implementação de interface funcional orientada a tarefa",
    "Leitura de contexto de negócio e entrega de solução prática para cliente real"
  ],
  "recruiterText": "Projeto mobile para cliente real do setor de segurança, criado para resolver um problema concreto de usabilidade e atendimento. Mostra capacidade de transformar contexto de negócio em solução funcional com foco em resultado prático para o usuário final.",
  "freelanceClientText": "Este projeto demonstra meu trabalho em cenário real de cliente: entender a rotina operacional, simplificar a jornada do usuário e entregar um app útil no dia a dia. A solução centraliza suporte e ferramentas essenciais da TecHouse Segurança em uma interface rápida e direta.",
  "seo": {
    "title": "TecHouse Segurança App | Hub Flutter para Suporte e Apps de Segurança no Android",
    "description": "Aplicativo Flutter Android criado para cliente real de segurança eletrônica, com acesso rápido a suporte técnico via WhatsApp, localização da empresa e abertura direta de apps de monitoramento e alarme.",
    "keywords": [
      "aplicativo flutter android",
      "app de segurança eletrônica",
      "hub mobile de suporte técnico",
      "android intent flutter",
      "url launcher flutter",
      "portfólio desenvolvimento mobile",
      "app para empresa de segurança",
      "TecHouse Segurança"
    ],
    "category": "Aplicativo Mobile Utilitário"
  },
  "cta": "Ver como o app simplifica o suporte e o acesso às ferramentas de segurança"
}
```
