import express from 'express'
import controller from '../controllers/servicios.js'

const { crear, getTodos } = controller

const router = express.Router()

router.post('/crear',crear)
router.get('/',getTodos)


export default router