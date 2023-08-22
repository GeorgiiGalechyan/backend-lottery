import regScreenRoutes from './screens/index.js'
import regUserRoutes from './users/index.js'

// Function for route registration
export default async (app) => {
  regScreenRoutes(app).then(app.log.info('Screen routes are registered.'))
  regUserRoutes(app).then(app.log.info('User routes are registered.'))
}
