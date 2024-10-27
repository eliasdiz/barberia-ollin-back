import express from 'express'
import controller from '../controllers/carrito.js'
import passport from '../middlewares/auth/passport.js'

const { crear, getTodos } = controller

const router = express.Router()

router.post('/crear', passport.authenticate('jwt',{session:false}), crear)
router.get('/', passport.authenticate('jwt',{session:false}), getTodos)


export default router