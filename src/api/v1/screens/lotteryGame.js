const lotteryGame = async (app) => {
  await app.get('/api/v1/screens/lottery-game', async (request, reply) => {
    try {
      await reply.send('Это экран игры Лотерея, процесс игры происходит здесь')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { lotteryGame }
