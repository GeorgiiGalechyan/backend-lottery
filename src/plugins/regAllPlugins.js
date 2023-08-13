import { app } from '../../server.js'
import fastifyEnv from '@fastify/env'
import envOpts from './env/options.js'
import fastifyPostgres from '@fastify/postgres'
import pgOpts from './postgres/options.js'

// Function for plugins registration
export default async () => {
  await app
    .register(fastifyEnv, envOpts)
    .after((err) => (err ? app.log.error(err) : app.log.info({ msg: 'Plugin "@fastify/env" are registered' })))

  await app
    .register(fastifyPostgres, pgOpts)
    .after((err) => (err ? app.log.error(err) : app.log.info({ msg: 'Plugin "@fastify/postgres" are registered' })))

  app.log.info('Plugins registration completed! ====\n')
}
