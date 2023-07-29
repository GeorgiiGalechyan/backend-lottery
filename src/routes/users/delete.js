export const regNewUser = async (app) => {
  await app.post('/reg', opts, async function (request, reply) {
    try {
      const { login, password, email } = request.body // получили наши данные
      await createNewUser(login, password, email)

      async function createNewUser(login, password, email) {
        try {
          await app.pg.dev.transact(async (client) => {
            await client.query(
              `INSERT INTO users (login, password, email) VALUES ('${login}', '${password}', '${email}') RETURNING *;`
            )
            await app.log.info({ msg: `Пользователь '${login}' добавлен в таблицу 'users'` })
          })
        } catch (err) {
          app.log.error({
            msg: `Error adding user '${login}' to table 'users'`,
            'Error code': err.code,
            'Error type': err.type,
            Message: err.message,
            Detail: err.detail,
            'DB table': err.table,
            'DB constraint': err.constraint,
            Stack: err.stack,
          })
        }
      }

      await app.log.info({ msg: 'Post метод отработал (logger)' })
      await reply.send('Post метод отработал (reply.send)')
    } catch (err) {
      await app.log.error(err)

      await app.log.error({ msg: `Что-то пошло не так при регистрации пользователя ${request.body.login}` })
    }
  })
}

const opts = {
  logLevel: 'info',
  schema: {
    body: {
      type: 'object',
      required: ['login'],
      properties: {
        login: { type: 'string' },
      },
    },
  },
}
