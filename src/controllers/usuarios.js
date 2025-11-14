import { findUserId, findUsers } from "../models/usuarios.js";

export const getUsers = async (req, res) => {
  const data = await findUsers();

  if (data.length === 0) return res.json("Sem usuarios");
  return res.json(data);
};

export const getUserId = async (req, res) => {
  const { id } = req.params;
  const data = findUserId(id);

  if (data.length === 0) {
    return res.json({ msg: "Nao existe usuario" });
  }

  return res.json(data);
};

// export const createUser = async (req, res) => {
//   const { nome_completo, email } = req.body;
//   const [result] = await connection.execute(
//     "INSERT INTO usuarios (nome_completo, email) VALUES (?, ?)",
//     [nome_completo, email]
//   );
//   return res.json(result);
// };

// app.get("/usuarios-email/:email", async (req, res) => {
//   const { email } = req.params;
//   const [result] = await connection.execute(
//     "SELECT * FROM usuarios WHERE email = ? ",
//     [email]
//   );
//   return res.json(result);
// });

// app.get("/produtos", async (req, res) => {
//   const [result] = await connection.execute("SELECT * FROM produtos");
//   return res.json(result);
// });
