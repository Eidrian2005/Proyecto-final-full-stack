// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const {Tipo_usuario} = require("../models");

// Middleware para verificar el token JWT
const verificarToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acceso denegado. Token no proporcionado." });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.usuario = decoded; // Guardar la información del usuario en la request
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido." });
  }
};

//Verifica si es usuario 
const isAdmin = async (req, res, next) => { 
  try { 
    const tipoUsuario = await Tipo_usuario.findOne({ where: { id_cliente: req.usuario.id } });
    if (tipoUsuario && tipoUsuario.id === 2) {
      return next(); } else {
      return res.status(403).json({ error: "Acceso denegado" }); 
    }
   } catch (error) {
    res.status(500).json({ error: "Error al verificar el tipo de usuario." });
   }
  };
module.exports = {verificarToken,isAdmin};
