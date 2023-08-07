/* =================== Imports =================== */
import { start } from './server.js'
import pluginsRegistration from './pluginsRegistration.js'
import routesRegistration from './routesRegistration.js'

/* =================== Main thread =================== */

// Registering plugins
await pluginsRegistration()

// Registering routes
await routesRegistration()

// Start Server listening
await start()
