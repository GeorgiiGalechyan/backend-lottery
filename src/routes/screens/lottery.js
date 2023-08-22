import Screens from '../../controllers/screen.js'

const opts = {}
const handler = Screens.getLotteryGameScreen

export default async (app) => await app.get('/games/lottery', opts, handler)
