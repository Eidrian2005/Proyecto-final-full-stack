const express = require('express');
const  iniciarSesion  = require("../controllers/auth_controller");
const router = express.Router();

// Ruta para iniciar sesion
router.post('/login', iniciarSesion.iniciarSesion);

module.exports = router;