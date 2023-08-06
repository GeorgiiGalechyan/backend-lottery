import fp from 'fastify-plugin'
import envScheme from 'env-schema'

import { opts } from './options.js'

const envPlugin = async (app) => {
  await app
    .register(envScheme, opts)
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin "env-schema" is registered')))
}

// console.log(opts)

export default fp(envPlugin)
