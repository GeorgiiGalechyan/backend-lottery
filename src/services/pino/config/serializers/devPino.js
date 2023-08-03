import pino from 'pino'

export const serializers = {
  err: pino.stdSerializers.err,
  error: pino.stdSerializers.err,
}
