import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`http://localhost:8080`);
});
