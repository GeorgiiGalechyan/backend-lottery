// Import Controllers

// Routes
const options = {}

const getGamesListScreen = async (request, reply) => {
  try {
    await reply.send('На этом экране выводится список игр')
  } catch (err) {
    request.log.error(err)
  }
}

const gameslist = async (app) => await app.get('/api/v1/screens/gameslist', options, getGamesListScreen)

const lotteryGame = async (app) => {
  await app.get('/api/v1/screens/lottery-game', async (request, reply) => {
    try {
      await reply.send('Это экран игры Лотерея, процесс игры происходит здесь')
    } catch (err) {
      request.log.error(err)
    }
  })
}

export { gameslist }
