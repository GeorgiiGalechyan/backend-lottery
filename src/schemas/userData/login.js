export default {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  description: 'EN: User login schema.\n RU: Схема логина пользователя.',
  $id: 'schemas/userData/login.js',
  type: 'object',
  properties: {
    login: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      description: 'EN: Login field data from Registration Form.\n RU: Данные поля Login из Формы Регистрации.',
    },
    required: ['login'],
  },
}
