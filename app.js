/* =================== Imports =================== */
import { app, start } from './server.js'
import regAllplugins from './src/plugins/regAllPlugins.js'
import regAllRoutes from './src/routes/regAllRoutes.js'

/* =================== Main thread =================== */

// Registering routes
await regAllRoutes()

// Registering plugins
await regAllplugins()

// Start Server listening
await start()

// Checking Pino
// app.log.debug({ msg: 'Checking Pino_debug' })
// app.log.info({ msg: 'Checking Pino_info' })
// app.log.error({ msg: 'Checking Pino_error' })
// app.log.fatal({ msg: 'Checking Pino_fatal' })
