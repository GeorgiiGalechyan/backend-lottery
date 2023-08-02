// Adding __filename and __dirname for ES6 modules.
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/* =================== Imports =================== */
import _ from './src/services/env/env-scheme.js'
import fastify from 'fastify'

// Logger Pino congiguration
const { default: pino, environment } = await import('./src/services/pino/index.js')

/* =================== Main thread =================== */

// Create server
export const app = fastify({ logger: pino[environment] ?? { level: 'error' } })

export function start() {
  try {
    app.listen({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 5000,
      listenTextResolver: (address) => `Server listening on address ${address}`,
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
