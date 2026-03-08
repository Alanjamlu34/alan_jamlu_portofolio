import { pool } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, chat } = body
  
  if (!username || !chat) {
    throw createError({ statusCode: 400, statusMessage: 'Username and chat are required' })
  }

  try {
    const [result] = await pool.query('INSERT INTO chat (username, chat) VALUES (?, ?)', [username, chat])
    return { success: true, id: (result as any).insertId }
  } catch (error) {
    console.error(error)
    throw createError({ statusCode: 500, statusMessage: 'Database error' })
  }
})
