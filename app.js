import mysql from "mysql2/promise";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createPool({
  host: "localhost", // Seu host do MySQL
  user: "root", // Seu usuário do MySQL
  password: "12345678", // Sua senha do MySQL
  database: "gestao_produtos", // nome do BD Sakila
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`A conexão está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("Conexão ao BD feita com sucesso!");
  }
});

app.get("/usuarios", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM usuarios");
  return res.json(result);
});

app.get("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "SELECT * FROM usuarios WHERE id = ? ",
    [id]
  );

  if (result.length === 0) {
    return res.json({ msg: "Nao existe usuario" });
  }

  return res.json(result);
});

app.get("/usuarios-email/:email", async (req, res) => {
  const { email } = req.params;
  const [result] = await connection.execute(
    "SELECT * FROM usuarios WHERE email = ? ",
    [email]
  );
  return res.json(result);
});

app.get("/produtos", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM produtos");
  return res.json(result);
});

app.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "SELECT * FROM produtos WHERE id = ? ",
    [id]
  );

  if (result.length === 0) {
    return res.json({ msg: "Nao existe esse produto" });
  }

  return res.json(result);
});