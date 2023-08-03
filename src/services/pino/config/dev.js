// Import serialisers
import { serializers } from './serializers/devPino.js'

// Import Transports for Targets
const { devTerminal } = await import('./targets/devTerminal.js')
const { default: devLocalFileInfo } = await import('./targets/devLocalFileInfo.js')
const { default: devLocalFileError } = await import('./targets/devLocalFileError.js')

// Export Opts
export default {
  serializers,
  transport: {
    targets: [devTerminal, devLocalFileInfo, devLocalFileError],
  },
}
