import mongoose from "mongoose";

mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO)
    .then( () => console.log('conectado a DB'))
    .catch( (error) => console.log(error))
