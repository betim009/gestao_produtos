import connection from "./db/connection.js";

export const findUsers = async () => {
  const [result] = await connection.execute("SELECT * FROM usuarios");
  return result;
};

export const findUserId = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM usuarios WHERE id = ? ",
    [id]
  );

  return result;
};
