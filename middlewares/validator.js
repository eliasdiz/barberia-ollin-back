const validator = (schema) => [

    (req,res,next) => {
        const validation = schema.validate( req.body, { abortEarly: true})
        if( validation.error ){
            return res  
                .status(400)
                .json({
                    message: validation.error.details.map( error => error.message)
                })
        }
        return next()
    }
]

export default validator