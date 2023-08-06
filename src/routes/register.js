// Imports Controllers
import { createNewUser } from '../controllers/usersController.js'

// Routes

const regNewUserOpts = {
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

const getRegUserPageOpts = {
  logLevel: 'info',
  // подумать в будущем как работать со схемами
  // schema: {
  //   response: {
  //     200: {
  //       type: 'string',
  //     },
  //   },
  // },
}

// Routes
const getRegUserPage = async (app) => {
  await app.get('/reg', getRegUserPageOpts, async function (request, reply) {
    await reply.send('Здесь будет страница регистрации нового пользователя')
  })
}

const regNewUser = async (app) => await app.post('/reg', regNewUserOpts, createNewUser)

export { getRegUserPage, regNewUser }
