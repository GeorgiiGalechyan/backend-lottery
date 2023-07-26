export default {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'https://example.com/product.schema.json',
  title: 'User registration data.\n Регистрацинные данные пользователя.',
  description: `EN: Data that the user enters when registering in the application.\n RU: Данные, которые вводт пользователь во время регистрации в приложении.`,
  type: 'object',
  properties: {
    userId: {
      description: `EN: ID automatically assigned when registering a new user.\n RU: ID автоматически присваеивается при регистрации нового пользователя.`,
      type: 'integer', // Serial (pg) -> _____ (ff) -> integer (js)
    },
    userLogin: {
      // ссылка на схему schemas/userData/login.js
    },
    userPassword: {
      // ссылка на схему schemas/userData/password.js
    },
    userEmail: {
      // ссылка на схему schemas/personData/email.js
    },
    userName: {
      // ссылка на схему schemas/personData/firstName.js
    },
    required: ['userId', 'userLogin', 'userPassword', 'userEmail'],
  },
}
