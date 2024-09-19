import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        reserva_id: { type: mongoose.Types.ObjectId, ref:'Reservas'},
        barbero_id: { type: mongoose.Types.ObjectId, ref:'Users'},
        fecha: {type: Date},
        valor: {type: Number},
        servicio: {type: String}
    },{
        timestamps: true,
        versionKey: false
    }
)

const IngresosBarberos = mongoose.model('IngresosBarberos',schema)

export default IngresosBarberos