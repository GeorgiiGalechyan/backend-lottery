// Adding Current Environment Variable
import { environment } from './src/utils/currentEnvironment.js'

import fastify from 'fastify'
import { Pino } from './src/services/pino/index.js' // Pino congiguration

// Create server
export const app = fastify({ logger: Pino[environment] ?? { level: 'info' } })

export async function start() {
  try {
    app.listen({
      port: process.env.HTTP_PORT || 5000,
      listenTextResolver: (address) => `Server listening on address ${address}`,
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
