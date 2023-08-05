const environment =
  process.env.NODE_ENV === 'production'
    ? 'production'
    : process.env.NODE_ENV === 'development'
    ? 'development'
    : process.env.NODE_ENV === 'test'
    ? 'test'
    : 'development'

export { environment }
