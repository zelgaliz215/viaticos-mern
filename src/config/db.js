//CONECTAR A BASE DE DATOS DEFINIDA EN LA URI MEDIANTE MONGOOSE
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})

const URI = process.env.DB_MONGO; // aqui le podria dar una uri de test por defecto ||

const conectarDB = async()=>{

    try {
        
       await mongoose.connect(URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
        });
             
        console.log('DB CONECTADA A ', URI)

    } catch (error) {
        console.log('Hubo un error: ',error);
        //process.exit(1);
    }
}
module.exports = conectarDB;