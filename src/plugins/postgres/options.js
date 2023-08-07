import { Pool } from './pool.js'

export default {
  connectionString: `postgres://${Pool.user}:${Pool.password}@${Pool.host}:${Pool.port}/${Pool.database}`,
}
