/**
В этом файле пытался описать полный конфиг Pino,в т.ч. дефолтные значения полей, с указанием их функции.
 */

// Full Pino opts
const fullConfig = {
  transport: {
    target: '',
    // caller: function () {},
    options: {
      name: 'prod',
      level: process.env.PINO_LOG_PROD_LEVEL || 'debug',
      // customLevels: {foo: 35}
      // useOnlyCustomLevels: false, // Default
      depthLimit: 5, // Default
      edgeLimit: 100, // Default
      mixin: undefined, // Default
      mixinMergeStrategy: undefined, // Default
      redact: undefined, // Default
      // hooks: {}
      // formatters: {},
      // serializers: {},
      // base: {}
      enabled: true, // enable/disable logging
      crlf: false, // Default
      timestamp: true, // Default
      messageKey: 'msg', // Default
      errorKey: 'err', // Default
      nestedKey: null, // Default
      browser: {
        disabled: false,
        asObject: false,
        // write: function () {},
        // serialize: true,
        // transmit: {
        //   level: 'debug',
        //   send: function (level, logEvent) {
        //     if (level === 'debug') {
        //       // Какая-то логика
        //     }
        //     if (logEvent.level.value >= 50) {
        //       // Какая-то логика
        //     }
        //   },
        // },
      },
    },
  },
}
