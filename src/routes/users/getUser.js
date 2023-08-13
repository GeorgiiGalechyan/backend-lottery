// Imports Users Controllers
import Users from '../../controllers/user.js'

const opts = {}
const handler = Users.getUserById

export default async (app) => await app.get('/user/:id', opts, handler)
