const gameslist = async (app) => {
  await app.get('/api/v1/screens/gameslist', async (request, reply) => {
    try {
      await reply.send('На этом экране выводится список игр')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { gameslist }
