// Function for plugins registration
export default async (app) => {
  await app.register(import('./env/index.js'))
  await app.register(import('./postgres/index.js'))
}
