import Servicios from '../models/Servicios.js'

const controller = {
    
    crear: async(req,res,next) => {
        try {
            await Servicios.create(req.body)
            return res  
                .status(201)
                .json({ message: 'servicio creado'})
        } catch (error) {
            next(error)
        }
    }, 

    getTodos: async(req,res,next) => {
        try {
            let servicios = await Servicios.find()
            return res
                .status(200)
                .json({ servicios})
        } catch (error) {
            next(error)
        }
    }
}

export default controller