const express = require("express");
const cors = require("cors");

const app = express();

const lista = {
  itens: [
    { id: 1, nome: "Arroz", quantidade: 3 },
    { id: 2, nome: "Feijão", quantidade: 1 },
    { id: 3, nome: "Leite", quantidade: 1 },
  ],
};

app.use(express.json());
app.use(cors());

app.get("/itens", function (req, res) {
  res.json(lista.itens);
});

app.listen(5000, () => console.log(`Servidor iniciado na porta 5000`));
