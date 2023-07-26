import fp from 'fastify-plugin'

const { default: connectionData } = import('./connectionConfig.js')

const connectPg = async (app) => {
  await app
    .register(import('@fastify/postgres'), connectionData)
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(connectPg, { name: 'postgres-connect-plugin' })
