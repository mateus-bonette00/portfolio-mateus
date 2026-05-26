# Análise do Projeto

- Caminho analisado: `/home/mateus/Documentos/Projetos/meus-projetos/ecos-de-asfodelos`
- Data de geração: `15/05/2026`
- Contexto informado pelo autor: trabalho acadêmico, apresentado presencialmente em um evento de exposições de Jogos Indies na UNIFEI, com relação a disciplina, game jam e desenvolvimento de games.

## 1. Nome profissional do projeto
Ecos de Ásfodelos: Jogo 2D de arena com cartas e chefe final

## 2. Nome curto para exibir no portfólio
Ecos de Ásfodelos

## 3. Resumo ultra curto
Jogo 2D em Godot com combate por ondas, cartas de progressão e chefe final em fases.

## 4. Resumo curto
Projeto acadêmico de jogo 2D com ritmo de arena, escolhas entre ondas e progressão por cartas.

O jogo foi pensado para apresentação presencial e mostra um fluxo completo de partida, do menu inicial até a vitória ou derrota.

## 5. Descrição média
Ecos de Ásfodelos é um trabalho acadêmico de desenvolvimento de games, apresentado em um evento presencial de jogos Indies na Universidade Federal de Itajubá. O projeto combina combate em arena, progressão por cartas e confronto com chefe, com foco em uma experiência curta, clara e fácil de demonstrar ao vivo.

A Cartomante funciona como interface de progressão entre as ondas, e não como uma camada narrativa separada. Isso deixa a evolução do jogador visível de forma simples e direta, o que ajuda tanto na apresentação do projeto quanto na leitura do jogo por quem está avaliando o portfólio.

## 6. Descrição completa
Ecos de Ásfodelos é um jogo 2D feito em Godot que organiza a experiência em um ciclo bem definido: tela inicial, menu principal, escolha de dificuldade, partida, progressão entre ondas, chefe final e telas de vitória ou derrota. O código mostra um projeto pensado para funcionar como demo jogável, com estrutura clara e leitura rápida.

Na parte jogável, o personagem se move por teclado ou controle, dispara em quatro direções e recebe melhorias entre rodadas. O sistema de cartas altera o comportamento do jogador com efeitos como aumento de vida, velocidade, esquiva, projéteis perfurantes, tiros teleguiados e sinergias que aparecem quando conjuntos específicos são completados. Isso dá variedade à partida sem depender de sistemas externos.

O projeto também mostra cuidado com apresentação: HUD com corações, notificações de sinergia, efeito de dano na tela, números de dano, pausa, menu de opções, seleção de dificuldade e exportação para desktop e web. Como portfólio, ele é relevante porque apresenta uma entrega completa de jogo, com gameplay, interface, feedback visual e fechamento de experiência.

## 7. Problema que o projeto resolve
O projeto resolve a necessidade de transformar uma mecânica simples de tiro e movimento em uma experiência com ritmo, progressão e objetivo claro. Isso é útil quando o jogo precisa funcionar bem em apresentação presencial, prender atenção rápido e mostrar evolução em pouco tempo.

## 8. Objetivo do projeto
Criar um jogo autoral curto, apresentável e rejogável, com combate por ondas, escolhas de build por cartas, chefe final e identidade temática própria.

## 9. Funcionalidades principais
- Tela inicial `Press Start` antes do menu principal.
- Menu principal com iniciar, opções e sair.
- Seleção de dificuldade com três níveis.
- Movimento do jogador por teclado e por controle.
- Tiro em quatro direções por teclado e por gamepad.
- Ondas progressivas de inimigos.
- Inimigo perseguidor e inimigo atirador.
- Chefe com batalha em fases e ataques diferentes.
- Tela de melhorias entre ondas com três cartas sorteadas.
- Cartas de afinidade com efeitos práticos no combate.
- Carta corrompida com poder alto e custo claro.
- Sinergias entre cartas para bônus extras.
- Fonte de vida aleatória durante a partida.
- HUD com corações, dificuldade e notificações.
- Menu de pausa dentro da arena.
- Tela de derrota com barra de progresso da partida.
- Tela de vitória com opção de jogar novamente ou sair.
- Feedback visual com números de dano, shake de tela e efeito de dano.
- Exportação para Windows e Web.

## 10. Tecnologias identificadas por categoria
- Front-end: Godot Engine 4.5, GDScript, cenas `.tscn`, `Control`, `CanvasLayer`, `CharacterBody2D`, `Area2D`, `Node2D`, `Timer`, `AnimatedSprite2D`.
- Back-end: Não identificado no código analisado.
- Banco de dados: Não identificado no código analisado.
- Autenticação: Não identificado no código analisado.
- APIs e integrações: Não identificado no código analisado.
- Estilização: `GDShader`, `ShaderMaterial`, sprites 2D, animações em `AnimatedSprite2D`, fontes `Cinzel` e `Texturina`.
- Build e ferramentas: `export_presets.cfg`, `ConfigFile`, `AudioServer`, `DisplayServer`, autoloads `CardDB` e `GameSettings`.
- Deploy ou infraestrutura: exportação para Windows Desktop, exportação Web, `HTML`, `JavaScript`, `WebAssembly`.
- Outras ferramentas: entrada por teclado, entrada por controle, salvamento local em `user://settings.cfg`.

## 11. Tecnologias para capa/card
- Godot 4.5
- GDScript
- GDShader
- HTML5
- WebAssembly
- Gamepad Support

## 12. Tecnologias para página de detalhes
- Godot 4.5
- GDScript
- Scenes `.tscn`
- CanvasLayer
- Control UI
- CharacterBody2D
- Area2D
- AnimatedSprite2D
- GDShader
- ShaderMaterial
- ConfigFile
- AudioServer
- DisplayServer
- Autoloads
- Windows Desktop Export
- Web Export
- Keyboard Input
- Gamepad Input
- Local settings file

## 13. Diferenciais técnicos
- Sistema de cartas que muda o comportamento do personagem de forma prática e visível.
- Sinergias entre grupos de cartas, criando uma camada real de decisão na progressão.
- Chefe com estrutura própria, transição de fase e padrões diferentes de ataque.
- Interface e gameplay conectados por sinais, timers e cenas separadas.
- Suporte a teclado e controle em combate, menus, pausa e seleção de cartas.
- Feedback visual e sonoro para dar leitura rápida ao jogador durante a ação.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
Esse projeto mostra que eu consigo pegar uma ideia de jogo e fechar o ciclo inteiro, do menu ao encerramento. Também mostra que eu consigo organizar gameplay, interface, feedback visual e progressão sem depender de backend ou de ferramentas externas.

Para recrutadores e avaliadores técnicos, o mais forte aqui é a capacidade de transformar uma proposta autoral em uma experiência jogável completa, com estrutura clara, interação consistente e foco em apresentação.

## 15. Texto focado em recrutadores
Ecos de Ásfodelos mostra minha capacidade de entregar um projeto interativo completo em Godot, com menu, combate, progressão, interface, feedback visual e fechamento de experiência. O jogo foi desenvolvido como trabalho acadêmico e apresentado presencialmente em um evento universitário, o que reforça minha capacidade de construir algo que funciona bem tanto como produto jogável quanto como demo de portfólio.

## 16. Texto focado em clientes de freelance
Este projeto mostra que eu consigo transformar uma ideia em uma experiência jogável clara, com início, meio e fim. Se um cliente precisa de um protótipo de jogo, uma demo para apresentação ou uma experiência curta para evento, eu consigo estruturar gameplay, interface e progressão de forma organizada e fácil de entender.

## 17. SEO title
Ecos de Ásfodelos | Jogo 2D em Godot com cartas, ondas e chefe final

## 18. SEO description
Projeto acadêmico de jogo 2D em Godot com combate por ondas, cartas de progressão, chefe em fases, suporte a controle e exportação para web e desktop.

## 19. SEO keywords
`jogo 2D Godot`, `projeto acadêmico de games`, `GDScript`, `combate por ondas`, `sistema de cartas`, `chefe final`, `exportação web`, `portfólio de jogos`, `desenvolvimento de games`

## 20. CTA sugerido
Jogar a versão web do projeto.

## 21. Fatos encontrados no código
- A cena inicial do projeto é `PressStart.tscn`, definida em `project.godot`.
- O projeto usa Godot `4.5` com `Forward Plus`.
- Existem dois autoloads globais: `CardDB.gd` e `GameSettings.gd`.
- O personagem aceita movimento por teclado e por controle.
- O jogo aceita tiro por teclado e por botões do gamepad.
- A arena possui `HUD`, `TelaMelhorias`, `PauseMenu`, `CartomanteSprite`, `MusicCombate`, `BossMusicPlayer` e timers próprios.
- A dificuldade altera a onda em que o chefe aparece.
- O projeto tem dois inimigos comuns: `Inimigo` e `Atirador`.
- O chefe `Guardiao` troca de fase ao chegar à metade da vida.
- O sistema de cartas possui 6 cartas normais e 1 carta corrompida.
- A chance de carta corrompida sorteada é de `25%`.
- Existem duas sinergias nomeadas no código: `Baluarte da Alma` e `Ecos do Desafiante`.
- Há telas próprias de derrota e vitória.
- Há exportação configurada para Windows e Web.
- A pasta `eco/` contém a build web exportada.
- Há salvamento local de configurações em `user://settings.cfg`.

## 22. Hipóteses
- Hipótese: o conceito original do chefe previa aumentar o número de fases conforme a dificuldade, mas o código final analisado evidencia duas fases no Guardião.
- Hipótese: a versão web em `eco/` foi preparada para facilitar a apresentação presencial do jogo.
- Hipótese: o projeto foi estruturado para ser uma demo curta, com leitura rápida, porque a apresentação aconteceu em um evento universitário.

## 23. Pontos para revisão manual
- Confirmar se o texto final deve destacar a apresentação na UNIFEI logo no resumo ou só na descrição.
- Confirmar se a `Cartomante` deve aparecer nominalmente no portfólio ou se é melhor manter apenas `TelaMelhorias`.
- Confirmar se o projeto deve ser apresentado como trabalho acadêmico, projeto de disciplina, game jam ou os três contextos juntos.
- Confirmar se a build web em `eco/` é a versão que deve ser exibida no card do portfólio.
- Confirmar se o controle de volume de efeitos sonoros deve ser citado como funcionalidade completa, porque a interface existe, mas a aplicação no áudio não ficou totalmente clara no código analisado.
- Confirmar se vale citar a ideia de mais fases do chefe em dificuldades maiores como contexto histórico do projeto, já que isso não aparece com clareza no código final.

## 24. JSON final para integração futura no React
```json
{
  "name": "Ecos de Ásfodelos | Jogo 2D de arena com cartas e chefe final",
  "shortName": "Ecos de Ásfodelos",
  "slug": "ecos-de-asfodelos",
  "ultraShortSummary": "Jogo 2D em Godot com combate por ondas, cartas de progressão e chefe final em fases.",
  "shortSummary": "Projeto acadêmico de jogo 2D com ritmo de arena, escolhas entre ondas e progressão por cartas. O jogo foi pensado para apresentação presencial e mostra um fluxo completo de partida, do menu inicial até a vitória ou derrota.",
  "mediumDescription": "Ecos de Ásfodelos é um trabalho acadêmico de desenvolvimento de games, apresentado em um evento presencial de jogos Indies na Universidade Federal de Itajubá. O projeto combina combate em arena, progressão por cartas e confronto com chefe, com foco em uma experiência curta, clara e fácil de demonstrar ao vivo. A Cartomante funciona como interface de progressão entre as ondas, e não como uma camada narrativa separada.",
  "fullDescription": "Ecos de Ásfodelos é um jogo 2D feito em Godot que organiza a experiência em um ciclo bem definido: tela inicial, menu principal, escolha de dificuldade, partida, progressão entre ondas, chefe final e telas de vitória ou derrota. Na parte jogável, o personagem se move por teclado ou controle, dispara em quatro direções e recebe melhorias entre rodadas. O sistema de cartas altera o comportamento do jogador com efeitos como aumento de vida, velocidade, esquiva, projéteis perfurantes, tiros teleguiados e sinergias que aparecem quando conjuntos específicos são completados. O projeto também mostra cuidado com apresentação: HUD com corações, notificações de sinergia, efeito de dano na tela, números de dano, pausa, menu de opções, seleção de dificuldade e exportação para desktop e web.",
  "problemSolved": "O projeto resolve a necessidade de transformar uma mecânica simples de tiro e movimento em uma experiência com ritmo, progressão e objetivo claro, útil para apresentação presencial e para mostrar evolução em pouco tempo.",
  "projectGoal": "Criar um jogo autoral curto, apresentável e rejogável, com combate por ondas, escolhas de build por cartas, chefe final e identidade temática própria.",
  "mainFeatures": [
    "Tela inicial Press Start",
    "Menu principal e menu de opções",
    "Seleção de dificuldade",
    "Movimento do jogador por teclado e controle",
    "Tiro em quatro direções",
    "Ondas progressivas de inimigos",
    "Inimigo perseguidor e inimigo atirador",
    "Chefe com batalha em fases",
    "Tela de melhorias entre ondas com três cartas sorteadas",
    "Cartas de afinidade com efeitos práticos no combate",
    "Carta corrompida com poder alto e custo claro",
    "Sinergias entre cartas",
    "Fonte de vida aleatória",
    "HUD com corações, dificuldade e notificações",
    "Menu de pausa",
    "Tela de derrota",
    "Tela de vitória",
    "Feedback visual com números de dano e shake de tela",
    "Exportação para Windows e Web"
  ],
  "technologiesCard": [
    "Godot 4.5",
    "GDScript",
    "GDShader",
    "HTML5",
    "WebAssembly",
    "Gamepad Support"
  ],
  "technologiesDetails": {
    "frontend": [
      "Godot 4.5",
      "GDScript",
      "Scenes .tscn",
      "Control UI",
      "CanvasLayer",
      "CharacterBody2D",
      "Area2D",
      "AnimatedSprite2D"
    ],
    "backend": [],
    "database": [],
    "authentication": [],
    "apisAndIntegrations": [],
    "styling": [
      "GDShader",
      "ShaderMaterial",
      "Sprites 2D",
      "AnimatedSprite2D",
      "Fontes Cinzel e Texturina"
    ],
    "buildAndTools": [
      "export_presets.cfg",
      "ConfigFile",
      "AudioServer",
      "DisplayServer",
      "Autoloads"
    ],
    "deployOrInfrastructure": [
      "Windows Desktop Export",
      "Web Export",
      "HTML",
      "JavaScript",
      "WebAssembly"
    ],
    "other": [
      "Keyboard Input",
      "Gamepad Input",
      "Local settings file"
    ]
  },
  "technicalHighlights": [
    "Sistema de cartas que muda o comportamento do personagem de forma prática e visível.",
    "Sinergias entre grupos de cartas que criam uma camada real de decisão na progressão.",
    "Chefe com estrutura própria, transição de fase e padrões diferentes de ataque.",
    "Interface e gameplay conectados por sinais, timers e cenas separadas.",
    "Suporte a teclado e controle em combate, menus, pausa e seleção de cartas.",
    "Feedback visual e sonoro para dar leitura rápida ao jogador durante a ação."
  ],
  "developerSkillsDemonstrated": [
    "Construção de jogo 2D completo",
    "Organização de gameplay no Godot",
    "Integração entre gameplay e UI",
    "Design de progressão por cartas",
    "Criação de feedback visual",
    "Suporte a controle",
    "Entrega de demo apresentável"
  ],
  "recruiterText": "Ecos de Ásfodelos mostra minha capacidade de entregar um projeto interativo completo em Godot, com menu, combate, progressão, interface, feedback visual e fechamento de experiência. O jogo foi desenvolvido como trabalho acadêmico e apresentado presencialmente em um evento universitário, o que reforça minha capacidade de construir algo que funciona bem tanto como produto jogável quanto como demo de portfólio.",
  "freelanceClientText": "Este projeto mostra que eu consigo transformar uma ideia em uma experiência jogável clara, com início, meio e fim. Se um cliente precisa de um protótipo de jogo, uma demo para apresentação ou uma experiência curta para evento, eu consigo estruturar gameplay, interface e progressão de forma organizada e fácil de entender.",
  "seo": {
    "title": "Ecos de Ásfodelos | Jogo 2D em Godot com cartas, ondas e chefe final",
    "description": "Projeto acadêmico de jogo 2D em Godot com combate por ondas, cartas de progressão, chefe em fases, suporte a controle e exportação para web e desktop.",
    "keywords": [
      "jogo 2D Godot",
      "projeto acadêmico de games",
      "GDScript",
      "combate por ondas",
      "sistema de cartas",
      "chefe final",
      "exportação web",
      "portfólio de jogos",
      "desenvolvimento de games"
    ],
    "category": "Desenvolvimento de jogos"
  },
  "cta": "Jogar a versão web do projeto."
}
```
