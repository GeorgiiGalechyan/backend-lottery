import { app } from '../../server.js'

// Wrap screen routes
import start from './screens/start.js'
import registration from './screens/registration.js'
import gameslist from './screens/gamesList.js'
import lotteryGame from './screens/lotteryGame.js'
import basket from './screens/basket.js'

// User route
import createUser from './users/regNewUser.js'

// Function for route registration
export default async () => {
  await app.register(start)
  app.log.info({ msg: 'Route "/" is registered.' })
  // .ready(app.log.info({ msg: 'Route "/" is registered.' }))

  await app.register(registration)

  // .ready(app.log.info({ msg: 'Route "/reg" is registered.' }))

  await app.register(gameslist)

  // .ready(app.log.info({ msg: 'Route "games/list" is registered.' }))

  await app.register(lotteryGame)

  // .ready(app.log.info({ msg: 'Route "/games/lottery" is registered.' }))

  await app.register(basket)

  // .ready(app.log.info({ msg: 'Route "/basket" is registered.' }))

  await app.register(createUser)

  // .ready(app.log.info({ msg: 'Route "/reg" is registered.' }))

  app.log.info({ msg: 'All routes are registered!' })
}
