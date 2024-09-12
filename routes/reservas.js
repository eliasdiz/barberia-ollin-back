import express from 'express'
import controller from '../controllers/reservas.js'
import validator from '../middlewares/validator.js'
import schemaValidacion from '../Schemas/validarEmail.js'

const { crear, validarEmail, getClientes, eliminarReservaUsuario } = controller

const router = express.Router()

router.post('/crear',crear)
router.post('/validar-email', validator(schemaValidacion), validarEmail )
router.get('/clientes/:id', getClientes )
router.delete('/:id', eliminarReservaUsuario)

export default router