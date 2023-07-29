// Adding __filename and __dirname for ES6 modules.
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/* =================== Imports =================== */
import _ from './src/services/env/env-scheme.js'
import fastify from 'fastify'

// Routes
const { getRegUserPage, regNewUser } = await import('./src/routes/register.js')

// pino - config object = {dev, prod, test}

const { default: pino } = await import('./src/services/pino/config/config.js')

/* =================== Main thread =================== */

// Create server
const app = fastify({ logger: pino.dev ?? true })

// Registering plugins
await app.register(import('./src/plugins/postgres/plugin.js'))

// Registering routes
await app.register(await import('./src/routes/home.js'))
await app.register(getRegUserPage)
await app.register(regNewUser)

// Start listening
const start = async () => {
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

start()
