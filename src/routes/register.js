// Imports Controllers
import { createNewUser } from '../controllers/usersController.js'

// Routes

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
