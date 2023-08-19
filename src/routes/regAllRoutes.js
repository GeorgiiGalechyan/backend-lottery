// Wrap screen routes
import start from './screens/start.js'
import registration from './screens/registration.js'
import gameslist from './screens/gamesList.js'
import lotteryGame from './screens/lotteryGame.js'
import basket from './screens/basket.js'

// User route
import createUser from './users/createUser.js'

// Function for route registration
export default async (app) => {
  await app.register(start)
  await app.register(registration)
  await app.register(gameslist)
  await app.register(lotteryGame)
  await app.register(basket)
  await app.register(createUser)

  app.log.info('Routes registration is complete')
}
