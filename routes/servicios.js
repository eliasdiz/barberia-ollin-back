import express from 'express'
import controller from '../controllers/servicios.js'
import validator from '../middlewares/validator.js'
import schema from '../Schemas/CrearServicio.js'
import passport from '../middlewares/auth/passport.js'
import crearServicio from '../middlewares/crearServicio.js'

const { crear, getTodos, eliminar, editar, getUno } = controller

const router = express.Router()

router.post('/crear',passport.authenticate('jwt',{session:false}), validator(schema), crearServicio,crear)
router.get('/',getTodos)
router.get('/servicio/:id',passport.authenticate('jwt',{session:false}), getUno)
router.delete('/:id', eliminar)
router.put('/:id',passport.authenticate('jwt',{session:false}), validator(schema), editar)


export default router