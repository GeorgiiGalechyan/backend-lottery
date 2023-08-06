const options = {}

const getGamesListScreen = async (request, reply) => {
  try {
    await reply.send('На этом экране выводится список игр')
  } catch (err) {
    request.log.error(err)
  }
}

export const gameslist = async (app) => await app.get('/api/v1/screens/gameslist', options, getGamesListScreen)
