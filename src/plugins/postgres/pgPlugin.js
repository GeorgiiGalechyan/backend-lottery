import fp from 'fastify-plugin'
import pg from '@fastify/postgres'
import options from './pgOptions.js'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} opts
 */
const connectPostgres = async (fastify) => {
  await fastify.register(pg, options).after((err) => {
    if (err) {
      console.log(err)
    }
    console.log('pgConnectPlugin registered')
  })
}

export default fp(connectPostgres, { name: 'postgres-connect-plugin' })
