import { app } from './server.js'

// Import Plugins
import env from './src/plugins/env/index.js'
import Postgres from './src/plugins/postgres/index.js'

// Function for plugins registration
export default async () => {
  await app.register(env)
  await app.register(Postgres)

  app.log.info({ msg: 'All plugins are registered!' })
}
