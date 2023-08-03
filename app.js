// Adding __filename and __dirname for ES6 modules.
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/* =================== Imports =================== */
import _ from './src/services/env/env-scheme.js' // env
import { app, start } from './server.js' // 



// Routes
const { getHomePage } = await import('./src/routes/home.js')
const { getRegUserPage, regNewUser } = await import('./src/routes/register.js')

/* =================== Main thread =================== */

// Registering plugins
await app.register(import('./src/plugins/postgres/plugin.js'))
app.log.info({ msg: '----- All plugins are registered! -----' })

// Registering routes
await app.register(getHomePage).after(app.log.info({ msg: 'Route  GET   "getHomePage"     is registered.' }))

await app.register(getRegUserPage).after(app.log.info({ msg: 'Route  GET   "getRegUserPage"  is registered.' }))

await app.register(regNewUser).after(app.log.info({ msg: 'Route  POST  "regNewUser"      is registered.' }))

app.log.info({ msg: '----- All Routes are registered! -----' })

// Start listening
start()
