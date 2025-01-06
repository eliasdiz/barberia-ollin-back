import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        descripcion: {type: String},
        cantidad_medida: {type: Number},
        unidad_medida: {type: String},
        categoria: {type: String},
        stock: {type: Number},
        precio: {type: Number},
    },{
        timestamps: false,
        versionKey: false
    }
)

const Productos = mongoose.model('Productos',schema)

export default Productos