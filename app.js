// Adding __filename and __dirname for ES6 modules.

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/* =================== Imports =================== */
import _ from './src/services/env/env-scheme.js'
import fastify from 'fastify'

// pino - config object {dev, prod, test}
const { default: pino } = await import('./src/services/pino/config/config.js')

/* =================== Main thread =================== */

// Create server
const app = fastify({ logger: pino.dev ?? true })

// Registering plugins
// await app.register(import('./src/plugins/postgres/plugin.js'))

// Registering routes
await app.register(import('./src/routes/home.js'))

// Start listening
const start = async () => {
  try {
    await app.listen({ port: /*process.env.PORT || */ 5000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

app.log.trace({ msg: 'Trace event or message' })
app.log.debug({ msg: 'Debug event or message' })
app.log.info({ msg: 'Info event or message' })
app.log.warn({ msg: 'Warn event or message' })
app.log.error({ msg: 'Error event or message' })
app.log.fatal({ msg: 'Fatal event or message' })
app.log.silent({ msg: 'Silent event or message' })
