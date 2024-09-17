import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        barbero_id: { type: mongoose.Types.ObjectId, ref: 'Users'},
        cliente_id: { type: mongoose.Types.ObjectId, ref: 'Users'},
        servicio_id: { type: mongoose.Types.ObjectId, ref: 'Servicios'},
        fecha: { type: Date},
        activa: { type: Boolean},
    },{
        timestamps: true,
        versionKey: false
    }
)

const Reservas = mongoose.model('Reservas',schema)

export default Reservas