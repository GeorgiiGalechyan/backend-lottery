export const homeRoute = async (fastify, options) => {
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })
}
