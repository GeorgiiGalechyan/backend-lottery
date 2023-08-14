/* =================== Imports =================== */
import { app, start } from './server.js'
import regAllplugins from './src/plugins/regAllPlugins.js'
import regAllRoutes from './src/routes/regAllRoutes.js'

/* =================== Main thread =================== */

await regAllplugins()
await regAllRoutes()
await app.ready()

await start()

// Checking Pino
// app.log.debug({ msg: 'Checking Pino_debug' })
// app.log.info({ msg: 'Checking Pino_info' })
// app.log.error({ msg: 'Checking Pino_error' })
// app.log.fatal({ msg: 'Checking Pino_fatal' })
