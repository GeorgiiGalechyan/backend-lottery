// Imports
import { app, start } from './server.js'
import regPlugins from './src/plugins/regAllPlugins.js'
import regRoutes from './src/routes/regAllRoutes.js'

// Main thread
regPlugins().then(app.log.info('Plugins registration is complete'))
regRoutes().then(app.log.info('Routes registration is complete'))
start()

// Checking Pino
// app.log.debug({ msg: 'Checking Pino_debug' })
// app.log.info({ msg: 'Checking Pino_info' })
// app.log.error({ msg: 'Checking Pino_error' })
// app.log.fatal({ msg: 'Checking Pino_fatal' })
