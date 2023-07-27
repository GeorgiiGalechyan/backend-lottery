import fp from 'fastify-plugin'

const { default: connectionData } = import('./connectionData.js')

const connectPg = async (app) => {
  await app
    .register(import('@fastify/postgres'), { connectionData, name: 'dev' })
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(connectPg, { name: 'postgres-connect-plugin' })
