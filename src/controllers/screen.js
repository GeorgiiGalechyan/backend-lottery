export default {
  getStartScreen: async (request, reply) => {
    try {
      await reply.send('Это стартовый экран приложения')
    } catch (err) {
      request.log.error(err)
    }
  },

  getUserRegScreen: async (request, reply) => {
    try {
      await reply.send('Это экран с формой регистрации новых пользователей')
    } catch (err) {
      request.log.error(err)
    }
  },

  getBasketScreen: async (request, reply) => {
    try {
      await reply.send('На этом экране выводится корзина пользователя')
    } catch (err) {
      request.log.error(err)
    }
  },

  getGamesListScreen: async (request, reply) => {
    try {
      await reply.send('На этом экране выводится список игр')
    } catch (err) {
      request.log.error(err)
    }
  },

  getLotteryGameScreen: async (request, reply) => {
    try {
      await reply.send('Это экран игры Лотерея, процесс игры происходит здесь')
    } catch (err) {
      request.log.error(err)
    }
  },
}
