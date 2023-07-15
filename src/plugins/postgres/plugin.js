import fp from 'fastify-plugin'

const { default: config } = import('./connectionConfig.js')

const connectPg = async (app) => {
  await app
    .register(import('@fastify/postgres'), config)
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(connectPg, { name: 'postgres-connect-plugin' })
