// 
export default {
  type: 'object',
  required: ['PORT', 'HOST', 'PG_USERNAME', 'PG_PASSWORD', 'PG_HOST', 'PG_PORT', 'PG_DB_NAME', 'JWT_SECRET'],
  properties: {
    // fastify.listen(port: PORT)
    PORT: { type: 'string' },
    HOST: { type: 'string' },
    // PostgreSQL
    PG_USERNAME: { type: 'string' },
    PG_PASSWORD: { type: 'string' },
    PG_HOST: { type: 'string' },
    PG_PORT: { type: 'string' },
    PG_DB_NAME: { type: 'string' },
    // Статическая соль для JWT токена
    JWT_SECRET: { type: 'string' },
  },
}
