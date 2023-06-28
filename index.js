const express = require('express');
require('dotenv').config();

// crear el servidor de express

const app  = express();

// directorio publico

app.use(express.static('public'))


// rutas
app.use('/api/auth', require('./routes/auth'));

//lectura y parseo del body
app.use(express.json());


// escuchar peticiones

app.listen( process.env.PORT , () => {
    console.log(`servidor corriendo en el puerto ${ process.env.PORT }`);
})