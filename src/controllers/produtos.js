import connection from "../models/db/connection.js";

export const getProdutos = async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM produtos ");

  if (result.length === 0) {
    return res.json({ msg: "Nao existe esse produto" });
  }

  return res.json(result);
};

export const getProdutoId = async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "SELECT * FROM produtos WHERE id = ? ",
    [id]
  );

  if (result.length === 0) {
    return res.json({ msg: "Nao existe esse produto" });
  }

  return res.json(result);
};
