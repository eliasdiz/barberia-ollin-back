import Productos from "../models/Productos.js";

const controller = {
    
    crear: async(req,res,next) => {
        try {
            await Productos.create(req.body)
            return res
                .status(201)
                .json({ message: 'producto creado exitosamente'})
        } catch (error) {
            next(error)
        }
    },

    getTodos: async(req,res,next) => {
        const query = {}
        if(req.query.descripcion) query.descripcion = { $regex: new RegExp(req.query.descripcion,'i')}
        try {
            let productos = await Productos.find(query)
                .sort({descripcion: 1})
            return res
                .status(200)
                .json({ productos})
        } catch (error) {
            next(error)
        }
    },

    editar: async(req,res,next) => {
        try {
            let producto = await Productos.findByIdAndUpdate(req.params.id, req.body,{new: true})
            return res
                .status(200)
                .json({ message: 'producto actualizado', producto})
        } catch (error) {
            next()
        }
    }
}

export default controller