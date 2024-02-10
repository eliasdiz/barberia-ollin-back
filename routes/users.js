import express from 'express'
import controllers from '../controllers/users.js'
import usuarioExisteCrear from '../middlewares/auth/usuarioExisteCrear.js'

const { crear } = controllers


const router = express.Router()

router.post('/crear', usuarioExisteCrear, crear)

export default router