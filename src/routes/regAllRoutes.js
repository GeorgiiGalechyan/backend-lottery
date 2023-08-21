import { app } from '../../server.js'

// Function for route registration
export default async () => {
  app.register(import('./users/createUser.js'))
  app.register(import('./screens/start.js'))
  app.register(import('./screens/registration.js'))
  app.register(import('./screens/gamesList.js'))
  app.register(import('./screens/lotteryGame.js'))
  app.register(import('./screens/basket.js'))
}
