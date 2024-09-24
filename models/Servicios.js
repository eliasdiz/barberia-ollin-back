import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        servicio:{ type: String},
        valor:{ type: Number},
        adicional: {type: Boolean}
    },{
        timestamps: false,
        versionKey: false
    }
)

const Servicios = mongoose.model('Servicios', schema)

export default Servicios