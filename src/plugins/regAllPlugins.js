import { app } from '../../server.js'

// Import Plugins
import env from './env/index.js'
import Postgres from './postgres/index.js'

// Function for plugins registration
export default async () => {
  await app.register(env)
  app.log.info('Plugin "env-schema" is ready')

  await app.register(Postgres)
  app.log.info({ msg: 'Plugin Postgres is ready' })

  app.log.info({ msg: 'All plugins are registered!' })
}
