import express, { Express, Request, Response, response } from 'express';

const app: Express = express();
const port = 3002;
app.use(express.json());

app.get('/users', (req: Request, res: Response) => {
  res.send('GET - Usado para obter dados');
});

app.get('/sum/:num1/:num2', (req: Request, res: Response) => {
  const sum = Number(req.params.num1) + Number(req.params.num2);
  res.send(`O resultado da soma é: ${sum}`);
});

app.get('/users/:id', (req: Request, res: Response) => {
  
  //FINGE QUE EU FUI NO BANCO E TROUXE ESSAS INFOS
  const user = {
        "user": {        
            "nome": "Nilton",
            "telefone": "249888888",
            "endereco": "Rua sei que lá, 0, Tres Rios, RJ"
        }
      };
  
  const response = {
    "status-code": 200,
    "message": "Usuário encontrado",
    "data": user
  };

  res.send(response);
});

app.post('/users', (req: Request, res: Response) => {
  //Parte do codigo responsavel por chamar um controller
  //que chamar um model, que vai persistir a informação no banco.
  var user = req.body.user;
  user.id = 1;
  const response = {
    "status-code": 201,
    "message": "Usuário criado com sucesso"
    "user-registered": user
  }
  res.send(response);
});

app.put('/users/:id', (req: Request, res: Response) => {
  res.send('PUT - Usado para atualizar dados');
});

app.delete('/users/:id', (req: Request, res: Response) => {
  res.send('DELETE - Usado para remover dados');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});