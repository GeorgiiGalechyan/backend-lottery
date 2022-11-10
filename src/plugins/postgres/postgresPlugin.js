import { FastifyPlugin } from 'fastify'

// const user = process.env.PG_USERNAME
// const pass = process.env.PG_PASSWORD
// const host = process.env.PG_HOST
// const port = process.env.PG_PORT
// const db = process.env.PG_DB_NAME

const connectString = `postgres://${env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`

const pgRegPlugin = (fastify) => {
  fastify.register(require('@fastify/postgres'), {
    connectionString: connectString,
    name: 'postgres-lottery',
  })
}

export default pgConnectPlugin = FastifyPlugin(pgRegPlugin)
