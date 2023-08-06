const targets = [
  {
    target: 'pino/file',
    options: {
      name: 'prod-local',
      level: 'info',
    },
  },
  {
    target: 'pino/file',
    options: {
      name: 'prod-elk',
      level: 'info',
    },
  },
]

// Export Opts
export default {
  transport: {
    target: targets,
  },
}
