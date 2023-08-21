import environment from '../../utils/currentEnvironment.js'

// Imports Environment Opts
const { default: devOpts } = await import('./config/dev.js')
const { default: prodOpts } = await import('./config/prod.js')
const { default: testOpts } = await import('./config/test.js')

const pinoOpts = {
  development: devOpts,
  production: prodOpts,
  test: testOpts,
}

export default pinoOpts[environment]
