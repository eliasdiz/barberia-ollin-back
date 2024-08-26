import Reservas from '../models/Reservas.js'
import User from '../models/Users.js'

const controller = {

    crear: async(req,res,next) => {
        req.body.estado = true
        try {
            await Reservas.create(req.body)
            return res
                .status(201)
                .json({ message: 'haz agendado un servicio'})
        } catch (error) {
            next(error)
        }
    },

    validarEmail: async(req,res,next) => {
        try {
            let usuario = await User.findOne({email: req.body.email})
            if(usuario){
                return res
                    .status(200)
                    .json({ 
                        message: 'usuario confirmado',
                        usuario
                    })
            }else{
                return res
                    .status(400)
                    .json({ message: 'usuario no encontrado, te invitamos a resgistrare!!'})
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller