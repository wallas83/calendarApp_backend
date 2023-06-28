/*
Rutas de usuario /Auth
host + /api/auth
*/
const { Router } = require('express');
const router = Router();
const { crearUsuario,revalidarToken, loginUsuario } = require('../controllers/auth')
// Rutas

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);



module.exports = router;