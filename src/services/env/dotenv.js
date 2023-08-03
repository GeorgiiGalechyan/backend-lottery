// =============== Dotenv config ===============

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)

export default {
  dotenv: true,
  path: `${__dirname}/.env`, // if .env file not root folder
  encoding: 'utf8',
  debug: true,
  override: true,
}
