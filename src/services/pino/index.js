// Imports Environment Opts
const { default: devOpts } = await import('./config/dev.js')
const { default: prodOpts } = await import('./config/prod.js')
const { default: testOpts } = await import('./config/test.js')

// Export Pino Environment Opts Object
const pino = {
  development: devOpts,
  production: prodOpts,
  test: testOpts,
}

export { pino }
