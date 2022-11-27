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
    // PostgreSQL
    'PG_USERNAME_DEV',
    'PG_PASSWORD_DEV',
    'PG_HOST_DEV',
    'PG_PORT_DEV',
    'PG_DB_NAME_DEV',
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
    // JWT
    JWT_SECRET: { type: 'string' },
  },
}
