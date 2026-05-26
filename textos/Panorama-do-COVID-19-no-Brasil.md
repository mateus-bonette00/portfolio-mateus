# Panorama-do-COVID-19-no-Brasil

- Projeto analisado: `/home/mateus/Documentos/Projetos/meus-projetos/Panorama-do-COVID-19-no-Brasil`
- Data de geração: `2026-05-15`

## 1. Nome profissional do projeto
**Panorama Analítico da COVID-19 no Brasil**

## 2. Nome curto para exibir no portfólio
**Panorama COVID Brasil**

## 3. Resumo ultra curto
Análise exploratória em Python sobre a evolução da COVID-19 no mundo, com foco no Brasil e em dados públicos de saúde.

## 4. Resumo curto
Projeto de análise de dados feito em Jupyter Notebook para estudar a evolução da COVID-19 com base em dados públicos do Our World in Data.  
O conteúdo combina exploração, limpeza básica, comparação entre regiões e visualizações com foco especial no Brasil.

## 5. Descrição média
Este projeto apresenta uma leitura prática dos dados da COVID-19, primeiro em escala global e depois com recorte específico para o Brasil. O notebook organiza o processo de forma didática: carrega os dados, trata datas, avalia valores ausentes, cria comparações e transforma os números em gráficos e explicações textuais.

Como foi feito como estudo pessoal, o foco está em mostrar raciocínio analítico e capacidade de trabalhar com dados públicos reais. O resultado é um material claro, útil para portfólio e bom para demonstrar domínio de análise exploratória de dados.

## 6. Descrição completa
O **Panorama Analítico da COVID-19 no Brasil** é um projeto de análise exploratória de dados construído em Python, dentro de um notebook Jupyter, com apoio de Pandas, Matplotlib e Seaborn. A base usada vem do **Our World in Data**, carregada diretamente de um CSV público hospedado no GitHub Raw. O objetivo do trabalho é transformar uma base ampla e complexa sobre a pandemia em uma leitura mais clara, visual e interpretável.

O notebook começa com a exploração geral do dataset, verificando dimensões, colunas, tipos de dados e presença de valores ausentes. Em seguida, converte a coluna de datas para o formato adequado, identifica a data mais recente disponível e cria recortes para comparar países e regiões com mais casos e mortes acumuladas. A análise usa gráficos de barras e gráficos de linha para facilitar a leitura da evolução dos números ao longo do tempo.

Depois da visão global, o projeto entra no recorte do Brasil. O notebook filtra os registros do país, identifica o primeiro caso e a primeira morte, calcula o intervalo entre esses dois eventos e mostra a evolução dos casos e das mortes em gráficos próprios. O texto também compara o Brasil com os dados globais e com grupos regionais presentes na base, o que ajuda a contextualizar o impacto da pandemia no país.

Para portfólio, este projeto é forte porque mostra mais do que execução de código. Ele demonstra organização de análise, cuidado com a qualidade dos dados, construção de visualizações úteis e capacidade de explicar resultados com linguagem acessível. Isso é valioso para recrutadores, avaliadores técnicos e também para qualquer pessoa que queira entender como o projeto transforma dados públicos em uma narrativa analítica clara.

## 7. Problema que o projeto resolve
O projeto resolve o problema de lidar com uma base grande e pouco amigável de dados da COVID-19 e transformá-la em informação compreensível. Em vez de deixar os dados soltos, o notebook organiza a leitura, destaca tendências e facilita a comparação entre o cenário global e o Brasil.

## 8. Objetivo do projeto
O objetivo do projeto é mostrar habilidade em análise de dados usando informações públicas de saúde, com uma investigação guiada sobre a pandemia e uma leitura clara dos dados do Brasil em comparação com o cenário global.

## 9. Funcionalidades principais
- Importa um dataset público de COVID-19 em CSV.
- Faz análise exploratória inicial com visão geral do arquivo.
- Verifica quantidade de linhas, colunas e tipos de dados.
- Mede a quantidade de valores ausentes por coluna.
- Converte a coluna `date` para formato `datetime`.
- Identifica a data mais recente disponível na base.
- Compara países e regiões por total de casos e mortes.
- Remove linhas com valores ausentes em colunas-chave para certas análises.
- Cria gráficos de barras para casos e mortes.
- Cria gráficos de linha para evolução global de casos e mortes.
- Filtra os dados do Brasil.
- Identifica o primeiro caso e a primeira morte no Brasil.
- Calcula quantos dias se passaram entre esses dois eventos.
- Mostra a evolução de casos e mortes no Brasil em gráficos próprios.
- Explica os resultados com texto dentro do próprio notebook.

## 10. Tecnologias identificadas por categoria

### Front-end
Não identificado no código analisado.

### Back-end
Não identificado no código analisado.

### Banco de dados
Não identificado no código analisado.

### Autenticação
Não identificado no código analisado.

### APIs e integrações
- Our World in Data
- CSV público via GitHub Raw

### Estilização
- Seaborn
- Matplotlib
- `matplotlib.ticker`

### Build e ferramentas
- Python
- Jupyter Notebook
- Google Colab
- Pandas
- Matplotlib
- Seaborn
- `warnings`

### Deploy ou infraestrutura
Não identificado no código analisado.

### Outras ferramentas
- IPython kernel

## 11. Tecnologias para capa/card
- Python
- Pandas
- Matplotlib
- Seaborn
- Jupyter Notebook
- Our World in Data

## 12. Tecnologias para página de detalhes
- Python
- Jupyter Notebook
- Google Colab
- Pandas
- Matplotlib
- Seaborn
- `matplotlib.ticker`
- `warnings`
- Our World in Data
- CSV público via GitHub Raw

## 13. Diferenciais técnicos
- Trabalha com uma base pública real e ampla, não com dados artificiais.
- Faz leitura exploratória com foco em qualidade do dado, estrutura e contexto.
- Trata a coluna de datas antes de fazer análises mais profundas.
- Usa gráficos para apoiar a interpretação e não só para decorar o notebook.
- Separa análise global e análise do Brasil, o que melhora a leitura do resultado.
- Apresenta explicações em linguagem acessível dentro do próprio notebook.

## 14. O que esse projeto demonstra sobre mim como desenvolvedor
Este projeto mostra que eu consigo trabalhar com análise exploratória de dados em Python, entender uma base pública grande, tratar pontos básicos de qualidade dos dados e transformar números em uma explicação clara. Também demonstra cuidado com visualização, organização do raciocínio e comunicação do resultado de forma simples.

Para quem avalia perfil técnico, o projeto evidencia domínio prático de Pandas, Matplotlib e Seaborn, além de uma postura analítica que vai além do código e entra na leitura do problema.

## 15. Texto focado em recrutadores
Este projeto mostra uma entrega prática de análise de dados com Python em um tema real e de grande relevância pública. Ele evidencia capacidade de organizar uma base extensa, identificar padrões, criar visualizações úteis e explicar os resultados de forma clara. Para recrutadores, isso demonstra atenção a dados, raciocínio analítico e boa comunicação técnica.

## 16. Texto focado em clientes de freelance
Se o objetivo for transformar dados públicos em uma leitura clara para decisão, este projeto mostra exatamente esse tipo de capacidade. O notebook organiza a informação, destaca os pontos principais e apresenta os resultados em um formato fácil de entender. Isso é útil para relatórios, estudos exploratórios e materiais que precisam comunicar dados complexos sem complicação.

## 17. SEO title
**Panorama da COVID-19 no Brasil com Python e Análise de Dados**

## 18. SEO description
Projeto de análise de dados em Python que explora casos e mortes por COVID-19 no mundo e no Brasil com Pandas, Matplotlib, Seaborn e dados públicos do Our World in Data.

## 19. SEO keywords
- analise de dados covid brasil
- python pandas
- jupyter notebook
- visualizacao de dados
- our world in data
- analise exploratoria de dados
- portfolio data science

## 20. CTA sugerido
**Ver análise completa**

## 21. Fatos encontrados no código
- O projeto tem um `README.md` e um notebook principal chamado `Panorama_do_COVID_19_no_Brasil.ipynb`.
- O notebook usa kernel `Python 3 (ipykernel)`.
- O notebook tem 51 células, sendo 25 de código e 26 de markdown.
- As bibliotecas importadas são `pandas`, `matplotlib.pyplot`, `seaborn`, `warnings` e `matplotlib.ticker`.
- Os dados são carregados da URL pública do Our World in Data no GitHub Raw.
- A base possui 380.519 linhas e 67 colunas.
- A coluna `date` é convertida para `datetime`.
- O notebook mede valores ausentes por coluna.
- O notebook cria `df_new` removendo nulos de `total_cases` e `total_deaths`.
- O notebook faz gráficos de barras e de linha para casos e mortes.
- O notebook filtra os dados do Brasil com `df.loc[df.location == "Brazil"]`.
- O notebook identifica o primeiro caso e a primeira morte no Brasil.
- O notebook calcula o intervalo em dias entre esses dois eventos.
- O README descreve o projeto como uma análise sobre dados de COVID-19 no mundo e no Brasil.

## 22. Hipóteses
- O projeto foi feito como estudo pessoal, conforme informado pelo autor.
- O tema foi escolhido porque a COVID-19 ainda era um assunto muito presente na época da criação do estudo.
- O notebook também pode funcionar como material didático, além de peça de portfólio.
- A comparação entre Brasil e cenário global parece ser uma parte central da narrativa do projeto.

## 23. Pontos para revisão manual
- Confirmar se o texto final deve enfatizar mais o recorte do Brasil ou a comparação com o cenário global.
- Revisar se a expressão “dados públicos de saúde” é a melhor forma de apresentar o projeto no card principal.
- Verificar se vale manter datas específicas como `2024-03-11`, `2024-02-18` e `2024-03-03` na descrição pública.
- Revisar se os termos “desenvolvidos” e “subdesenvolvidos” devem aparecer na versão final do portfólio ou se precisam ser suavizados.
- Conferir se o link do README ainda é o melhor link para apresentação do projeto.

## 24. JSON final para integração futura no React
```json
{
  "name": "Panorama Analítico da COVID-19 no Brasil",
  "shortName": "Panorama COVID Brasil",
  "slug": "panorama-covid-brasil",
  "ultraShortSummary": "Análise exploratória em Python sobre a evolução da COVID-19 no mundo, com foco no Brasil e em dados públicos de saúde.",
  "shortSummary": "Projeto de análise de dados feito em Jupyter Notebook para estudar a evolução da COVID-19 com base em dados públicos do Our World in Data. O conteúdo combina exploração, limpeza básica, comparação entre regiões e visualizações com foco especial no Brasil.",
  "mediumDescription": "Este projeto apresenta uma leitura prática dos dados da COVID-19, primeiro em escala global e depois com recorte específico para o Brasil. O notebook organiza o processo de forma didática: carrega os dados, trata datas, avalia valores ausentes, cria comparações e transforma os números em gráficos e explicações textuais. Como foi feito como estudo pessoal, o foco está em mostrar raciocínio analítico e capacidade de trabalhar com dados públicos reais.",
  "fullDescription": "O Panorama Analítico da COVID-19 no Brasil é um projeto de análise exploratória de dados construído em Python, dentro de um notebook Jupyter, com apoio de Pandas, Matplotlib e Seaborn. A base usada vem do Our World in Data, carregada diretamente de um CSV público hospedado no GitHub Raw. O objetivo do trabalho é transformar uma base ampla e complexa sobre a pandemia em uma leitura mais clara, visual e interpretável. O notebook começa com a exploração geral do dataset, verificando dimensões, colunas, tipos de dados e presença de valores ausentes. Em seguida, converte a coluna de datas para o formato adequado, identifica a data mais recente disponível e cria recortes para comparar países e regiões com mais casos e mortes acumuladas. A análise usa gráficos de barras e gráficos de linha para facilitar a leitura da evolução dos números ao longo do tempo. Depois da visão global, o projeto entra no recorte do Brasil, identifica o primeiro caso e a primeira morte, calcula o intervalo entre esses dois eventos e mostra a evolução dos casos e das mortes em gráficos próprios. O texto também compara o Brasil com os dados globais e com grupos regionais presentes na base, o que ajuda a contextualizar o impacto da pandemia no país. Para portfólio, este projeto é forte porque mostra organização de análise, cuidado com a qualidade dos dados, construção de visualizações úteis e capacidade de explicar resultados com linguagem acessível.",
  "problemSolved": "O projeto resolve o problema de lidar com uma base grande e pouco amigável de dados da COVID-19 e transformá-la em informação compreensível. Em vez de deixar os dados soltos, o notebook organiza a leitura, destaca tendências e facilita a comparação entre o cenário global e o Brasil.",
  "projectGoal": "Mostrar habilidade em análise de dados usando informações públicas de saúde, com uma investigação guiada sobre a pandemia e uma leitura clara dos dados do Brasil em comparação com o cenário global.",
  "mainFeatures": [
    "Importa um dataset público de COVID-19 em CSV",
    "Faz análise exploratória inicial com visão geral do arquivo",
    "Verifica quantidade de linhas, colunas e tipos de dados",
    "Mede a quantidade de valores ausentes por coluna",
    "Converte a coluna date para datetime",
    "Identifica a data mais recente disponível na base",
    "Compara países e regiões por total de casos e mortes",
    "Remove linhas com valores ausentes em colunas-chave",
    "Cria gráficos de barras para casos e mortes",
    "Cria gráficos de linha para evolução global de casos e mortes",
    "Filtra os dados do Brasil",
    "Identifica o primeiro caso e a primeira morte no Brasil",
    "Calcula quantos dias se passaram entre esses dois eventos",
    "Mostra a evolução de casos e mortes no Brasil em gráficos próprios",
    "Explica os resultados com texto dentro do próprio notebook"
  ],
  "technologiesCard": [
    "Python",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook",
    "Our World in Data"
  ],
  "technologiesDetails": {
    "frontend": [],
    "backend": [],
    "database": [],
    "authentication": [],
    "apisAndIntegrations": [
      "Our World in Data",
      "CSV público via GitHub Raw"
    ],
    "styling": [
      "Seaborn",
      "Matplotlib",
      "matplotlib.ticker"
    ],
    "buildAndTools": [
      "Python",
      "Jupyter Notebook",
      "Google Colab",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "warnings"
    ],
    "deployOrInfrastructure": [],
    "other": [
      "IPython kernel"
    ]
  },
  "technicalHighlights": [
    "Uso de uma base pública real e ampla",
    "Fluxo completo de análise exploratória com Python",
    "Tratamento de valores ausentes e datas",
    "Visualizações comparativas para leitura temporal e geográfica",
    "Combinação de código com narrativa explicativa no notebook"
  ],
  "developerSkillsDemonstrated": [
    "Análise exploratória de dados",
    "Manipulação de dados com Pandas",
    "Visualização de dados com Matplotlib e Seaborn",
    "Leitura crítica de datasets públicos",
    "Comunicação analítica por meio de notebook",
    "Organização de raciocínio investigativo"
  ],
  "recruiterText": "Este projeto mostra uma entrega prática de análise de dados com Python em um tema real e de grande relevância pública. Ele evidencia capacidade de organizar uma base extensa, identificar padrões, criar visualizações úteis e explicar os resultados de forma clara. Para recrutadores, isso demonstra atenção a dados, raciocínio analítico e boa comunicação técnica.",
  "freelanceClientText": "Se o objetivo for transformar dados públicos em uma leitura clara para decisão, este projeto mostra exatamente esse tipo de capacidade. O notebook organiza a informação, destaca os pontos principais e apresenta os resultados em um formato fácil de entender. Isso é útil para relatórios, estudos exploratórios e materiais que precisam comunicar dados complexos sem complicação.",
  "seo": {
    "title": "Panorama da COVID-19 no Brasil com Python e Análise de Dados",
    "description": "Projeto de análise de dados em Python que explora casos e mortes por COVID-19 no mundo e no Brasil com Pandas, Matplotlib, Seaborn e dados públicos do Our World in Data.",
    "keywords": [
      "analise de dados covid brasil",
      "python pandas",
      "jupyter notebook",
      "visualizacao de dados",
      "our world in data",
      "analise exploratoria de dados",
      "portfolio data science"
    ],
    "category": "Análise de Dados / Data Science"
  },
  "cta": "Ver análise completa"
}
```
