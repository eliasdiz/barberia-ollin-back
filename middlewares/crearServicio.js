import Servicios from '../models/Servicios.js'


const crearServicio = async (req,res,next) => {
    
    const servicio = await Servicios.findOne({ servicio: req.body.servicio })
    return servicio ? res.status(400).json({ message: 'el servicio ya existe'}) : next()
}

export default crearServicio