import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function seed() {
  const pool = mysql.createPool(process.env.DATABASE_URL);
  
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
