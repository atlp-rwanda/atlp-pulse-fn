import express, { static as expressStatic } from 'express';
import { join, resolve } from 'path';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(expressStatic(join(resolve(), 'dist')));

app.all('*', (_, res) => {
  return res.sendFile(join(resolve(), 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log('App being served on port: ', PORT);
});
