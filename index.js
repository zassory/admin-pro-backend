require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');


//Crear el servidor de express
const app = express();

//Configurar CORS

//use es conocido como un middleware
//ejecuta siempre una instruccion siempre que se pasa por el
app.use(cors());

//Base de datos
dbConnection();

//Rutas
//Headers req
//Respuesta del servidor res
app.get( '/', (req,res) => {

    res.status(400).json({
        ok:true,
        msg: 'Hola mundo'
    });

});


app.listen( process.env.PORT , ()=> {
    console.log('Servidor corriendo en puerto: ', process.env.PORT );
});