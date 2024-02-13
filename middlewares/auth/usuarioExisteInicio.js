import User from "../../models/Users.js";

async function usuarioExistenteInicio(req,res,next){
    let user = await User.findOne({ email: req.body.email})
    if( user ){
        req.user = {
            id: user._id,
            nombres: user.nombres,
            apellidos: user.apellidos,
            email: user.email,
            password: user.password,
            telefono: user.telefono,
            foto: user.foto,
            admin: user.admin
        }
        return next()
    }
    return res
        .status(400)
        .json({
            message: 'El Usuario no existe'
        })
}

export default usuarioExistenteInicio