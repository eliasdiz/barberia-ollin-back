import bcryptjs from 'bcryptjs'

function passwordOk(req,res,next){
    const db_password = req.user.password
    const user_password = req.body.password
    if( bcryptjs.compareSync(user_password,db_password)){
        return next()
    }
    return res  
        .status(400)
        .json({
            message: 'Credenciales erroneas'
        })
}

export default passwordOk