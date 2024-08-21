import express from 'express'
import controllers from '../controllers/users.js'
import usuarioExisteCrear from '../middlewares/auth/usuarioExisteCrear.js'
import usuarioExistenteInicio from '../middlewares/auth/usuarioExisteInicio.js'
import passwordOk from '../middlewares/auth/passwordOk.js'
import passport from '../middlewares/auth/passport.js'
import validator from '../middlewares/validator.js'
import crearUsuarioSchema from '../Schemas/RegistroUsuario.js'

const { crear, inicioSesion, getAll, editarRol, deleteOne, getUsuario, cerrarSesion } = controllers


const router = express.Router()

router.post('/crear', validator(crearUsuarioSchema), usuarioExisteCrear, crear)
router.post('/inicio-sesion', usuarioExistenteInicio, passwordOk, inicioSesion)
router.post('/cerrar-sesion', passport.authenticate('jwt', {session:false}),cerrarSesion )
router.get('/', getAll )
router.get('/usuario', passport.authenticate('jwt', {session: false}), getUsuario )
router.put('/rol/:id', editarRol)
router.delete('/:id', deleteOne )

export default router