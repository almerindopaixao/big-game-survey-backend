# big-game-survey-backend

API desenvolvida em Node.js utilizando Typescript como linguagem principal e MongoDB como banco de dados

# Utilização

- Acessar: *GET /[](https://big-game-survey-backend.herokuapp.com)
- Games: *GET/ [](https://big-game-survey-backend.herokuapp.com/games)
- Records:*GET/ [](https://big-game-survey-backend.herokuapp.com/records)

# Cadastro de registros
- Acessar POST: [](https://big-game-survey-backend.herokuapp.com/records)

### Querys

- Paginação: [](https://big-game-survey-backend.herokuapp.com/records?page=0)
- Buscar records por intervalo de tempo do cadastro [](https://big-game-survey-backend.herokuapp.com/records?min=2020-01-01T00:00:00Z&max=2020-07-31T00:00:00Z)
- Limite de elementos por página: [](https://big-game-survey-backend.herokuapp.com/records?linesPerPage=20)
- Ordem dos resultados (decrescente: desc ou crescente: asc): [](https://big-game-survey-backend.herokuapp.com/records?direction=desc)
- Ordem dos elementos por chave: [](https://big-game-survey-backend.herokuapp.com/records?orderBy=moment)

### Chaves dos elementos

- id
- name
- age
- moment
- gameTitle
- gamePlatform
- genreName
