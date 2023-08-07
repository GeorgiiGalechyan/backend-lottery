// Imports configuration parts
import schema from './schema.js'
import dotenv from './dotenv.js'

// Merge configuration parts
export default {
  confKey: 'config',
  schema: schema,
  dotenv: dotenv,
  data: process.env,
  // expandEnv: true, // Used to cause an error, don't know now. Check in the future for interest.
}
