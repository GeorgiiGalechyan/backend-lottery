import Fastify from 'fastify'
import fp from 'fastify-plugin'

/* =================== Основой поток =================== */

const init = async () => {
  const fastify = Fastify({ logger: true })

  // Регистриуем плагины
  await fastify.register(import('./src/plugins/env/envPlugin.js'))
  await fastify.register(import('./src/plugins/postgres/pgPlugin.js'))

  // Регистрируем роуты
  await fastify.register(import('./src/routes/home.js'))

  // Запуск прослушивания порта сервером
  console.log('starting server')

  const listenHandler = (err, address) => {
    try {
      console.log(`Fastify listening on: ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }

  fastify.listen({ port: process.env.PORT || 5000 }, (err, address) => {
    if (err) {
      fastify.log.error(err)
      fastify.exit(1)
    }
    console.log(`Fastify listening on: ${address}`)
  })
}

init()
