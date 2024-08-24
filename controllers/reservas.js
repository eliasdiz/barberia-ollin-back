import Reservas from '../models/Reservas.js'

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
    }
}

export default controller