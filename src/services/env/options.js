// =============== Env-scheme options ===============

const { default: schema } = await import('./schema.js')
const { default: dotenv } = await import('./dotenv.js')

export default {
  confKey: 'config',
  schema,
  dotenv,
  data: process.env,
  // expandEnv: true, // PROBLEM!!!
}
