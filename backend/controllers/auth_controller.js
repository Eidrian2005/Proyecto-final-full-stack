const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require("../config");
const { Usuarios } = require("../models");

const iniciarSesion = async (req, res) => {
  const { nombre_usuario, contra_usuario } = req.body;
  try {
    // Buscar el usuario por su nombre de usuario
    const usuario = await Usuarios.findOne({ where: { nombre_usuario } });
    if (!usuario) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }
    // Aqui deberfas comparar la contrasena proporcionada con la almacenada
    const esContrasenaValida = await bcrypt.compare(contra_usuario, usuario.contra_usuario); // Asegurate de tener bcrypt instalado
    if (!esContrasenaValida) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }
    // Generar el token JWT
    const token = jwt.sign(
      { id: usuario.id, nombre_usuario: usuario.nombre_usuario },
      jwtSecret,
      {
        expiresIn: jwtExpiresIn,
      }
    );
    res.status(200).json({ token }); // Devolver el token al cliente
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesion." });
  }
};
module.exports = {
  iniciarSesion,
};
