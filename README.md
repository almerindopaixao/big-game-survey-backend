# big-game-survey-backend

API desenvolvida em Node.js utilizando Typescript como linguagem principal e MongoDB como banco de dados. 

# Tecnologias Utilizadas

### Banco de dados

- MongoDB

### Ferramentas de Produção

- Express.js
- Mongoose
- cors
- helmet
- body-parser

### Ferramentas de Desenvolvimento

- Eslint
- Prettier
- ts-node-dev


# Utilização

- Acessar: **GET** /[https://big-game-survey-backend.herokuapp.com](https://big-game-survey-backend.herokuapp.com)
- Games: **GET**/ [https://big-game-survey-backend.herokuapp.com/games](https://big-game-survey-backend.herokuapp.com/games)
- Records:**GET**/ [https://big-game-survey-backend.herokuapp.com/records](https://big-game-survey-backend.herokuapp.com/records)

# Cadastro de registros
1. Acessar pelo método **POST**/ [https://big-game-survey-backend.herokuapp.com/records](https://big-game-survey-backend.herokuapp.com/records)
2. usar no body a seguinte interface JSON:
```
{
  "name": string,
  "age": int,
  "game_id": int,
}
```

## Querys

- Paginação: [https://big-game-survey-backend.herokuapp.com/records?page=0](https://big-game-survey-backend.herokuapp.com/records?page=0)
- Buscar records por intervalo de tempo do cadastro [https://big-game-survey-backend.herokuapp.com/records?min=2020-01-01T00:00:00Z&max=2020-07-31T00:00:00Z](https://big-game-survey-backend.herokuapp.com/records?min=2020-01-01T00:00:00Z&max=2020-07-31T00:00:00Z)
- Limite de elementos por página: [https://big-game-survey-backend.herokuapp.com/records?linesPerPage=20](https://big-game-survey-backend.herokuapp.com/records?linesPerPage=20)
- Ordem dos resultados (decrescente: desc ou crescente: asc): [https://big-game-survey-backend.herokuapp.com/records?direction=desc](https://big-game-survey-backend.herokuapp.com/records?direction=desc)
- Ordem dos elementos por chave: [https://big-game-survey-backend.herokuapp.com/records?orderBy=moment](https://big-game-survey-backend.herokuapp.com/records?orderBy=moment)

## Chaves dos elementos

- id
- name
- age
- moment
- gameTitle
- gamePlatform
- genreName

```
{
  "id": 8,
  "name": "Lucas",
  "age": 22,
  "moment": "2020-01-01T00:00:00Z",
  "gameTitle": "Dragon Age Inquisition",
  "gamePlatform": "PLAYSTATION",
  "genreName": "RPG"
}
```
