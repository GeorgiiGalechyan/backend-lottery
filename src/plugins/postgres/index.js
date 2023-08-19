import fastifyPostgres from '@fastify/postgres'

import opts from './options.js'

export default async (app) => app.register(fastifyPostgres, opts)
