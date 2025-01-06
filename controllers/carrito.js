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
                carritos = carritos.sort((a,b) => a.cliente_id.nombres.localeCompare(b.cliente_id.nombres))
            return res
                .status(200)
                .json({ carritos})
        } catch (error) {
            next(error)
        }
    },

    actCarrito: async(req,res,next) => {
        try {
            let carrito = await Carrito.findByIdAndUpdate(
                req.params.id,
                { $push: {productos: req.body.productos}},
                {new: true}
            )
            if(carrito){
                return res
                    .status(200)
                    .json({ carrito})
            }else{
                return res
                    .status(404)
                    .json({message: 'carrito no encontrado'})
            }
        } catch (error) {
            next(error)
        }
    }

}

export default controller