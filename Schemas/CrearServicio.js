import Joi from "joi";

const schema = Joi.object({

    servicio: Joi
        .string()
        .required()
        .min(4)
        .messages({
            'string.empty':'debes ingresar un nombre para el servicio',
            'string.min':'el nombre debe tener minimo 4 caracteres',
            'any.required': 'debes ingresar un nombre para el servicio'
        }),

    valor: Joi
        .number()
        .required()
        .min(1000)
        .messages({
            'number.empty': 'Debes ingresar un valor',
            'number.min': 'El valor debe ser mas alto',
            'any.required': 'Debes ingresar un valor'
        }),
    
    adicional: Joi
        .any()

})

export default schema