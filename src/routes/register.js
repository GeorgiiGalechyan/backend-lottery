// opts

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
export const getRegUserPage = async (app) => {
  await app.get('/reg', getRegUserPageOpts, async function (request, reply) {
    await reply.send('Здесь будет страница регистрации нового пользователя')
  })
}

export const regNewUser = async (app) => {
  await app.post('/reg/', regNewUserOpts, async function (request, reply) {
    try {
      // 1. Проверяем тело запроса. Должен быть  {login: '', pass: ''}
      // 1.1. успех: логируем успех
      // 1.2. провал: логирем провал, возвращаем сообщение о провале.
      // 2 Проверяем логин на уникальность;
      // 2.1. успех:
      // 2.1.1. вносим данные в БД
      // 2.1.2. проверяем что данные внеслись в БД (успех или провал)
      // 2.1.3. отпраляем пользователю сообщение об успешной регистрации
      // 2.2. провал:
      // 3) Если всё хорошо, то вносим данные в BD
      // 4) Возвращаем объект {status: 'error'/'sucesfull', msg: '' }
      // здесь логика маршрута
      await app.log.info({ msg: 'Post метод отработал (logger)' })
      await reply.send('Post метод отработал (reply.send)')
    } catch (err) {
      await app.log.error(err)
      await app.log.error({ msg: `Что-то пошло не так при регистрации пользователя ${newUserData.login}` })
    }
  })
}
