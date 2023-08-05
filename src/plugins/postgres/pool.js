const pool = {
  development: {
    user: process.env.PG_USERNAME_DEV,
    password: process.env.PG_PASSWORD_DEV,
    host: process.env.PG_HOST_DEV,
    port: process.env.PG_PORT_DEV,
    database: process.env.PG_DB_NAME_DEV,
  },
  production: {
    user: process.env.PG_USERNAME_PROD,
    password: process.env.PG_PASSWORD_PROD,
    host: process.env.PG_HOST_PROD,
    port: process.env.PG_PORT_PROD,
    database: process.env.PG_DB_NAME_PROD,
  },
}

export { pool }


