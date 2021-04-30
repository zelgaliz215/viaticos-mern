const app = require('./app');
const conectarDB = require('./config/db'); //REQUERIR EL ARCHIVO DE CONEXION

conectarDB();//CONECTAR A A LA BASE DE DATOS
//iniciar el servidor de express en el puerto definido en la Variale PORT


async function main(){
    const PORT = app.get('port')
    await app.listen(PORT)
    console.log(`Server on port: ${PORT}`)
}

main();

// FORMA ANTIGUA app.listen(4000, ()=>console.log('server on port 4000'))