import IngresosBarberos from "../models/IngresosBarberos.js";
import { dayEnd, dayStart } from "@formkit/tempo";

const controller = {

    getIngresosBarberos: async(req,res,next) => {
        const {user} = req 
        const query = { barbero_id: user._id}
        
        if(req.query.fechaInicial){
            const inicioDia = dayStart(req.query.fechaInicial)
            const finalDia = dayEnd(req.query.fechaInicial)
            query.fecha = { $gte: inicioDia, $lte: finalDia}
        }
        if(req.query.fechaInicial && req.query.fechaFinal){
            const inicioDia = dayStart(req.query.fechaInicial)
            const finalDia = dayEnd(req.query.fechaFinal)
            query.fecha = { $gte: inicioDia, $lte: finalDia}
        }
        
        try {
            let ingresos = await IngresosBarberos.find(query)
                .sort({fecha: -1})
            return res
                .status(200)
                .json({ ingresos})
        } catch (error) {
            next(error)
        }
    }
}

export default controller

