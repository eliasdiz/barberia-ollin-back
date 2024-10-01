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
            let servicios = await Servicios.find().sort({servicio: 1})
            return res
                .status(200)
                .json({ servicios})
        } catch (error) {
            next(error)
        }
    },

    eliminar: async(req,res,next) => {
        try {
            await Servicios.findByIdAndDelete(req.params.id)
            return res  
                .status(200)
                .json({message: 'servicio eliminado'})
        } catch (error) {
            next(error)
        }
    },

    editar: async(req,res,next) => {
        try {
            await Servicios.findByIdAndUpdate(req.params.id,req.body)
            return res  
                .status(200)
                .json({ message: 'servicio actualizado'})
        } catch (error) {
            next(error)
        }
    },

    getUno: async(req,res,next) => {
        try {
            let servicio = await Servicios.findById(req.params.id)
            return res
                .status(200)
                .json({ servicio })
        } catch (error) {
            next(error)
        }
    }
}

export default controller