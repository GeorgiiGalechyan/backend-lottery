import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'

import opts from './options.js'

const envPlugin = async (app) => {
  await app
    .register(fastifyEnv, opts)
    .ready((err) => (err ? app.log.error(err) : app.log.info('Plugin "env-schema" is registered')))
}

export default fp(envPlugin)
