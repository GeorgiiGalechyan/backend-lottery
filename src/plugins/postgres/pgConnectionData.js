import { environment } from '../../utils/currentEnvironment.js'
import { pool } from './pool.js'

const pgConnectionData = `postgres://${pool[environment].user}:${pool[environment].password}@${pool[environment].host}/${pool[environment].database}`

export { pgConnectionData }
