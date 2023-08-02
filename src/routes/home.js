export const getHomePage = async (app) => {
  await app.get('/', { loglevel: 'info' }, async function (request, reply) {
    try {
      await reply.send('Стартовая страница')
    } catch (err) {
      app.log.error(err)
    }
  })
}
