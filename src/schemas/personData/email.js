export default {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  description: 'EN: Person email schema.\n RU: Схема для Email-адреса пользователя.',
  $id: 'schemas/personData/email.js',
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      description: 'EN: Email field data from Registration Form.\n RU: Данные поля Email из Формы Регистрации.',
    },
    required: ['email'],
  },
}
