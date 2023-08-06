const start = async (app) => {
  await app.get('/api/v1/screens/start', async (request, reply) => {
    try {
      await reply.send('Это стартовый экран (точка входа) приложения')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { start }
