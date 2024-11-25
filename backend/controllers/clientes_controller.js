const { Clientes, CarritoDeCompras } = require("../models");
const bcrypt = require("bcrypt");

//----------------------Get------------------------//
const get_all_clientes = async (req, res) => {
  try {
    const clientes = await Clientes.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los clientes." });
  }
};

//----------------------Get by ID------------------------//
const get_cliente_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Clientes.findByPk(id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });

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
    const contraseña_cifrada = await bcrypt.hash(contraseña, 10);

    const nuevoCliente = await Clientes.create({
      direccion,
      imagen,
      usuario,
      correo,
      contraseña: contraseña_cifrada
    });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el cliente." });
  }
};

//----------------------Put------------------------//
const put_cliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, direccion, imagen, usuario, correo, contraseña } = req.body;
    const cliente = await Clientes.findByPk(id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });

    const contraseña_cifrada = contraseña ? await bcrypt.hash(contraseña, 10) : cliente.contraseña;

    await cliente.update({ descripcion, direccion, imagen, usuario, correo, contraseña: contraseña_cifrada });
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cliente." });
  }
};

//----------------------Delete------------------------//
const delete_cliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Clientes.findByPk(id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });

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
