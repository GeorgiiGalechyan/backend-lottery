import _ from '../../services/env/env-scheme.js' // adding env variables
import fp from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

import { opts } from './options.js'

const postgresPlugin = async (app) => {
  await app
    .register(fastifyPostgres, opts)
    .after((err) => (err ? app.log.error(err) : app.log.info('Plugin @fastify/postgres is registered')))
}

export default fp(postgresPlugin)