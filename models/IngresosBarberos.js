import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        reserva_id: { type: mongoose.Types.ObjectId, ref:'Reservas'},
        fecha: {type: Date},
        valor: {type: Number}
    },{
        timestamps: true,
        versionKey: false
    }
)

const IngresosBarberos = mongoose.model('IngresosBarberos',schema)

export default IngresosBarberos