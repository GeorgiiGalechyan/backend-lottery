import fp from 'fastify-plugin'

import { pgConnectionData } from './pgConnectionData.js'

const postgresPlugin = async (app) => {
  await app
    .register(import('@fastify/postgres'), { pgConnectionData, name: 'dev' })
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(postgresPlugin, { name: 'postgres-plugin' })
