import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Meu primeiro server com Express e Typescript');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});