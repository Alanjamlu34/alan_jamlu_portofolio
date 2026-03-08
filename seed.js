import mysql from 'mysql2/promise';

async function seed() {
  const pool = mysql.createPool('mysql://PadiWeb_hunterred:3717c76195c56137ab8fbc135bec29204d4058ff@a2k6v2.h.filess.io:3307/PadiWeb_hunterred');
  
  try {
    const [result] = await pool.query(`
      CREATE TABLE IF NOT EXISTS chat (
          chatID INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(50) NOT NULL,
          chat TEXT NOT NULL
      );
    `);
    console.log('Chat table created or already exists.');
  } catch(e) {
    console.error(e);
  } finally {
    await pool.end();
  }
}

seed();
