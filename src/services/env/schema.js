// =============== Schema ===============

export default {
  type: 'object',
  required: [
    // app.listen()
    'PORT',
    'HOST',
    // PINO
    'PINO_LOG_DEV_LEVEL',
    'PINO_LOG_PROD_LEVEL',
    // Postgres DEV (DB connection)
    'PG_HOST_DEV',
    'PG_PORT_DEV',
    'PG_USERNAME_DEV',
    'PG_PASSWORD_DEV',
    'PG_DB_NAME_DEV',
    // Postgres PROD (DB connection)
    'PG_HOST_PROD',
    'PG_PORT_PROD',
    'PG_USERNAME_PROD',
    'PG_PASSWORD_PROD',
    'PG_DB_NAME_PROD',
    // JWT
    'JWT_SECRET',
  ],
  properties: {
    // app.listen(port: PORT)
    PORT: { type: 'number' },
    HOST: { type: 'string' },
    // PINO
    PINO_LOG_DEV_LEVEL: { type: 'string' },
    PINO_LOG_PROD_LEVEL: { type: 'string' },
    // PostgreSQL
    PG_USERNAME_DEV: { type: 'string' },
    PG_PASSWORD_DEV: { type: 'string' },
    PG_HOST_DEV: { type: 'string' },
    PG_PORT_DEV: { type: 'string' },
    PG_DB_NAME_DEV: { type: 'string' },

    PG_HOST_PROD: { type: 'string' },
    PG_PORT_PROD: { type: 'string' },
    PG_USERNAME_PROD: { type: 'string' },
    PG_PASSWORD_PROD: { type: 'string' },
    PG_DB_NAME_PROD: { type: 'string' },

    // JWT
    JWT_SECRET: { type: 'string' },
  },
}
