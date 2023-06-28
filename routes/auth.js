/*
Rutas de usuario /Auth
host + /api/auth
*/
const { Router } = require('express');
const { check} = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campo');
const router = Router();
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth')
// Rutas

router.post('/new',
    [ //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de minimo de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario);

router.post('/',
[
    check('name', 'El nombre es obligatorio').isEmail(),
    check('password', 'El password debe ser de minimo de 6 caracteres').isLength({min:6}),
    validarCampos
],
loginUsuario);

router.get('/renew', revalidarToken);



module.exports = router;