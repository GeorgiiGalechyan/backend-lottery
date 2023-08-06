// Imports Users Controllers
import { User } from '../controllers/usersController.js'

// import Options
import { createNewUserOpts } from './routesOption/userRouteOpts.js'

// User Routes
const createNewUser = async (app) => await app.post('/reg', createNewUserOpts, User.createNewUser)

export { createNewUser }
