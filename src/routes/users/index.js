// User API
export default async (app) => {
  try {
    app.register(import('./createUser.js'))
  } catch (error) {
    app.log.error('Ошибка функции regUserRoutes() внутри файла "./src/routes/index.js".')
    app.log.error(error)
  }
}
