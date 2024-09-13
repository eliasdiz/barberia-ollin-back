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
            let cliente = await User.findOne({email: req.body.email}).select('id nombres apellidos email telefono')
            if(cliente){
                return res
                    .status(200)
                    .json({ 
                        message: 'usuario confirmado',
                        cliente
                    })
            }else{
                return res
                    .status(400)
                    .json({ message: 'usuario no encontrado, te invitamos a resgistrarte!!'})
            }
        } catch (error) {
            next(error)
        }
    },

    getReservasCliente: async(req,res,next) => {
        try {
            let reservas = await Reservas.find({cliente_id: req.params.id})
                .sort({fecha: 1})
                .populate('barbero_id','nombres')
                .populate('servicio_id','servicio valor')
            return res  
                .status(200)
                .json({ reservas})
        } catch (error) {
            next(error)
        }
    },

    getReservasBarbero: async(req,res,next) => {
        try {
            let reservas = await Reservas.find({barbero_id: req.params.id})
                return res
                    .status(200)
                    .json({ reservas})
        } catch (error) {
            next(error)
        }
    },
    
    eliminarReservaUsuario: async(req,res,next) => {
        try {
            let reserva = await Reservas.findByIdAndDelete(req.params.id)
            if(reserva){
                return res
                    .status(200)
                    .json({ message: 'reserva eliminada'})
            }else{
                return res
                    .status(400)
                    .json({ message: 'reserva no encontrada'})
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller