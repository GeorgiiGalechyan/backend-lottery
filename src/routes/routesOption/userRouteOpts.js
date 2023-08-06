const createNewUserOpts = {
  logLevel: 'info',
  schema: {
    body: {
      type: 'object',
      required: ['login', 'password', 'email'],
      properties: {
        login: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
}

export { createNewUserOpts }
