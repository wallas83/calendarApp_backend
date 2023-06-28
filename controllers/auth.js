const { response } = require('express');



const crearUsuario = (req, res = response) => {
    const { name, email, password } = req.body;

    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser al menos de cinco letras.'
        })
    }
    res.json({
        ok: true,
        msg: "registro",
        name,
        password,
        email,
    })
}
const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: "registro",
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