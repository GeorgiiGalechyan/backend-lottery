// Imports Environment Opts

const { default: devOpts } = await import('./config/dev.js')
const { default: prodOpts } = await import('./config/prod.js')
const { default: testOpts } = await import('./config/test.js')

// Export Pino Environment Opts Object
export default {
  development: devOpts,
  production: prodOpts,
  test: testOpts,
}

export const environment =
  process.env.NODE_ENV === 'production'
    ? 'production'
    : process.env.NODE_ENV === 'development'
    ? 'development'
    : process.env.NODE_ENV === 'test'
    ? 'test'
    : 'development'
