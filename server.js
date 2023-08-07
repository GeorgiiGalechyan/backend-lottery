// Adding __dirname to the ES6 module
// import path from 'path'
// import { fileURLToPath } from 'url'
//
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// Adding Current Environment Variable
import { environment } from './src/utils/currentEnvironment.js'

// Fastify import
import fastify from 'fastify'

// Logger Pino congiguration
import { Pino } from './src/services/pino/index.js'

/* =================== Main thread =================== */

// Create server
export const app = fastify({ logger: Pino[environment] ?? { level: 'info' } })

export async function start(app) {
  try {
    app.listen({
      port: process.env.PORT || 5000,
      listenTextResolver: (address) => `Server listening on address ${address}`,
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
