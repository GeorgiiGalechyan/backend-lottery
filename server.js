// Adding Current Environment Variable
import { environment } from './src/utils/currentEnvironment.js'

// Adding Env Variables
import _ from './src/services/env/env-scheme.js'

// Fastify import
import fastify from 'fastify'

// Logger Pino congiguration
import { Pino } from './src/services/pino/index.js'

/* =================== Main thread =================== */

// Create server
const app = fastify({ logger: Pino[environment] ?? { level: 'error' } })

function start() {
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

export { app, start }
