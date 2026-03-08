import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: "a2k6v2.h.filess.io",
  user: "PadiWeb_hunterred",
  password: "3717c76195c56137ab8fbc135bec29204d4058ff",
  database: "PadiWeb_hunterred",
  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
