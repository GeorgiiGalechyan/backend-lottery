import { app } from './server.js'

// Import Routes
import { start } from './src/api/v1/screens/start.js'
import { registration } from './src/api/v1/screens/registration.js'
import { gameslist } from './src/api/v1/screens/gamesList.js'
import { lotteryGame } from './src/api/v1/screens/lotteryGame.js'

import { getRegUserPage, regNewUser } from './src/routes/register.js'

// Function for route registration
const routesRegistration = async () => {
  await app.register(start).after(app.log.info({ msg: 'Route "screens/start" is registered.' }))

  await app.register(registration).after(app.log.info({ msg: 'Route "screens/registration" is registered.' }))

  await app.register(gameslist).after(app.log.info({ msg: 'Route "screens/gamesList" is registered.' }))

  await app.register(lotteryGame).after(app.log.info({ msg: 'Route "screens/lottery-game" is registered.' }))

  await app.register(getRegUserPage).after(app.log.info({ msg: 'Route  GET   "getRegUserPage"  is registered.' }))

  await app.register(regNewUser).after(app.log.info({ msg: 'Route  POST  "regNewUser"      is registered.' }))

  app.log.info({ msg: '----- All Routes are registered! -----' })
}

export { routesRegistration }
