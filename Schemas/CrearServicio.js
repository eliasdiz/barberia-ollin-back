import Joi from "joi";

const schema = Joi.object({

    servicio: Joi
        .string()
        .required()
        .min(4)
        .messages({
            'string.empty':'ingresa un nombre para el servicio',
            'string.min':'nombre debe tener minimo 4 letras',
            'any.required': 'ingresa un nombre para el servicio'
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
        .boolean()
})

export default schema