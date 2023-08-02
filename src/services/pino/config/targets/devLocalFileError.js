// Adding __dirname to the ES6 module
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Transpor for wtite log on local file.
export default {
  target: 'pino/file',
  name: 'dev-local-file-errors',
  level: 'error',
  options: {
    // Настройки 'pino/file'

    // cr
    destination: `${__dirname}/../../logs/dev/error.log`,
    mkdir: true,
  },
}
