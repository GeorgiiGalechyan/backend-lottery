import fp from 'fastify-plugin'
import options from './envOptions.js'

/**
 * @param {FastifyInstance} fastify
 */
async function useEnv(fastify) {
  await fastify.register(import('@fastify/env'), options).after((err) => {
    if (err) {
      console.log(err)
    }
    console.log('envPlugin registered')
  })
}

export default fp(useEnv, { name: 'use-env-plugin' })
