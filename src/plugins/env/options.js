// =============== Env-scheme options ===============

import { schema } from './schema.js'
import { dotenv } from './dotenv.js'

const opts = {
  confKey: 'config',
  schema,
  dotenv,
  data: process.env,
  // expandEnv: true, // PROBLEM!!!
}

export { opts }
