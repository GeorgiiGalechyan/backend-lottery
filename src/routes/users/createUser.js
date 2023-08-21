// Imports Users Controllers
import Users from '../../controllers/user.js'

const opts = {
  logLevel: 'info',
  schema: {
    body: {
      type: 'object',
      required: ['login', 'password', 'email'],
      properties: {
        login: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
}

const handler = Users.createUser

export default async (app) => app.post('/user/:username', opts, handler)
