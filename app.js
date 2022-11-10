/* =================== Импорты =================== */

import Fastify from 'fastify'

// Plugins
import envPlugin from './src/plugins/env/envPlugin.js'
import pgConnectPlugin from './src/plugins/postgres/postgresPlugin.js'

// Routes
import { homeRoute } from './src/routes/home.js'

/* =================== Основой поток =================== */

// Создаём сервер
const fastify = Fastify({ logger: true })

// Инициация приложения
const init = () => {
  fastify.register(envPlugin).ready((err) => console.log(err))
  fastify.after()
  fastify.register(pgConnectPlugin).ready((err) => console.log(err))
}
init()

/* =============== Подключение  Routes =============== */
fastify.register(homeRoute)

/* ================= Запуск  сервера ================= */
const PORT = process.env.PORT

const serverConfig = {
  port: process.env.PORT,
  host: process.env.HOST || '127.0.0.1',
}

fastify.listen({ port: PORT }, (err, adsress) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Fastify listening on: ${fastify.server.address().port}`)
})
