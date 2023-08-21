import fp from 'fastify-plugin'

import postgresOpts from './options.js'

export default fp(async (app, options) => {
  app.register(import('@fastify/postgres'), postgresOpts)
})
