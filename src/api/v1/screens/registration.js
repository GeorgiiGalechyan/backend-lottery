const registration = async (app) => {
  await app.get('/api/v1/screens/registration', async (request, reply) => {
    try {
      await reply.send('Это экран с формой регистрации новых пользователей')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { registration }
