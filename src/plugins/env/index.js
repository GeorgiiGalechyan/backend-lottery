import fastifyEnv from '@fastify/env'

import opts from './options.js'

export default async (app) => await app.register(fastifyEnv, opts)
