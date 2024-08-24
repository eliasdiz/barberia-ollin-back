import express from 'express'
import users from './users.js'
import servicios from './servicios.js'
import reservas from './reservas.js'


const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => { res .json({ message: 'servidor en linea'})});
router.use('/usuarios',users)
router.use('/servicios',servicios)
router.use('/reservas',reservas)


export default router
