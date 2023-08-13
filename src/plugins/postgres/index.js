import fp from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

import opts from './options.js'

console.log(opts.connectionString)

const postgresPlugin = async (app) => await app.register(fastifyPostgres, opts)

export default fp(postgresPlugin)
