import express from 'express'
import users from './users.js'
import servicios from './servicios.js'
import reservas from './reservas.js'
import ingresos from './ingresos.js'
import carrito from './carrito.js'
<<<<<<< HEAD
=======
import productos from './productos.js'
>>>>>>> 4d9cd0930a1516f3987ddff293c3b360656c8399


const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => { res .json({ message: 'servidor en linea'})});
router.use('/usuarios',users)
router.use('/servicios',servicios)
router.use('/reservas',reservas)
router.use('/ingresos', ingresos)
router.use('/carrito', carrito)
<<<<<<< HEAD
=======
router.use('/productos', productos)
>>>>>>> 4d9cd0930a1516f3987ddff293c3b360656c8399


export default router
