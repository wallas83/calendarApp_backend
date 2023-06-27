const express = require('express');
require('dotenv').config();

// crear el servidor de express

const app  = express();

// directorio publico

app.use(express.static('public'))


// ruitas
app.use('/api/auth', require('./routes/auth'));

// escuchar peticiones

app.listen( process.env.PORT , () => {
    console.log(`servidor corriendo en el puerto ${ process.env.PORT }`);
})