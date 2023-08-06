import { app } from './server.js'

// Import Plugins
import * as Postgres from './src/plugins/postgres/index.js'
import * as env from './src/plugins/env/index.js'

// Function for plugins registration
const pluginsRegistration = async () => {
  app.register(env)
  await app.register(Postgres)

  await app.log.info({ msg: 'All plugins are registered!' })
}

export { pluginsRegistration }
