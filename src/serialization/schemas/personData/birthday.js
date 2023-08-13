export default {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  description: 'EN: Person birthday schema (optional).\n RU: Схема для дня рождения пользователя (необязательное).',
  $id: 'schemas/personData/birthday.js',
  type: 'object',
  properties: {
    birthday: {
      type: 'string',
      format: 'date', // yyyy-mm-dd
      description: `EN: Person's birthday.\n RU: День рождения пользователя.`,
    },
  },
}
