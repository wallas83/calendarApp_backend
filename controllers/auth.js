const { response } = require('express');
const {validationResult} = require('express-validator');



const crearUsuario = (req, res = response) => {
     const {name, email, password } = req.body;

 
    res.status(201).json({
        ok: true,
        msg: "registro",
        name,
        password,
        email,
    })
}
const loginUsuario = (req, res = response) => {


    const { email, password } = req.body;
    
    res.status(200).json({
        ok: true,
        msg: "logIn",
        password,
        email,
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true
    })
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}