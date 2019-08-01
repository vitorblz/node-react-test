const express = require('express');
const cors = require('cors');

const app = express();

const lista = {
  totalItens: 0,
  itens: []
};

app.use(express.json());
app.use(cors());

app.get('/itens', function(req, res) {
  res.json(lista.itens);
});

app.post('/adicionar', function(req, res) {
  const { nome, quantidade } = req.body;
  if (!nome || nome === '')
    res.status(400).json({
      msg:
        'Nome deve ser preenchido. Ex: {"nome": "produto 1", "quantidade": 5}'
    });
  if (!quantidade || quantidade === '')
    res.status(400).json({
      msg:
        'Qunatidade deve ser preenchida. Ex: {"nome": "produto 1", "quantidade": 5}'
    });

  lista.totalItens += 1;
  lista.itens.push({ id: lista.totalItens, nome, quantidade });

  res.status(201).json({ msg: 'Item inserido com sucesso' });
});

app.delete('/remover', function(req, res) {
  const { id } = req.body;
  if (!id || id === '')
    res.status(400).json({
      msg: 'Id preenchido. Ex: {"id": 1}'
    });

  for (let i = 0; i < lista.itens.length; i += 1) {
    if (lista.itens[i].id === id) {
      lista.itens.splice(i, 1);
      return res.status(201).json({ msg: 'Item removido com sucesso' });
      break;
    }
  }
  return res.status(200).json({
    msg: 'Id não encontrado para ser removido'
  });
});

app.listen(5000, () => console.log(`Servidor iniciado na porta 5000`));
