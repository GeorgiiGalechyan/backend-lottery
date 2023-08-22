// Screens
export default async (app) => {
  try {
    app.register(import('./start.js'))
    app.register(import('./games.js'))
    app.register(import('./lottery.js'))
    app.register(import('./registration.js'))
    app.register(import('./basket.js'))
  } catch (error) {
    app.log.error('Ошибка функции regScreenRoutes() внутри файла "./src/routes/index.js".')
    app.log.error(error)
  }
}
