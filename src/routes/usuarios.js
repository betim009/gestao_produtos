import express from "express";
import { getUserId, getUsers } from "../controllers/usuarios.js";

const usuariosRouter = express.Router();

usuariosRouter.get("/", getUsers);
usuariosRouter.get("/:id", getUserId);
// usuariosRouter.post("/", createUser);
// usuariosRouter.put("/:id", getUserId);
// usuariosRouter.delete("/:id", getUserId);

export default usuariosRouter;
