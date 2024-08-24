import express from 'express'
import controller from '../controllers/reservas.js'

const { crear } = controller

const router = express.Router()

router.post('/crear',crear)

export default router