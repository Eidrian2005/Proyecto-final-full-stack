const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Clientes } = require("../models");

const iniciarSesion = async (req, res) => {
  const { usuario, contraseña } = req.body;
  try {
    // Buscar el usuario por su nombre de usuario
    const user = await Clientes.findOne({ where: { usuario } });
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }
    // Aqui deberfas comparar la contrasena proporcionada con la almacenada
    const esContrasenaValida = await bcrypt.compare(contraseña, user.contraseña); // Asegurate de tener bcrypt instalado
    if (!esContrasenaValida) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }
    // Generar el token JWT
    const token = jwt.sign(
      { id: user.id, usuario: user.usuario, descripcion: user.descripcion },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );;
    res.status(200).json({ token }); // Devolver el token al cliente
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesion." });
  }
};
module.exports = {
  iniciarSesion,
};
