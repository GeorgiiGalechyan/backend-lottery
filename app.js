/* =================== Imports =================== */
import { start } from './server.js'
import { pluginsRegistration } from './pluginsRegistration.js'
import { routesRegistration } from './routesRegistration.js'

/* =================== Main thread =================== */

// Registering plugins
pluginsRegistration()

// Registering routes
routesRegistration()

// Start Server listening
start()
