const bcrypt = require("bcrypt");
const { Clientes } = require("../models");
const cloudinary = require('../config/cloudinaryConfig');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//----------------------Get------------------------//
const get_all_clientes = async (req, res) => {
  try {
    const clienteId = req.usuario.id; // ID del cliente autenticado
    const cliente = await Clientes.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos del cliente." });
  }
};

//----------------------Get by ID------------------------//
const get_cliente_by_id = async (req, res) => {
  try {
    const clienteId = req.usuario.id;
    const cliente = await Clientes.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente." });
  }
};

//----------------------Post------------------------//
const post_cliente = async (req, res) => {
  try {
    const { direccion, usuario, correo, contraseña } = req.body;

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    let imageUrl = null;
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "clientes",
      });
      imageUrl = uploadResult.secure_url;
    }

    const nuevoCliente = await Clientes.create({
      direccion,
      imagen: imageUrl,
      usuario,
      correo,
      contraseña: hashedPassword,
    });

    res.status(201).json({
      message: "Cliente creado correctamente.",
      cliente: nuevoCliente,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el cliente." });
  }
};

//----------------------Put------------------------//
const put_cliente = async (req, res) => {
  try {
    const clienteId = req.usuario.id;
    const { direccion, usuario, correo } = req.body;

    const cliente = await Clientes.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }

    let imageUrl = cliente.imagen; // Mantener la URL existente si no hay nueva imagen

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "clientes",
      });
      imageUrl = uploadResult.secure_url;
    }

    await cliente.update({
      direccion,
      imagen: imageUrl,
      usuario,
      correo,
    });

    res.status(200).json({
      message: "Cliente actualizado correctamente.",
      cliente,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cliente." });
  }
};

//----------------------Delete------------------------//
const delete_cliente = async (req, res) => {
  try {
    const clienteId = req.usuario.id;
    const cliente = await Clientes.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }

    await cliente.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el cliente." });
  }
};

module.exports = {
  get_all_clientes,
  get_cliente_by_id,
  post_cliente,
  put_cliente,
  delete_cliente,
};
