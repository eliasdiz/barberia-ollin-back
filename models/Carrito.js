import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        cliente_id:{type: mongoose.Types.ObjectId, ref: 'Users'},
        fecha: {type: Date},
        productos: [{
            _id: false,
            producto_id: {type: mongoose.Types.ObjectId, ref: 'Productos'},
            descripcion: {type: String},
            cantidad: {type: Number},
            precio: {type: Number}
        }],
        total: {type: Number},
        activo: {type: Boolean}
    },{
        timestamps: false,
        versionKey: false
    }
)

const Carrito = mongoose.model('Carrito', schema)

export default Carrito