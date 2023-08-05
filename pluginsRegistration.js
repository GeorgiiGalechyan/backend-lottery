import { app } from './server.js'

// Import Plugins
import * as Postgres from './src/plugins/postgres/index.js'

// Function for plugins registration
const pluginsRegistration = async () => {
  await app.register(Postgres)

  app.log.info({ msg: '----- All plugins are registered! -----' })
}

export { pluginsRegistration }
