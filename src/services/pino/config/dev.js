// Import serialisers

// const { default: serializers } = await import('./serialise.js')

// Import Transports for Targets
const { devTerminal } = await import('./targets/devTerminal.js')
const { default: devLocalFileInfo } = await import('./targets/devLocalFileInfo.js')
const { default: devLocalFileError } = await import('./targets/devLocalFileError.js')

// Export Opts
export default {
  transport: {
    targets: [devTerminal, devLocalFileInfo, devLocalFileError],
  },
}
