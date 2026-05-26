# Portfólio - CoinSight TCC

## Metadados
- **Projeto analisado:** `/home/mateus/Documentos/Projetos/meus-projetos/coinsight_tcc`
- **Data de geração:** `2026-05-15 12:58:59 -03`
- **Contexto informado por Mateus:** projeto acadêmico (TCC), também pessoal, com evolução futura planejada.

## 1) Nome profissional do projeto
**CoinSight Research: Análise de Criptomoedas com Machine Learning e Fatores Geopolíticos**

## 2) Nome curto para exibir no portfólio
**CoinSight TCC**

## 3) Resumo ultra curto
Plataforma de pesquisa aplicada que cruza dados reais de mercado cripto com sinais sociais e geopolíticos para apoiar análise e previsão.

## 4) Resumo curto
Projeto em Python + Streamlit que integra ETL de preços, banco PostgreSQL, modelos de Machine Learning e dashboards analíticos. O foco central do TCC foi investigar como fatores sociais e geopolíticos afetam os valores das criptomoedas.

## 5) Descrição média
O CoinSight é uma aplicação analítica completa para estudo de criptomoedas, construída com Streamlit, PostgreSQL e módulos de Machine Learning. O sistema coleta dados de mercado (OHLC), exibe painéis interativos, permite testar previsões e medir desempenho dos modelos com backtesting e análise temporal.

O principal diferencial do projeto é a camada de contexto social e geopolítico: além dos indicadores técnicos tradicionais, o trabalho adiciona eventos e sinais de sentimento para investigar impacto em preços, que foi exatamente o problema de pesquisa central do TCC.

## 6) Descrição completa
O CoinSight foi desenvolvido para responder uma pergunta de pesquisa prática: **como fatores sociais e geopolíticos influenciam o comportamento de preços de criptomoedas, e como isso pode ser incorporado em modelos preditivos?**

Na base técnica, o projeto implementa um fluxo end-to-end:
1. Coleta e atualização de dados OHLC de BTC, ETH, ADA e SOL via ETL.
2. Armazenamento estruturado em PostgreSQL com consultas para análise histórica.
3. Interface web em Streamlit com múltiplas páginas para exploração visual, indicadores e previsões.
4. Módulos de Machine Learning para engenharia de features, treino, comparação de modelos, backtesting e walk-forward analysis.
5. Camada de eventos geopolíticos/notícias e componentes de sentimento social para contextualização dos movimentos de preço.

No uso real, você informou que o projeto foi aplicado com dados reais em rotina de análise. Isso fortalece a qualidade do portfólio, porque mostra não só protótipo acadêmico, mas aplicação prática no processo analítico.

O resultado é um projeto que combina pesquisa, engenharia de dados e produto analítico, com foco em explicar melhor o mercado por meio da integração entre comportamento técnico de preço e contexto externo.

## 7) Problema que o projeto resolve
Modelos de análise cripto baseados apenas em histórico de preço tendem a perder contexto de eventos e sentimento. O CoinSight busca reduzir essa lacuna ao combinar:
- dados técnicos de mercado,
- sinais sociais,
- eventos geopolíticos,
- e avaliação quantitativa da previsão.

## 8) Objetivo do projeto
**Objetivo principal (confirmado por você):** resolver um problema de pesquisa específico sobre impacto de fatores sociais e geopolíticos nos valores das criptomoedas.

**Objetivo técnico do sistema:** construir uma plataforma integrada para coletar dados, analisar comportamento de mercado e testar previsões com métricas claras.

## 9) Funcionalidades principais
- ETL de preços OHLC com atualização incremental para BTC, ETH, ADA e SOL.
- Dashboard principal com preço atual, variação e gráfico por período.
- Análise por moeda com candlestick, volume e KPIs.
- Página de previsões IA com treino/re-treino de modelo Random Forest e persistência de previsões.
- Dashboard de comparação de modelos (Random Forest, XGBoost e LightGBM quando disponíveis).
- Backtesting de estratégias com métricas financeiras.
- Walk-forward analysis com re-treinamento periódico.
- Página de eventos geopolíticos com filtros por categoria, severidade, sentimento, país e texto.
- Sistema de alertas por preço atual ou valor previsto.
- Componentes de notícias e feed social com fallback em caso de indisponibilidade de API.

## 10) Tecnologias identificadas por categoria
### Front-end
- Streamlit
- Plotly
- streamlit-option-menu
- HTML/CSS inline no Streamlit

### Back-end
- Python
- SQLAlchemy
- Scripts CLI com argparse

### Banco de dados
- PostgreSQL
- psycopg2-binary

### Autenticação
- Não identificado no código analisado.

### APIs e integrações
- Yahoo Finance (`yfinance`)
- API do X/Twitter (token opcional)
- Feeds RSS (CoinDesk, CoinTelegraph, Decrypt, The Block)
- Requests para consumo HTTP

### Estilização
- CSS customizado em páginas Streamlit
- Tema via `.streamlit/config.toml`

### Build e ferramentas
- `requirements.txt`
- `requirements_ml.txt`
- `joblib`
- `python-dotenv`

### Deploy ou infraestrutura
- Execução local com Streamlit
- PostgreSQL local via `DATABASE_URL`

### Outras ferramentas de dados/ML
- Pandas
- NumPy
- Scikit-learn
- XGBoost (opcional)
- LightGBM (opcional)
- TensorFlow/Keras (classe LSTM disponível)
- statsmodels (classes ARIMA/SARIMAX disponíveis)
- Prophet (classe disponível)
- vaderSentiment

## 11) Tecnologias para capa/card
- Python
- Streamlit
- PostgreSQL
- Scikit-learn
- Plotly
- Yahoo Finance API

## 12) Tecnologias para página de detalhes
- Python
- Streamlit
- SQLAlchemy
- PostgreSQL
- psycopg2-binary
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- LightGBM
- TensorFlow/Keras
- Plotly
- yfinance
- Requests
- joblib
- python-dotenv
- vaderSentiment

## 13) Diferenciais técnicos
- Arquitetura modular separando ETL, interface, componentes e ML.
- Engenharia de features técnicas e geopolíticas no mesmo pipeline.
- Validação temporal e walk-forward analysis para reduzir avaliação otimista.
- Persistência de previsões com métricas no banco para histórico comparável.
- Backtesting com métricas de risco e retorno além de erro estatístico.
- Integração de contexto externo (eventos/notícias/social) no fluxo de análise.

## 14) O que esse projeto demonstra sobre mim como desenvolvedor
- Capacidade de transformar uma pergunta de pesquisa em sistema funcional.
- Domínio prático de Python para dados, banco, interface e modelagem.
- Organização de código em módulos reutilizáveis e orientados a evolução.
- Visão de produto analítico: não só prever, mas explicar contexto de mercado.
- Competência para construir solução acadêmica com aplicação prática real.

## 15) Texto focado em recrutadores
Projeto de TCC com aplicação real que demonstra maturidade em ciclo completo de dados: ingestão, modelagem, avaliação e visualização. O CoinSight evidencia capacidade de conectar pesquisa aplicada com engenharia de software, especialmente em cenários de série temporal e integração de múltiplas fontes de sinal.

## 16) Texto focado em clientes de freelance
Se você precisa de um painel analítico que una dados de mercado, contexto externo e previsões com métricas claras, este projeto mostra exatamente esse tipo de entrega. A base está pronta para evoluir em novas integrações, novos ativos e novos módulos de decisão.

## 17) SEO title
**CoinSight TCC | Previsão de Criptomoedas com Machine Learning, Sinais Sociais e Eventos Geopolíticos**

## 18) SEO description
Plataforma em Python e Streamlit para análise de criptomoedas com ETL, PostgreSQL, previsões de Machine Learning, backtesting e estudo do impacto social/geopolítico nos preços.

## 19) SEO keywords
`coinsight`, `tcc criptomoedas`, `machine learning criptomoedas`, `análise geopolítica cripto`, `sentimento social cripto`, `streamlit python`, `postgresql`, `backtesting`, `walk forward`, `portfolio desenvolvedor`

## 20) CTA sugerido
**Ver demonstração do dashboard e entender como sinais geopolíticos entram na análise de preço.**

## 21) Fatos encontrados no código
- Aplicação principal em Streamlit com múltiplas páginas de análise.
- ETL principal em `scripts/etl_coins_ohlc.py` com upsert por `(moeda_id, timestamp)`.
- Coleta de dados para BTC, ETH, ADA e SOL.
- Uso de PostgreSQL via SQLAlchemy em diversos módulos.
- Página de previsões IA cria/usa tabela `previsoes`.
- Página de alertas cria/usa tabelas `alertas` e `alertas_log`.
- Script de eventos cria/usa tabela `eventos_geopoliticos`.
- Módulos de ML com comparação de modelos, backtest e walk-forward.
- Engenharia de features com indicadores técnicos e features geopolíticas.
- Existem modelos `.joblib` versionados no repositório.
- Não foi encontrada suíte de testes automatizados dedicada.
- `README.md` está vazio.
- `ml_avancado.py` referencia `database.py/get_db_connection`, mas esse arquivo não foi encontrado no projeto.
- `sentimento_social.py` importa `TWEETS_SIMULADOS`, enquanto o componente expõe `POSTS_CURADOS`.
- Compilação sintática Python (`python3 -m py_compile`) passou sem erro nos arquivos analisados.

## 22) Hipóteses
- **Hipótese:** a página `ML Avançado TCC` pode depender de ajustes para execução completa por causa da referência a `database.py` ausente.
- **Hipótese:** parte dos dados de eventos é orientada a demonstração acadêmica/simulação, não necessariamente base histórica validada de produção.
- **Hipótese:** o projeto está em transição para uma versão futura mais estruturada (confirmado por você como direcionamento).

## 23) Pontos para revisão manual
1. Revisar a dependência `get_db_connection` em `ml_avancado.py`.
2. Corrigir a inconsistência `TWEETS_SIMULADOS` vs `POSTS_CURADOS`.
3. Padronizar nomes de colunas de impacto geopolítico (`impacto_pct` / `impacto_estimado_pct`).
4. Definir se a página de sentimento social entrará no menu principal.
5. Criar README final com setup e limitações para apresentação pública.
6. Antes de publicar portfólio, remover ou ajustar segredos locais em `.streamlit/secrets.toml`.

## 24) JSON final para integração futura no React
```json
{
  "name": "CoinSight Research: Análise de Criptomoedas com Machine Learning e Fatores Geopolíticos",
  "shortName": "CoinSight TCC",
  "slug": "coinsight-tcc",
  "ultraShortSummary": "Plataforma de pesquisa aplicada que cruza dados reais de mercado cripto com sinais sociais e geopolíticos para apoiar análise e previsão.",
  "shortSummary": "Projeto em Python + Streamlit que integra ETL de preços, banco PostgreSQL, modelos de Machine Learning e dashboards analíticos. O foco central do TCC foi investigar como fatores sociais e geopolíticos afetam os valores das criptomoedas.",
  "mediumDescription": "O CoinSight é uma aplicação analítica completa para estudo de criptomoedas, construída com Streamlit, PostgreSQL e módulos de Machine Learning. O sistema coleta dados de mercado (OHLC), exibe painéis interativos, permite testar previsões e medir desempenho dos modelos com backtesting e análise temporal. O principal diferencial é a camada social/geopolítica usada como parte da investigação do TCC.",
  "fullDescription": "O CoinSight foi desenvolvido para responder uma pergunta de pesquisa prática: como fatores sociais e geopolíticos influenciam o comportamento de preços de criptomoedas, e como isso pode ser incorporado em modelos preditivos. O sistema implementa um fluxo end-to-end com coleta de dados, armazenamento em PostgreSQL, interface interativa em Streamlit e módulos de ML para engenharia de features, comparação de modelos, backtesting e walk-forward analysis. Além dos indicadores técnicos, a plataforma integra eventos geopolíticos, notícias e sinais sociais para contextualizar movimentos de mercado. O projeto foi usado com dados reais em rotina de análise e representa uma base acadêmica e pessoal para evolução futura.",
  "problemSolved": "Reduz a análise fragmentada do mercado cripto ao unificar histórico de preços, contexto social/geopolítico e avaliação preditiva em uma única plataforma.",
  "projectGoal": "Resolver um problema de pesquisa específico sobre como fatores sociais e geopolíticos afetam os valores das criptomoedas, implementando uma plataforma técnica para análise e previsão com validação quantitativa.",
  "mainFeatures": [
    "ETL incremental OHLC para BTC, ETH, ADA e SOL",
    "Dashboard principal com preço, variação e gráfico por período",
    "Análise por moeda com candlestick, volume e KPIs",
    "Previsões IA com treino/re-treino de Random Forest e persistência no banco",
    "Comparação de modelos (Random Forest, XGBoost, LightGBM)",
    "Backtesting com métricas financeiras",
    "Walk-forward analysis com re-treinamento periódico",
    "Eventos geopolíticos com filtros e análise de impacto",
    "Sistema de alertas por preço atual ou previsto",
    "Componentes de notícias e feed social com fallback"
  ],
  "technologiesCard": [
    "Python",
    "Streamlit",
    "PostgreSQL",
    "Scikit-learn",
    "Plotly",
    "Yahoo Finance API"
  ],
  "technologiesDetails": {
    "frontend": [
      "Streamlit",
      "Plotly",
      "streamlit-option-menu",
      "HTML/CSS inline"
    ],
    "backend": [
      "Python",
      "SQLAlchemy",
      "argparse"
    ],
    "database": [
      "PostgreSQL",
      "psycopg2-binary"
    ],
    "authentication": [],
    "apisAndIntegrations": [
      "Yahoo Finance (yfinance)",
      "X/Twitter API v2",
      "RSS feeds (CoinDesk, CoinTelegraph, Decrypt, The Block)",
      "Requests"
    ],
    "styling": [
      "CSS customizado no Streamlit",
      "Tema Streamlit (.streamlit/config.toml)"
    ],
    "buildAndTools": [
      "requirements.txt",
      "requirements_ml.txt",
      "joblib",
      "python-dotenv"
    ],
    "deployOrInfrastructure": [
      "Execução local com Streamlit",
      "PostgreSQL local"
    ],
    "other": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "TensorFlow/Keras",
      "statsmodels",
      "Prophet",
      "vaderSentiment"
    ]
  },
  "technicalHighlights": [
    "Arquitetura modular separando ETL, interface, componentes e ML",
    "Features técnicas e geopolíticas no mesmo pipeline",
    "Validação temporal com backtesting e walk-forward",
    "Persistência de previsões com métricas no banco",
    "Integração de contexto externo no fluxo de análise"
  ],
  "developerSkillsDemonstrated": [
    "Pesquisa aplicada com implementação de software",
    "Desenvolvimento full stack em Python para dados",
    "Engenharia de dados e modelagem temporal",
    "Construção de dashboard analítico interativo",
    "Integração de múltiplas fontes e avaliação de modelos"
  ],
  "recruiterText": "Projeto de TCC com aplicação real que demonstra maturidade em ciclo completo de dados: ingestão, modelagem, avaliação e visualização. Evidencia capacidade de conectar pesquisa aplicada com engenharia de software em cenários de série temporal e múltiplas fontes de sinal.",
  "freelanceClientText": "Projeto que demonstra entrega de plataforma analítica completa: coleta automatizada, banco estruturado, previsões com métricas e interface clara. A base permite evolução para produtos mais robustos e customizados.",
  "seo": {
    "title": "CoinSight TCC | Previsão de Criptomoedas com Machine Learning, Sinais Sociais e Eventos Geopolíticos",
    "description": "Plataforma em Python e Streamlit para análise de criptomoedas com ETL, PostgreSQL, previsões de Machine Learning, backtesting e estudo do impacto social/geopolítico nos preços.",
    "keywords": [
      "coinsight",
      "tcc criptomoedas",
      "machine learning criptomoedas",
      "análise geopolítica cripto",
      "sentimento social cripto",
      "streamlit python",
      "postgresql",
      "backtesting",
      "walk forward",
      "portfolio desenvolvedor"
    ],
    "category": "Data/AI + Finanças"
  },
  "cta": "Ver demonstração do dashboard e entender como sinais geopolíticos entram na análise de preço.",
  "factsFound": [
    "App principal em Streamlit com navegação por páginas",
    "ETL OHLC com upsert para BTC, ETH, ADA e SOL",
    "Uso de PostgreSQL com SQLAlchemy",
    "Módulos de previsão, alertas, backtesting e walk-forward",
    "Features técnicas e geopolíticas implementadas",
    "Sem suíte de testes automatizados dedicada",
    "README.md vazio",
    "Inconsistência de referência em ml_avancado.py para database.py",
    "Inconsistência TWEETS_SIMULADOS vs POSTS_CURADOS"
  ],
  "assumptions": [
    "A página ML Avançado TCC pode exigir ajustes para execução completa",
    "Parte dos eventos é orientada a demonstração acadêmica/simulação",
    "Projeto está em transição para versão futura mais estruturada"
  ],
  "manualReviewPoints": [
    "Revisar dependência get_db_connection em ml_avancado.py",
    "Corrigir referência TWEETS_SIMULADOS vs POSTS_CURADOS",
    "Padronizar schema de impacto geopolítico",
    "Definir inclusão da página de sentimento social no menu",
    "Criar README final para publicação"
  ],
  "positioning": {
    "portfolioType": "Acadêmico + Pessoal",
    "targetAudience": [
      "Investidores iniciantes",
      "Pesquisadores acadêmicos"
    ],
    "futureDirection": "Evoluir para versão mais estruturada e robusta"
  }
}
```
