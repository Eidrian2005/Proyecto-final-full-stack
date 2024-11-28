// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config");


// Middleware para verificar el token JWT
const verificarToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acceso denegado. Token no proporcionado." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Guardar la información del usuario en la request
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido." });
  }
};

//Verifica si es usuario 
const isAdmin = (req, res, next) => {
  if (req.usuario && req.usuario.descripcion === "administrador") {
    console.log("esto si funciona");
    return next();
  } else {
    return res.status(403).json({ error: "Acceso denegado" });
  }
};


module.exports = {verificarToken,isAdmin};
