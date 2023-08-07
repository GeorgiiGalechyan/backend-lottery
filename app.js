/* =================== Imports =================== */
import { app, start } from './server.js'
import pluginsRegistration from './pluginsRegistration.js'
import routesRegistration from './routesRegistration.js'

/* =================== Main thread =================== */

// Registering plugins
await pluginsRegistration(app)

// Registering routes
await routesRegistration(app)

// Start Server listening
await start()
