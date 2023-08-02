// Options
export const devTerminal = {
  target: 'pino-pretty',
  name: 'dev-terminal', // можно не указывать
  level: process.env.PINO_LOG_DEV_LEVEL || 'error',

  // настройки pino-pretty
  options: {
    colorize: true, // добавляем цвета в консоль
    levelFirst: true, // переносим значение level в начало сообщения
    ignore: 'pid,hostname', // убираем из сообщения id процесса и имя хоста
    translateTime: 'yyyy-mm-dd HH:MM:ss Z', // меняем формат даты
  },
}
