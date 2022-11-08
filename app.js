/* =================== Импорты =================== */

import Fastify from 'fastify'

// Plugins
import envPlugin from './src/plugins/env/envPlugin.js'

// Routes
import { homeRoute } from './src/routes/home.js'

/* =================== Основой поток =================== */

// Создаём сервер
const fastify = Fastify({ logger: true })

// Инициилизируем Env
fastify.register(envPlugin).ready((err) => console.log(err))

/* =================== База данных =================== */

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
  console.log(`Fastify listening on: ${adsress}`)
})
