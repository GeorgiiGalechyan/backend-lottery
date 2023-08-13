import Screens from '../../controllers/screen.js'

const opts = {}
const handler = Screens.getStartScreen

export default async (app) => await app.get('/', opts, handler)
