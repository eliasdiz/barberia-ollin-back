import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        nombres: { type: String},
        apellidos: { type: String},
        email: { type: String},
        password: { type: String},
        telfono: { type: Number},
        foto: { type: String},
        admin: { type: Boolean},
    },{
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model('Users', schema)

export default User