import express from 'express'
import controller from '../controllers/productos.js'
import passport from '../middlewares/auth/passport.js'
import validator from '../middlewares/validator.js'
import schemaCrear from '../Schemas/crearProducto.js'
import productoExiste from '../middlewares/crearProducto.js'


const { crear, getTodos, editar} = controller

const router = express.Router()

router.post('/', passport.authenticate('jwt',{session:false}), validator(schemaCrear), productoExiste,crear)
router.get('/', passport.authenticate('jwt',{session:false}),getTodos)
router.put('/editar/:id', passport.authenticate('jwt',{session: false}), editar)

export default router


