import User from '../models/Users.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const controller = {

    crear: async(req,res,next) => {
        req.body.admin = false
        req.body.foto = ''
        req.body.password = bcryptjs.hashSync(req.body.password,10)
        try {
            await User.create(req.body)
            return res  
                .status(201)
                .json({ message: 'usuario creado con exito'})
        } catch (error) {
            next(error)
        }
    }
}

export default controller