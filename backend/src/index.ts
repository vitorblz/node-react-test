import express, { type Request, type Response } from "express"; // Importa o Express
import cors from "cors"; // Importa o Cors para permitir requisições

const app = express();

const lista = {
  itens: [
    { id: 1, nome: "Arroz", quantidade: 3 },
    { id: 2, nome: "Feijão", quantidade: 1 },
    { id: 3, nome: "Leite", quantidade: 2 },
  ],
};

app.use(express.json());
app.use(cors());

app.get("/itens", function (req: Request, res: Response) {
  return res.json(lista.itens);
});

app.listen(5000, () => console.log(`Servidor iniciado na porta 5000`));
