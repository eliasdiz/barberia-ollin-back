import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        descripcion: {type: String},
        precio: {type: Number},
        stock: {type: Number},
        unidad_medida: {type: String},
        cantidad_medida: {type: String},
        categoria: {type: String},
    },{
        timestamps: false,
        versionKey: false
    }
)

const Productos = mongoose.model('Productos',schema)

export default Productos