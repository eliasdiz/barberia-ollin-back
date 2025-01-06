import express from 'express'
import controller from '../controllers/productos.js'
import passport from '../middlewares/auth/passport.js'
import validator from '../middlewares/validator.js'
import schemaCrear from '../Schemas/crearProducto.js'

const { crear, getTodos} = controller

const router = express.Router()

router.post('/', passport.authenticate('jwt',{session:false}), validator(schemaCrear),crear)
router.get('/', passport.authenticate('jwt',{session:false}),getTodos)

export default router


