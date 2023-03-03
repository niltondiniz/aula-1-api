"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
app.get('/users', (req, res) => {
    res.send('GET - Usado para obter dados');
});
app.get('/sum/:num1/:num2', (req, res) => {
    const sum = Number(req.params.num1) + Number(req.params.num2);
    res.send(`O resultado da soma é: ${sum}`);
});
app.get('/users/:id', (req, res) => {
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
app.post('/users', (req, res) => {
    //Parte do codigo responsavel por chamar um controller
    //que chamar um model, que vai persistir a informação no banco.
    var user = req.body.user;
    user.id = 1;
    const response = {
        "status-code": 201,
        "message": "Usuário criado com sucesso",
        "user-registered": user
    };
    res.send(response);
});
app.put('/users/:id', (req, res) => {
    res.send('PUT - Usado para atualizar dados');
});
app.delete('/users/:id', (req, res) => {
    res.send('DELETE - Usado para remover dados');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
