import express from 'express'
import controller from '../controllers/ingresos.js'
import passport from '../middlewares/auth/passport.js'

const { getIngresosBarberos } = controller

const router = express.Router()

router.get('/ingresos-barbero', passport.authenticate('jwt',{session:false}), getIngresosBarberos)

export default router
