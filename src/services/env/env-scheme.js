// =============== env-schema ===============

import envScheme from 'env-schema'
const { default: options } = await import('./options.js')

export default envScheme(options)
