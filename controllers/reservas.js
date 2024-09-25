import IngresosBarberos from '../models/IngresosBarberos.js'
import Reservas from '../models/Reservas.js'
import User from '../models/Users.js'

const controller = {

    crear: async(req,res,next) => {
        req.body.activa = true
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
        const hoy = new Date().setHours(0,0,0,0)
        try {
            let reservas = await Reservas.find({
                    cliente_id: req.params.id, 
                    fecha:{$gte: hoy},
                    activa: true
            })
                .sort({fecha: 1})
                .populate('barbero_id','nombres apellidos')
                return res  
                    .status(200)
                    .json({ reservas})
        } catch (error) {
            next(error)
        }
    },

    getReservasBarbero: async(req,res,next) => {
        const hoy = new Date().setHours(0,0,0,0)
        try {
            let reservas = await Reservas.find({barbero_id: req.params.id, fecha:{$gte: hoy}})
                .sort({fecha: 1})
                .populate('barbero_id', 'nombres apellidos')
                .populate('cliente_id','nombres apellidos telefono email')
                return res
                    .status(200)
                    .json({ reservas})
        } catch (error) {
            next(error)
        }
    },
    
    eliminarReserva: async(req,res,next) => {
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
    },

    actualizarEstado: async(req,res,next) => {
        try {
            let reserva = await Reservas.findByIdAndUpdate(req.params.id,{ activa: false})
            if(reserva){
                req.body.reserva_id = reserva._id
                req.body.barbero_id = reserva.barbero_id
                req.body.fecha = reserva.fecha
                req.body.servicio = reserva.servicio
                req.body.valor = reserva.valor
                try {
                    let ingreso = await IngresosBarberos.create(req.body)
                    return res  
                        .status(201)
                        .json({message: 'servicio iniciado', ingreso})
                } catch (error) {
                    next(error)
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller