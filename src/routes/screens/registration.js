import Screens from '../../controllers/screen.js'

const opts = {}
const handler = Screens.getUserRegScreen

export default async (app) => await app.get('/reg', opts, handler)
