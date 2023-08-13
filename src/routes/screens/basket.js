import Screens from '../../controllers/screen.js'

const opts = {}
const handler = Screens.getBasketScreen

export default async (app) => await app.get('/basket', opts, handler)
