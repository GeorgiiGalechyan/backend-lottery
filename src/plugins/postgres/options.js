import pg from './pool.js'

export default {
  connectionString: `postgres://${pg.user}:${pg.password}@${pg.host}:${pg.port}/${pg.database}`,
}
