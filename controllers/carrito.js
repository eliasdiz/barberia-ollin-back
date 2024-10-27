import Carrito from "../models/Carrito.js";

const controller = {

    crear: async(req,res,next) => {
        req.body.fecha = new Date()
        req.body.productos = []
        req.body.total = 0
        req.body.activo = true
        // req.body.cliente_id = req.params.id
        try {
            let carrito = await Carrito.create(req.body)
            return res
                .status(201)
                .json({ message: 'carrito creado', carrito})
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    getTodos: async(req,res,next) => {
        try {
            let carritos = await Carrito.find()
                .populate('cliente_id','nombres apellidos')
            return res
                .status(200)
                .json({ carritos})
        } catch (error) {
            next(error)
        }
    }

}

export default controller