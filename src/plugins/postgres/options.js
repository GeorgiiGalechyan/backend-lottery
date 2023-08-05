import { Pool } from './pool.js'

const opts = {
  connectionString: `postgres://${Pool.user}:${Pool.password}@${Pool.host}:${Pool.port}/${Pool.database}`,
}

export { opts }

console.log(opts.connectionString)
