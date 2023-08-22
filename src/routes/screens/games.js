import Screens from '../../controllers/screen.js'

const opts = {}
const handler = Screens.getGamesListScreen

export default async (app) => await app.get('/games', opts, handler)
