import express from 'express'
import controllers from '../controllers/users.js'
import usuarioExisteCrear from '../middlewares/auth/usuarioExisteCrear.js'
import usuarioExistenteInicio from '../middlewares/auth/usuarioExisteInicio.js'
import passwordOk from '../middlewares/auth/passwordOk.js'

const { crear, inicioSesion } = controllers


const router = express.Router()

router.post('/crear', usuarioExisteCrear, crear)
router.post('/inicio-sesion', usuarioExistenteInicio, passwordOk, inicioSesion)

export default router