// Adding __dirname to the ES6 module
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//============ Multistream with Targets (another way: ) ======================

const targets = [
  {
    name: 'dev-terminal', // можно не указывать
    level: process.env.PINO_LOG_DEV_LEVEL || 'info',
    target: 'pino-pretty',
    options: {
      // настройки pino-pretty
      colorize: true, // добавляем цвета в консоль
      levelFirst: true, // переносим значение level в начало сообщения
      ignore: 'pid,hostname', // убираем из сообщения id процесса и имя хоста
      translateTime: 'yyyy-mm-dd HH:MM:ss Z', // меняем формат даты
    },
  },
  {
    name: 'dev-local-file',
    level: 'debug',
    target: 'pino/file',
    options: {
      // Настройки 'pino/file'
      // cr
      destination: `${__dirname}/../logs/dev.log`,
      mkdir: true,
    },
  },
]

export default {
  transport: {
    targets,
  },
}
