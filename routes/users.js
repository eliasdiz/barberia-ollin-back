import express from 'express'
import controllers from '../controllers/users.js'
import usuarioExisteCrear from '../middlewares/auth/usuarioExisteCrear.js'
import usuarioExistenteInicio from '../middlewares/auth/usuarioExisteInicio.js'
import passwordOk from '../middlewares/auth/passwordOk.js'
import passport from '../middlewares/auth/passport.js'
import validator from '../middlewares/validator.js'
import schemaCrearUsuario from '../Schemas/RegistroUsuario.js'
import schemaEditarUsuario from '../Schemas/editarUsuario.js'

const { crear, inicioSesion, getAll, editar, deleteOne, getUsuario, cerrarSesion } = controllers


const router = express.Router()

router.post('/crear', validator(schemaCrearUsuario), usuarioExisteCrear, crear)
router.post('/inicio-sesion', usuarioExistenteInicio, passwordOk, inicioSesion)
router.post('/cerrar-sesion', passport.authenticate('jwt', {session:false}),cerrarSesion )
router.get('/', getAll )
router.get('/usuario', passport.authenticate('jwt', {session: false}), getUsuario )
router.put('/usuario/:id',validator(schemaEditarUsuario), editar)
router.delete('/:id', deleteOne )

export default router