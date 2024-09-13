import express from 'express'
import controller from '../controllers/reservas.js'
import validator from '../middlewares/validator.js'
import schemaValidacion from '../Schemas/validarEmail.js'

const { crear, validarEmail, getReservasCliente, getReservasBarbero } = controller

const router = express.Router()

router.post('/crear',crear)
router.post('/validar-email', validator(schemaValidacion), validarEmail )
router.get('/clientes/:id', getReservasCliente )
router.get('/barbero/:id', getReservasBarbero )

export default router