import { app } from './server.js'

// Import Routes
import { getStartScreen } from './src/routes/home.js'
import { getRegUserPage, regNewUser } from './src/routes/register.js'

// Function for route registration
const routesRegistration = async () => {
  await app.register(getStartScreen).after(app.log.info({ msg: 'Route  GET   "getHomePage"     is registered.' }))

  await app.register(getRegUserPage).after(app.log.info({ msg: 'Route  GET   "getRegUserPage"  is registered.' }))

  await app.register(regNewUser).after(app.log.info({ msg: 'Route  POST  "regNewUser"      is registered.' }))

  app.log.info({ msg: '----- All Routes are registered! -----' })
}

export { routesRegistration }
