// Adding  __dirname &  __filename for ES6 modules
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Dotenv config
export default {
  path: `${__dirname}/.env`, // if .env file not root folder
  encoding: 'utf8',
  debug: true,
  override: true,
}
