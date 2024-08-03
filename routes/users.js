import express from 'express'
import controllers from '../controllers/users.js'
import usuarioExisteCrear from '../middlewares/auth/usuarioExisteCrear.js'
import usuarioExistenteInicio from '../middlewares/auth/usuarioExisteInicio.js'
import passwordOk from '../middlewares/auth/passwordOk.js'
import passport from '../middlewares/auth/passport.js'

const { crear, inicioSesion, getAll, editarRol, deleteOne, getUsuario } = controllers


const router = express.Router()

router.post('/crear', usuarioExisteCrear, crear)
router.post('/inicio-sesion', usuarioExistenteInicio, passwordOk, inicioSesion)
router.get('/', getAll )
router.get('/usuario', passport.authenticate('jwt', {session: false}), getUsuario )
router.put('/rol/:id', editarRol)
router.delete('/:id', deleteOne )

export default router