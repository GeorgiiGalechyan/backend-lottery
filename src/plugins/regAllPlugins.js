import { app } from '../../server.js'

// Function for plugins registration
export default async () => {
  await app.register(import('./env/index.js'))
  await app.register(import('./postgres/index.js'))
}
