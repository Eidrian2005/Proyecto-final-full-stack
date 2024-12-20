const bcrypt = require("bcrypt");
const { Clientes } = require("../models");

//----------------------Get------------------------//
const get_all_clientes = async (req, res) => {
  try {
    const clienteId = req.usuario.id; // Obtenemos el ID del cliente autenticado
    const cliente = await Clientes.findByPk(clienteId); // Obtenemos los datos del cliente autenticado

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
    const clienteId = req.usuario.id; // Obtenemos el ID del cliente autenticado
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
    const { direccion, imagen, usuario, correo, contraseña } = req.body;

    const esContrasenaEncriptada = await bcrypt.hash(contraseña, 10); 

    const nuevoCliente = await Clientes.create({
      direccion,
      imagen,
      usuario,
      correo,
      contraseña: esContrasenaEncriptada,
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
    const clienteId = req.usuario.id; // ID del cliente autenticado
    const { direccion, imagen, usuario, correo } = req.body;

    const cliente = await Clientes.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }

    await cliente.update({ direccion, imagen, usuario, correo });

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
    const clienteId = req.usuario.id; // ID del cliente autenticado
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
