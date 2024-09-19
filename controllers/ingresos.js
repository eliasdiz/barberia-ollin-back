import IngresosBarberos from "../models/IngresosBarberos.js";

const controller = {

    getIngresosBarberos: async(req,res,next) => {
        const {user} = req 
        try {
            let ingresos = await IngresosBarberos.find({barbero_id: user._id})
            return res
                .status(200)
                .json({ ingresos})
        } catch (error) {
            next(error)
        }
    }
}

export default controller

