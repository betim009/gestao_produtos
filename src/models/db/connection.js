import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost", // Seu host do MySQL
  user: "root", // Seu usuário do MySQL
  password: "12345678", // Sua senha do MySQL
  database: "gestao_produtos", // nome do BD Sakila
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
