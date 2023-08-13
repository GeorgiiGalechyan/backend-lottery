import { app } from '../../server.js'

// Import Plugins
import env from './env/index.js'
import Postgres from './postgres/index.js'

// Function for plugins registration
export default async () => {
  app.register(env).ready(app.log.info('Plugin "env-schema" is ready'))
  await app
  app.register(Postgres).ready(app.log.info({ msg: 'Plugin Postgres is ready' }))
  await app

  app.log.info({ msg: 'All plugins are registered!' })
}
