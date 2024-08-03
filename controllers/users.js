import User from '../models/Users.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const controller = {

    crear: async(req,res,next) => {
        req.body.admin = false
        req.body.foto = ''
        req.body.barbero = false
        req.body.password = bcryptjs.hashSync(req.body.password,10)
        try {
            await User.create(req.body)
            return res  
                .status(201)
                .json({ message: 'usuario creado con exito'})
        } catch (error) {
            next(error)
        }
    }, 
    
    inicioSesion: async(req,res,next) => {
        try {
            let user = await User.findOne({ email: req.user.email})
            user.password = null    
            const token = jwt.sign(
                { id: user._id},
                process.env.SECRET,
                { expiresIn: 60*60*48}
            )
            return res
                .status(200)
                .json({
                    message: 'sesion iniciada',
                    user,
                    token
                })
        } catch (error) {
            next(error)
        }
    },

    getUsuario: async(req,res,next) => {
        const { user } = req
        try {
            let usuario = await User.findById(user._id)
            if(usuario){
                return res 
                    .status(200)
                    .json({ usuario })
            }
        } catch (error) {
            next(error)
        }
    },

    getAll: async(req,res,next) => {
        const query = {}
        if(req.query.parametro) query.parametro = req.query.parametro
        try {
            if(query.parametro === 'barberos'){
                let query = {}
                if (req.query.nombres){
                    query.$or = [
                        { nombres: {  $regex: new RegExp( req.query.nombres,'i') }},
                        { apellidos: {  $regex: new RegExp( req.query.nombres,'i') } },
                        {
                            $and: [
                                { nombres: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } },
                                { apellidos: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } }
                            ]
                        }
                    ]
                }
                let usuarios = await User.find({barbero: true, ...query}).sort({nombres: 1})
                return res
                    .status(200)
                    .json({ usuarios})
            }else if(query.parametro === 'clientes'){
                let query = {}
                if (req.query.nombres){
                    query.$or = [
                        { nombres: {  $regex: new RegExp( req.query.nombres,'i') }},
                        { apellidos: {  $regex: new RegExp( req.query.nombres,'i') } },
                        {
                            $and: [
                                { nombres: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } },
                                { apellidos: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } }
                            ]
                        }
                    ]
                }
                let usuarios = await User.find({barbero: false, ...query}).sort({nombres: 1})
                return res 
                    .status(200)
                    .json({ usuarios})
            }else{
                let query = {}
                if (req.query.nombres){
                    query.$or = [
                        { nombres: {  $regex: new RegExp( req.query.nombres,'i') }},
                        { apellidos: {  $regex: new RegExp( req.query.nombres,'i') } },
                        {
                            $and: [
                                { nombres: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } },
                                { apellidos: { $regex: new RegExp(req.query.nombres.split(' ').join('|'), 'i') } }
                            ]
                        }
                    ]
                }
                let usuarios = await User.find(query).sort({nombres: 1})
                return res
                    .status(200)
                    .json({ usuarios})
            }
        } catch (error) {
            next(error)
        }
    },

    editarRol: async(req,res,next) => {
        try {
            await User.findByIdAndUpdate(req.params.id,req.body)
            return res
            .status(200)
            .json({
                    message: 'usuario actualizado',
                });
        } catch (error) {
            next(error);
        }
    },

    deleteOne: async(req,res,next) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            return res  
                .status(200)
                .json({ message: 'usuario eliminado'})
        } catch (error) {
            next(error)
        }
    }
}

export default controller