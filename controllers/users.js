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
    }, 
    
    inicioSesion: async(req,res,next) => {
        try {
            let user = await User.findOne({ email: req.user.email})
            user.password = null    
            const token = jwt.sign(
                { id: user._id},
                process.env.SECRET,
                { expiresIn: 60*60*48}
            )
            return res
                .status(200)
                .json({
                    message: 'sesion iniciada',
                    user,
                    token
                })
        } catch (error) {
            next(error)
        }
    }
}

export default controller