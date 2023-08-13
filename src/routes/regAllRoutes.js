import { app } from '../../server.js'

// Wrap screen routes
import start from './screens/start.js'
import registration from './screens/registration.js'
import gameslist from './screens/gamesList.js'
import lotteryGame from './screens/lotteryGame.js'
import basket from './screens/basket.js'

// User route
import createUser from './users/createUser.js'

// Function for route registration
export default async () => {
  await app.register(start)
  app.log.info({ msg: 'Route "/" is registered.' })

  await app.register(registration)
  app.log.info({ msg: 'Route "/reg" is registered.' })

  await app.register(gameslist)
  app.log.info({ msg: 'Route "/games" is registered.' })

  await app.register(lotteryGame)
  app.log.info({ msg: 'Route "/games/lottery" is registered.' })

  await app.register(basket)
  app.log.info({ msg: 'Route "/user/basket" is registered.' })

  await app.register(createUser)

  app.log.info('Routes registration completed! ====\n')
}
