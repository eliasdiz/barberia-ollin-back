import Productos from "../models/Productos.js";



async function ProductoExiste(req,res,next) {
    const producto = await Productos.findOne({ 
        descripcion: req.body.descripcion, 
        cantidad_medida: req.body.cantidad_medida, 
        unidad_medida: req.body.unidad_medida
    })
    return producto ? res.status(400).json({ message: 'El producto ya existe' }) : next();
}

export default ProductoExiste
