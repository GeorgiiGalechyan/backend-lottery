export default {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  description: 'EN: User password schema.\n RU: Схема для пароля пользователя.',
  $id: 'schemas/userData/password.js',
  type: 'object',
  properties: {
    password: {
      type: 'string',
      pattern: '^[a-zA-Z0-9]$',
      description: 'EN: Password field data from Registration Form.\n RU: Данные поля Password из Формы Регистрации.',
    },
    required: ['password'],
  },
}
