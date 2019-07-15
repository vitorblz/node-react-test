const express = require('express');
const cors = require('cors');

const app = express();

const lista = {
  itens: [
    { id: 1, nome: 'Arroz' },
    { id: 2, nome: 'Feijão' },
    { id: 3, nome: 'Leite' }
  ]
};

app.use(express.json());
app.use(cors());

app.get('/itens', function(req, res) {
  res.json(lista.itens);
});

app.get('/', function(req, res) {
  res.send(`Hello!!!`);
});

app.listen(5000, () => console.log(`Servidor iniciado na porta 5000`));
