# Portfólio - FBA Automation

## Metadados
- **Projeto analisado:** `/home/mateus/Documentos/Projetos/meus-projetos/fba-automation`
- **Data de geração:** `2026-05-15 14:40:12 -03`
- **Contexto informado por Mateus:** projeto desenvolvido para cliente real que atua na Amazon dos Estados Unidos, usado em processo real de trabalho e no dia a dia da operação.

## 1) Nome profissional do projeto
**FBA Automation Hub: Automação Operacional para Pesquisa, Triagem e Validação de Produtos**

## 2) Nome curto para exibir no portfólio
**FBA Automation**

## 3) Resumo ultra curto
Ferramenta full stack criada para automatizar a pesquisa de fornecedores, a triagem de produtos e a validação operacional de oportunidades no fluxo FBA.

## 4) Resumo curto
Projeto em React, FastAPI e Playwright desenvolvido para um cliente real que trabalha com Amazon nos Estados Unidos. A aplicação centraliza captura de abas, scraping de fornecedores, extração de UPC, filtros de catálogos e exportação de lotes para acelerar um processo que antes era quase totalmente manual.

## 5) Descrição média
O FBA Automation é uma aplicação full stack criada para resolver um problema operacional real: reduzir o tempo gasto na busca de fornecedores, análise de produtos e validação manual de oportunidades no fluxo FBA. O sistema reúne interface web, automação de navegador, processamento de CSV, scraping de páginas e exportação de resultados em um único ambiente de trabalho.

Na prática, a solução substituiu várias etapas manuais que exigiam abrir sites, copiar códigos de produto, pesquisar na Amazon, cruzar informações e organizar tudo em planilhas. Isso tornou o processo mais rápido, mais consistente e menos dependente de trabalho repetitivo.

## 6) Descrição completa
O **FBA Automation Hub** foi desenvolvido para um cliente real que trabalha com operações ligadas à Amazon nos Estados Unidos. O projeto nasceu de uma necessidade prática: o processo de encontrar fornecedores, localizar produtos, validar se esses itens tinham aderência ao fluxo de venda na Amazon e organizar os dados era demorado, manual e dependente de muitas verificações repetidas.

Antes da automação, o trabalho exigia abrir fornecedores manualmente, copiar códigos ou identificar produtos um a um, pesquisar esses itens na Amazon, comparar informações em outros sites e só então organizar os dados para análise de oportunidade e lucro. Esse processo consumia muito tempo, aumentava o esforço operacional e exigia mais pessoas para executar tarefas repetitivas.

O sistema foi construído para atacar esse problema de ponta a ponta. No front-end, existe uma interface em React com módulos separados para processamento de sellers, processamento de produtos, captura de abas do navegador, scraping de fornecedores e painel de automação. No back-end, a aplicação usa FastAPI para receber arquivos CSV, aplicar filtros, controlar a automação, conversar com o navegador via modo debug, extrair UPC e título de páginas reais e gerar arquivos finais de uso operacional.

Além de automatizar tarefas isoladas, o projeto organiza um fluxo contínuo. Ele consegue ler fornecedores de uma planilha pública do Google Sheets, retomar execuções interrompidas, acompanhar logs em tempo real, aplicar perfis de operação, lidar com falhas e exportar resultados em formatos úteis para o trabalho. Também há suporte a uso com VPN, algo exigido pelo contexto do cliente por bloqueio geográfico, estabilidade de navegação e necessidade operacional.

Como peça de portfólio, este projeto é forte porque mostra mais do que uma interface bonita ou um CRUD tradicional. Ele demonstra construção de uma ferramenta real de produtividade, feita para resolver um gargalo concreto de operação, com integração entre front-end, API, automação de navegador, processamento de dados, exportação e controle de fluxo.

## 7) Problema que o projeto resolve
O projeto resolve um problema operacional real de **pesquisa lenta, triagem manual e validação repetitiva de produtos e fornecedores**.

Antes da ferramenta:
1. Era preciso procurar fornecedores manualmente.
2. Abrir produtos um por um.
3. Copiar código ou identificar o item manualmente.
4. Pesquisar esse produto na Amazon.
5. Repetir a validação em outros sites para analisar oportunidade e lucro.
6. Organizar tudo manualmente em planilhas.

Com a automação, esse fluxo passou a ser centralizado, acelerado e mais escalável.

## 8) Objetivo do projeto
**Objetivo confirmado por você:** automatizar a busca de fornecedores, a triagem de produtos e a identificação de oportunidades reais para um cliente que atua na Amazon dos Estados Unidos.

**Objetivo prático da solução:** reduzir drasticamente o tempo gasto no processo, diminuir trabalho manual repetitivo e tornar a operação mais eficiente, mais organizada e menos dependente de vários funcionários para tarefas mecânicas.

## 9) Funcionalidades principais
- Dashboard com status do backend e visão geral dos módulos.
- Upload de múltiplos arquivos CSV de sellers.
- Filtragem de sellers com foco em itens FBA.
- Filtros por seller, preço, BSR, concorrência FBA, exclusão da Amazon e presença de UPC.
- Download de CSV filtrado após processamento.
- Upload e processamento de CSV de produtos.
- Captura de abas abertas do navegador via modo debug.
- Verificação do status do navegador conectado.
- Extração de título e UPC a partir das páginas capturadas.
- Geração de buscas na Amazon com base em UPC e título do produto.
- Acúmulo local de produtos capturados para exportação posterior.
- Scraping de páginas de fornecedor a partir de URL de categoria ou seção.
- Varredura de múltiplas páginas de fornecedor com paginação.
- Exportação dos resultados do fornecedor em CSV.
- Painel de automação com iniciar, parar, retomar e limpar execução.
- Leitura de logs em tempo real na interface.
- Perfis de automação pré-configurados.
- Leitura sequencial de fornecedores a partir de Google Sheets.
- Persistência de estado em arquivo JSON para retomada do fluxo.
- Exportação de lotes em XLSX com template.
- Geração adicional de HTML com links clicáveis para revisão operacional.
- Endpoint de comando remoto para bot com suporte a token.

## 10) Tecnologias identificadas por categoria
### Front-end
- React 18
- React DOM
- React Router DOM
- JavaScript
- Vite

### Back-end
- Python
- FastAPI
- Uvicorn
- Playwright
- Pandas
- Requests
- BeautifulSoup
- lxml
- OpenPyXL

### Banco de dados
- Não identificado no código analisado.

### Autenticação
- Não há autenticação de usuário na interface principal.
- Existe proteção opcional por token no endpoint `/api/automation/bot/command`.

### APIs e integrações
- Chrome DevTools Protocol / navegador em modo debug
- Google Sheets via exportação CSV pública
- Geração de links de busca para Amazon
- Endpoint de integração por bot

### Estilização
- CSS puro por página e componente

### Build e ferramentas
- Vite
- ESLint
- npm
- `requirements.txt`
- Scripts shell de inicialização

### Deploy ou infraestrutura
- Execução local com frontend, backend e navegador debug
- Variáveis de ambiente via `.env.local`
- Perfis de VPN com `nmcli`
- Logs em arquivo
- Estado persistido em JSON

### Outras ferramentas
- CSV como entrada e saída
- XLSX como exportação operacional
- HTML gerado para revisão manual

## 11) Tecnologias para capa/card
- React
- FastAPI
- Python
- Playwright
- Pandas
- Vite

## 12) Tecnologias para página de detalhes
- React
- React Router DOM
- JavaScript
- Vite
- Python
- FastAPI
- Uvicorn
- Playwright
- Pandas
- Requests
- BeautifulSoup
- lxml
- OpenPyXL
- Google Sheets CSV
- CSS
- ESLint

## 13) Diferenciais técnicos
- Extração de UPC e título com múltiplas estratégias para lidar com páginas de fornecedores com estruturas diferentes.
- Integração entre interface web e automação de navegador real via modo debug.
- Fluxo operacional com estado persistido e retomada de execução.
- Perfis de automação configuráveis para cenários diferentes de uso.
- Monitoramento de logs em tempo real no painel web.
- Quarentena de links e domínios com falha para evitar repetição improdutiva.
- Exportação em XLSX com template e em HTML clicável para revisão rápida.
- Leitura sequencial de fornecedores via Google Sheets para acompanhar um processo real de operação.
- Suporte operacional ao uso de VPN, coerente com um cenário real de cliente nos Estados Unidos.

## 14) O que esse projeto demonstra sobre mim como desenvolvedor
- Capacidade de desenvolver uma solução full stack conectando front-end, API e automação.
- Capacidade de transformar um processo manual real em uma ferramenta de produtividade.
- Domínio de automação de navegador para coleta e validação de dados em páginas reais.
- Capacidade de processar arquivos CSV e estruturar fluxos de filtragem e exportação.
- Capacidade de construir sistemas voltados a operação, e não apenas protótipos visuais.
- Boa visão de produto e de rotina de trabalho, organizando a solução por módulos que fazem sentido para uso diário.
- Capacidade de entregar valor prático para cliente real com foco em eficiência e redução de tempo operacional.
- Capacidade de lidar com cenários de execução longa, retomada, falhas e observabilidade.

## 15) Texto focado em recrutadores
Este projeto mostra minha capacidade de desenvolver soluções completas para problemas reais de operação. Em vez de criar apenas uma interface ou um script isolado, eu construí uma ferramenta full stack que conecta automação de navegador, processamento de dados, API e interface web para reduzir trabalho manual, acelerar decisões e organizar melhor o fluxo de trabalho de um cliente real.

## 16) Texto focado em clientes de freelance
Este projeto é um exemplo claro de como eu transformo rotinas manuais e demoradas em sistemas práticos de automação. A solução foi criada para um cliente real que trabalhava com um processo pesado de pesquisa e validação de produtos na Amazon dos Estados Unidos, e ajudou a ganhar tempo, organizar melhor a operação e reduzir dependência de tarefas repetitivas feitas por várias pessoas.

## 17) SEO title
**FBA Automation Hub | Automação de Pesquisa e Triagem de Produtos com React, FastAPI e Playwright**

## 18) SEO description
Projeto full stack desenvolvido para cliente real dos Estados Unidos, focado em automação de fornecedores, triagem de produtos, captura de abas, extração de UPC e exportação operacional para fluxos FBA.

## 19) SEO keywords
- fba automation
- automação amazon
- automação de fornecedores
- triagem de produtos
- scraping com playwright
- fastapi react portfolio
- processamento de csv python
- extração de upc
- ferramenta operacional full stack
- automação para pesquisa de produtos

## 20) CTA sugerido
**Ver como a automação reduziu trabalho manual e acelerou a triagem de produtos em uma operação real**

## 21) Fatos encontrados no código
- O projeto tem um `frontend` em React/Vite e um `backend` em FastAPI.
- O backend expõe rotas para `sellers`, `products`, `capture`, `supplier` e `automation`.
- O front-end possui páginas específicas para dashboard, sellers, products, capture, supplier scraper e automation.
- Há upload de múltiplos CSVs para sellers.
- Há filtros para seller, preço, BSR, quantidade de sellers FBA, exclusão da Amazon e presença de UPC.
- Há processamento de CSV de produtos com filtros de preço e quantidade máxima de avaliações.
- A captura de abas depende de um navegador em modo debug via URL como `http://127.0.0.1:9222`.
- O código de captura tenta extrair UPC e título com múltiplos métodos.
- O scraper de fornecedor usa Playwright e percorre páginas de categoria.
- O resultado do scraper de fornecedor pode ser exportado em CSV.
- Existe um painel de automação com start, stop, status, logs, clear e download.
- A automação possui perfis configuráveis em `backend/config/automation_profiles.json`.
- Um dos perfis inclui comandos para conectar e desconectar VPN com `nmcli`.
- A automação lê fornecedores de uma planilha pública do Google Sheets exportada em CSV.
- O estado da automação é salvo em `automation_state.json`.
- O exportador gera arquivos XLSX com template e também uma versão HTML com links clicáveis.
- Existe endpoint de bot `/api/automation/bot/command` com autenticação opcional por token.
- Não foi identificado banco de dados relacional ou NoSQL no código analisado.
- Não foi identificada autenticação de usuário para acesso ao sistema web.
- Existem scripts e arquivos de teste e depuração para extração de UPC, títulos e cenários específicos.

## 22) Hipóteses
- **Hipótese:** a interface foi pensada não só para desenvolvimento interno, mas também para facilitar o uso operacional recorrente no dia a dia.
- **Hipótese:** o template XLSX usado na exportação foi adaptado a um formato de trabalho já existente na operação do cliente.
- **Hipótese:** a integração por bot foi criada para ampliar o controle remoto da automação dentro do fluxo operacional.

## 23) Pontos para revisão manual
- Confirmar se você quer citar “cliente real da Amazon dos Estados Unidos” dessa forma no portfólio ou deixar mais genérico por confidencialidade.
- Confirmar se vale mencionar explicitamente redução de necessidade de funcionários ou se é melhor descrever isso como redução de trabalho manual e ganho de eficiência operacional.
- Confirmar se o nome público final deve permanecer `FBA Automation` ou se você prefere um nome mais neutro para portfólio.
- Confirmar se você quer citar Amazon diretamente no card principal ou apenas na descrição detalhada.
- Confirmar se o uso de VPN pode ser mencionado abertamente na versão pública do portfólio.

## 24) JSON final para integração futura no React
```json
{
  "name": "FBA Automation Hub: Automação Operacional para Pesquisa, Triagem e Validação de Produtos",
  "shortName": "FBA Automation",
  "slug": "fba-automation",
  "ultraShortSummary": "Ferramenta full stack criada para automatizar a pesquisa de fornecedores, a triagem de produtos e a validação operacional de oportunidades no fluxo FBA.",
  "shortSummary": "Projeto em React, FastAPI e Playwright desenvolvido para um cliente real que trabalha com Amazon nos Estados Unidos. A aplicação centraliza captura de abas, scraping de fornecedores, extração de UPC, filtros de catálogos e exportação de lotes para acelerar um processo que antes era quase totalmente manual.",
  "mediumDescription": "O FBA Automation é uma aplicação full stack criada para resolver um problema operacional real: reduzir o tempo gasto na busca de fornecedores, análise de produtos e validação manual de oportunidades no fluxo FBA. O sistema reúne interface web, automação de navegador, processamento de CSV, scraping de páginas e exportação de resultados em um único ambiente de trabalho.\n\nNa prática, a solução substituiu várias etapas manuais que exigiam abrir sites, copiar códigos de produto, pesquisar na Amazon, cruzar informações e organizar tudo em planilhas. Isso tornou o processo mais rápido, mais consistente e menos dependente de trabalho repetitivo.",
  "fullDescription": "O FBA Automation Hub foi desenvolvido para um cliente real que trabalha com operações ligadas à Amazon nos Estados Unidos. O projeto nasceu de uma necessidade prática: o processo de encontrar fornecedores, localizar produtos, validar se esses itens tinham aderência ao fluxo de venda na Amazon e organizar os dados era demorado, manual e dependente de muitas verificações repetidas.\n\nAntes da automação, o trabalho exigia abrir fornecedores manualmente, copiar códigos ou identificar produtos um a um, pesquisar esses itens na Amazon, comparar informações em outros sites e só então organizar os dados para análise de oportunidade e lucro. Esse processo consumia muito tempo, aumentava o esforço operacional e exigia mais pessoas para executar tarefas repetitivas.\n\nO sistema foi construído para atacar esse problema de ponta a ponta. No front-end, existe uma interface em React com módulos separados para processamento de sellers, processamento de produtos, captura de abas do navegador, scraping de fornecedores e painel de automação. No back-end, a aplicação usa FastAPI para receber arquivos CSV, aplicar filtros, controlar a automação, conversar com o navegador via modo debug, extrair UPC e título de páginas reais e gerar arquivos finais de uso operacional.\n\nAlém de automatizar tarefas isoladas, o projeto organiza um fluxo contínuo. Ele consegue ler fornecedores de uma planilha pública do Google Sheets, retomar execuções interrompidas, acompanhar logs em tempo real, aplicar perfis de operação, lidar com falhas e exportar resultados em formatos úteis para o trabalho. Também há suporte a uso com VPN, algo exigido pelo contexto do cliente por bloqueio geográfico, estabilidade de navegação e necessidade operacional.\n\nComo peça de portfólio, este projeto é forte porque mostra mais do que uma interface bonita ou um CRUD tradicional. Ele demonstra construção de uma ferramenta real de produtividade, feita para resolver um gargalo concreto de operação, com integração entre front-end, API, automação de navegador, processamento de dados, exportação e controle de fluxo.",
  "problemSolved": "O projeto resolve um problema operacional real de pesquisa lenta, triagem manual e validação repetitiva de produtos e fornecedores, centralizando etapas que antes eram feitas manualmente em vários sites e planilhas.",
  "projectGoal": "Automatizar a busca de fornecedores, a triagem de produtos e a identificação de oportunidades reais para um cliente que atua na Amazon dos Estados Unidos, reduzindo tempo gasto, trabalho manual repetitivo e esforço operacional.",
  "mainFeatures": [
    "Dashboard com status do backend",
    "Upload de múltiplos arquivos CSV de sellers",
    "Filtros por seller, preço, BSR, concorrência FBA e presença de UPC",
    "Processamento de CSV de produtos",
    "Captura de abas do navegador via modo debug",
    "Extração de título e UPC de páginas capturadas",
    "Geração de buscas na Amazon por UPC e por título",
    "Scraping de páginas de fornecedor por URL de categoria",
    "Exportação de resultados em CSV",
    "Painel de automação com iniciar, parar, retomar e limpar estado",
    "Monitoramento de logs em tempo real",
    "Perfis de automação pré-configurados",
    "Leitura sequencial de fornecedores por Google Sheets",
    "Persistência de estado para retomada",
    "Exportação operacional em XLSX e HTML"
  ],
  "technologiesCard": [
    "React",
    "FastAPI",
    "Python",
    "Playwright",
    "Pandas",
    "Vite"
  ],
  "technologiesDetails": {
    "frontend": [
      "React",
      "React Router DOM",
      "JavaScript",
      "Vite"
    ],
    "backend": [
      "Python",
      "FastAPI",
      "Uvicorn",
      "Playwright",
      "Pandas",
      "Requests",
      "BeautifulSoup",
      "lxml",
      "OpenPyXL"
    ],
    "database": [],
    "authentication": [
      "Token opcional para endpoint de bot"
    ],
    "apisAndIntegrations": [
      "Chrome DevTools Protocol",
      "Google Sheets CSV",
      "Busca por URL na Amazon",
      "Endpoint de comando remoto por bot"
    ],
    "styling": [
      "CSS puro"
    ],
    "buildAndTools": [
      "Vite",
      "ESLint",
      "npm",
      "requirements.txt",
      "Scripts shell"
    ],
    "deployOrInfrastructure": [
      "Execução local com frontend e backend",
      "Variáveis de ambiente .env.local",
      "Perfis de VPN com nmcli",
      "Logs em arquivo",
      "Persistência em JSON"
    ],
    "other": [
      "CSV",
      "XLSX",
      "HTML gerado para revisão"
    ]
  },
  "technicalHighlights": [
    "Extração de UPC e título com múltiplas estratégias",
    "Automação com estado persistido e retomada de execução",
    "Painel operacional com logs ao vivo",
    "Quarentena de links e domínios com falha",
    "Leitura sequencial de fornecedores a partir de Google Sheets",
    "Exportação em XLSX com template e HTML clicável",
    "Integração com VPN coerente com operação real"
  ],
  "developerSkillsDemonstrated": [
    "Desenvolvimento full stack",
    "Automação de navegador",
    "Processamento de dados com CSV",
    "Construção de APIs",
    "Criação de interface operacional",
    "Resolução de problema real de cliente",
    "Integração entre serviços locais",
    "Resiliência em automações longas"
  ],
  "recruiterText": "Este projeto mostra minha capacidade de desenvolver soluções completas para problemas reais de operação. Em vez de criar apenas uma interface ou um script isolado, eu construí uma ferramenta full stack que conecta automação de navegador, processamento de dados, API e interface web para reduzir trabalho manual, acelerar decisões e organizar melhor o fluxo de trabalho de um cliente real.",
  "freelanceClientText": "Este projeto é um exemplo claro de como eu transformo rotinas manuais e demoradas em sistemas práticos de automação. A solução foi criada para um cliente real que trabalhava com um processo pesado de pesquisa e validação de produtos na Amazon dos Estados Unidos, e ajudou a ganhar tempo, organizar melhor a operação e reduzir dependência de tarefas repetitivas feitas por várias pessoas.",
  "seo": {
    "title": "FBA Automation Hub | Automação de Pesquisa e Triagem de Produtos com React, FastAPI e Playwright",
    "description": "Projeto full stack desenvolvido para cliente real dos Estados Unidos, focado em automação de fornecedores, triagem de produtos, captura de abas, extração de UPC e exportação operacional para fluxos FBA.",
    "keywords": [
      "fba automation",
      "automação amazon",
      "automação de fornecedores",
      "triagem de produtos",
      "scraping com playwright",
      "fastapi react portfolio",
      "processamento de csv python",
      "extração de upc",
      "ferramenta operacional full stack",
      "automação para pesquisa de produtos"
    ]
  },
  "cta": "Ver como a automação reduziu trabalho manual e acelerou a triagem de produtos em uma operação real"
}
```
