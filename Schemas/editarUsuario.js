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
        .string()
        .required()
        .length(10)
        .pattern(/^\d+$/)  // Asegura que solo contenga dígitos
        .messages({
            'string.empty': 'Debes ingresar un teléfono',
            'any.required': 'Debes ingresar un teléfono',
            'string.length': 'El número debe tener 10 dígitos',
            'string.pattern.base': 'El número debe contener solo dígitos'
        }),

    password: Joi
        .any(),

    barbero: Joi
        .any()


})

export default schema