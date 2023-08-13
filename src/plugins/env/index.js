import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'

import opts from './options.js'

const envPlugin = async (app) => await app.register(fastifyEnv, opts)

export default fp(envPlugin)
