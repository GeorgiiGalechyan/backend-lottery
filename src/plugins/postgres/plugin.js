import fp from 'fastify-plugin'

const connectionString = `postgres://${process.env.PG_USERNAME_DEV}:${process.env.PG_PASSWORD_DEV}@${process.env.PG_HOST_DEV}/${process.env.PG_DB_NAME_DEV}`

// const { default: connectionData } = import('./connectionData.js')

const connectPg = async (app) => {
  await app
    .register(import('@fastify/postgres'), { connectionString, name: 'dev' })
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(connectPg, { name: 'postgres-connect-plugin' })
