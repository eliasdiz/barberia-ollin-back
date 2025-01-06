import Joi from 'joi'

const schema = Joi.object({

    descripcion: Joi
        .string()
        .required()
        .min(4)
        .messages({
            'string.empty':'ingresa una descripcion para el producto',
            'string.min':'descripcion debe tener minimo 4 letras',
            'any.required': 'ingresa una descripcion para el producto'
    }),
    
    cantidad_medida: Joi
        .number()
        .required()
        .min(10)
        .messages({
            'number.base': 'La cantidad debe ser un número válido',
            'number.empty': 'Debes ingresar una cantidad',
            'number.min': 'la cantidad debe ser mayor',
            'any.required': 'Debes ingresar una cantidad'
    }),
    
    unidad_medida: Joi
        .string()
        .required()
        .messages({
            'string.empty':'ingresa una unidad de medida para el producto',
            'any.required': 'ingresa una unidad de medida para el producto'
    }),

    categoria: Joi
        .string()
        .required()
        .messages({
            'string.empty':'ingresa una categoria para el producto',
            'any.required': 'ingresa una categoria para el producto'
    }),
    
    stock: Joi
        .number()
        .required()
        .greater(0) // El valor debe ser estrictamente mayor a 0
        .messages({
            'number.base': 'El stock debe ser un numero valido',
            'number.empty': 'Debes ingresar una cantidad de stock',
            'number.greater': 'El stock debe ser mayor a 0', // Mensaje personalizado para valores menores o iguales a 0
            'any.required': 'Debes ingresar una cantidad de stock'
    }),

    precio: Joi
        .number()
        .required()
        .greater(1000) // El valor debe ser estrictamente mayor a 0
        .messages({
            'number.base': 'El precio debe ser un numero valido',
            'number.empty': 'Debes ingresar un precio',
            'number.greater': 'El precio debe ser mas alto', // Mensaje personalizado para valores menores o iguales a 0
            'any.required': 'Debes ingresar un precio'
    }),
})

export default schema