import { app } from '../../server.js'

import envPlugin from './env/index.js'
import postgresPlugin from './postgres/index.js'

// Function for plugins registration
export default async () => {
  app.register(envPlugin).after((err) => {
    if (err) {
      app.log.error(`There was an error loading @fastify/env: '${err}'`)
    }
  })

  app.register(postgresPlugin).after((err) => {
    if (err) {
      app.log.error(`There was an error loading @fastify/postgres: '${err}`)
    }
  })
}
