import fp from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

import opts from './options.js'

const postgresPlugin = async (app) => app.register(fastifyPostgres, opts)

export default fp(postgresPlugin)

console.log(opts.connectionString)
