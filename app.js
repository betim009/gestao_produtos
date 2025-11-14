import express from "express";
import cors from "cors";
import usuariosRouter from "./src/routes/usuarios.js";
import produtosRouter from "./src/routes/produtos.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/usuarios", usuariosRouter);
app.use("/produtos", produtosRouter);

export default app;
