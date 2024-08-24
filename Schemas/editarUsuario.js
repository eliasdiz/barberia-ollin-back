import Joi from "joi";

const schema = Joi.object({

    nombres: Joi
        .string()
        .required()
        .min(3)
        .messages({
            'string.empty':'debes ingresar un nombre',
            'string.min':'el nombre debe tener minimo 3 caracteres',
            'any.required': 'debes ingresar un nombre'
        }),
    
    apellidos: Joi
        .string()
        .required()
        .min(3)
        .messages({
            'string.empty':'debes ingresar un apellido',
            'string.min':'el apellido debe tener minimo 3 caracteres',
            'any.required': 'debes ingresar un apellido'
        }),
    
    email: Joi
        .string()
        .required()
        .email({ minDomainSegments: 2 })
        .messages({
            'string.email':'debes ingresar un email valido',
            'any.required': 'debes ingresar un email',
            'string.empty' : 'debes ingresar un email'
        }),
    
    telefono: Joi
        .number()
        .integer()
        .min(1000000000)  
        .max(9999999999)  
        .required()
        .messages({
            'number.empty': 'Debes ingresar un teléfono',
            'number.min': 'El número debe tener 10 dígitos',
            'number.max': 'El número debe tener 10 dígitos',
            'any.required': 'Debes ingresar un teléfono'
        }),
    password: Joi
        .any(),

    barbero: Joi
        .any()


})

export default schema