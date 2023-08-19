import fp from 'fastify-plugin'

// imports Plugins
import envPlugin from './env/index.js'
import postgresPlugin from './postgres/index.js'

// Function for plugins registration
export default async (app) => {
  app
    .register(fp(envPlugin))
    .after((err) => {
      if (err) {
        app.log.error(`envPlugin reg error: ${err}`)
      }
    })
    .register(fp(postgresPlugin))
    .after((err) => {
      if (err) {
        app.log.error(`postgresPlugin reg error: ${err}`)
      }
    })

  app.log.info('Plugins registration is complete')
}
