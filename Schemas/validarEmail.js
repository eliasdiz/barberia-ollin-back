import Joi from "joi";

const schema = Joi.object({

    email: Joi
        .string()
        .required()
        .email({ minDomainSegments: 2 })
        .messages({
            'string.email':'debes ingresar un email valido',
            'any.required': 'debes ingresar un email',
            'string.empty' : 'debes ingresar un email'
        }),
})

export default schema