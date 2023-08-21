import fp from 'fastify-plugin'

import envOpts from './options.js'

export default fp(async (app, options) => {
  await app.register(import('@fastify/env'), envOpts)
})
