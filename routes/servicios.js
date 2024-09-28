import express from 'express'
import controller from '../controllers/servicios.js'
import validator from '../middlewares/validator.js'
import schema from '../Schemas/CrearServicio.js'

const { crear, getTodos, eliminar, editar } = controller

const router = express.Router()

router.post('/crear', validator(schema),crear)
router.get('/',getTodos)
router.delete('/:id', eliminar)
router.put('/:id', validator(schema), editar)


export default router