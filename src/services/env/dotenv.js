// =============== Dotenv config ===============

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  dotenv: true,
  path: `${__dirname}/.env`, // if .env file not root folder (назначить)
  encoding: 'utf8',
  debug: true,
  override: true,
}
