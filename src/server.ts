import express from 'express';

const app = express();

const door = '3333';

app.listen(door, () => {
  console.log(`Servidor rodando na porta ${door}`);
});
