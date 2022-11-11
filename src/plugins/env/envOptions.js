import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import schema from './envSchema.js'

export default {
  schema,
  dotenv: {
    path: `${__dirname}/.env`,
    debug: true,
  },
}
