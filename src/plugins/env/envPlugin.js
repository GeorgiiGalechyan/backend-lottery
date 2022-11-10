// ИСПРАВЛЕМ ПУТИ В ES6
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import fastifyPlugin from 'fastify-plugin'
import fastifyEnv from '@fastify/env'

const schema = {
  type: 'object',
  required: ['PORT', 'HOST', 'PG_USERNAME', 'PG_PASSWORD', 'PG_HOST', 'PG_PORT', 'PG_DB_NAME', 'JWT_SECRET'],
  properties: {
    PORT: { type: 'string' },
    HOST: { type: 'string' },
    PG_USERNAME: { type: 'string' },
    PG_PASSWORD: { type: 'string' },
    PG_HOST: { type: 'string' },
    PG_PORT: { type: string },
    PG_DB_NAME: { type: 'string' },
    JWT_SECRET: { type: 'string' },
  },
}

const options = {
  schema: schema,
  dotenv: {
    path: `${__dirname}/.env`,
    debug: true,
  },
}

async function useEnv(fastify) {
  fastify.register(fastifyEnv, options).ready((err) => console.error(err))
}

export default fastifyPlugin(useEnv, { name: 'use-env-plugin' })
