import fp from 'fastify-plugin'
import envScheme from 'env-schema'

import opts from './options.js'

const envPlugin = async (app) =>
  await app
    .register(envScheme, opts)
    .ready((err) => (err ? app.log.error(err) : app.log.info('Plugin "env-schema" is registered')))

export default fp(envPlugin)

console.log(opts)
console.log(opts.schema)
