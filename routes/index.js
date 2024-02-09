import express from 'express'
import users from './users.js'


const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => { res .json({ message: 'servidor en linea'})});
router.use('/users',users)


export default router
