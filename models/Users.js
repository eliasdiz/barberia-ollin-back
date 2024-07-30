import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        nombres: { type: String},
        apellidos: { type: String},
        email: { type: String},
        password: { type: String},
        telefono: { type: Number},
        foto: { type: String},
        admin: { type: Boolean},
        barbero: { type: Boolean}
    },{
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model('Users', schema)

export default User