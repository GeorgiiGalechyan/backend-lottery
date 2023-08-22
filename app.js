// Imports
import { app, start } from './src/utils/server.js'
import regPlugins from './src/plugins/index.js'
import regRoutes from './src/routes/index.js'

// Main thread
regPlugins(app).then(app.log.info('Plugins registration is complete.\n'))
regRoutes(app).then(app.log.info('Routes registration is complete.\n'))
start()

// Checking Pino
// app.log.debug({ msg: 'Checking Pino_debug' })
// app.log.info({ msg: 'Checking Pino_info' })
// app.log.error({ msg: 'Checking Pino_error' })
// app.log.fatal({ msg: 'Checking Pino_fatal' })
