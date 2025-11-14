import express from "express";
import { getProdutoId, getProdutos } from "../controllers/produtos.js";

const produtosRouter = express.Router();

produtosRouter.get("/", getProdutos);
produtosRouter.get("/:id", getProdutoId);

export default produtosRouter;
