import app from './app';

const port = process.env.APP_PORT || 8080;

app.on('ok', () => {
  app.listen(port);
});
