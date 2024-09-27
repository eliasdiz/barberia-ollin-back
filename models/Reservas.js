import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        barbero_id: { type: mongoose.Types.ObjectId, ref: 'Users'},
        cliente_id: { type: mongoose.Types.ObjectId, ref: 'Users'},
        servicio: { type: Array},
        fecha: { 
            horaInicio: {type: Date},
            horaFinal: {type: Date}
        },
        activa: { type: Boolean},
        valor: { type: Number},
    },{
        timestamps: true,
        versionKey: false
    }
)

const Reservas = mongoose.model('Reservas',schema)

export default Reservas