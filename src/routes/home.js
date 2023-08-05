const getStartScreen = async (app) => {
  await app.get('/', async (request, reply) => {
    try {
      await reply.send('Стартовая страница')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { getStartScreen }
