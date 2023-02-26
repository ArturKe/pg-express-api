// const Pool = require('pg').Pool
import * as pg from 'pg'
const { Pool } = pg.default

export const db = new Pool({
  user: "postgres",
  password: 'postgres',
  host: "185.225.34.182",
  port: 5432,
  database: 'postgres'
})

// module.exports = pool
export default db