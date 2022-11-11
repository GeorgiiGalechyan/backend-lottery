export default async (fastify, options, done) => {
  await fastify.get('/', async function (request, reply) {
    try {
      await reply.send('Стартовая страница')
    } catch (err) {
      console.error(err)
    }
  })
  done()
}
