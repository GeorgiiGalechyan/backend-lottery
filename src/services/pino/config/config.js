const { default: dev } = await import('./dev.js')
const { default: prod } = await import('./prod.js')
const { default: test } = await import('./test.js')

export default {
  dev,
  prod,
  test,
}
