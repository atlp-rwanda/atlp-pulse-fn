/* eslint-disable no-console */
import express, { static as expressStatic } from 'express';
import { join, resolve } from 'path';


const PORT = process.env.PORT || 5000;

const app = express();


app.use(expressStatic(join(resolve(), 'dist')));
app.use(expressStatic(join(resolve(), 'public')));


app.all('/', (_, res) => res.sendFile(join(resolve(), 'dist/index.html')));

app.listen(PORT, () => {
  console.log('App being served on port: ', PORT);
});
