const handler = async function (request, reply) {
  try {
    await reply.send('Стартовая страница')
  } catch (err) {
    request.log.error(err)
  }
}

const getStartScreen = async (app, opts, done) => {
  await app.get('/', handler)
  await done()
}

export { getStartScreen }
