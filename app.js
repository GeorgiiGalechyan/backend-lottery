/* =================== Imports =================== */
import { start } from './server.js'
import { routesRegistration } from './routesRegistration.js'
import { pluginsRegistration } from './pluginsRegistration.js'

/* =================== Main thread =================== */

// Registering plugins
pluginsRegistration()

// Registering routes
routesRegistration()

// Start Server listening
start()
