import { pool } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await pool.query('SELECT * FROM chat ORDER BY chatID DESC LIMIT 5')
    return rows
  } catch (error) {
    console.error(error)
    throw createError({ statusCode: 500, statusMessage: 'Database error' })
  }
})
