const { CarritoDeCompras, Producto, Cliente } = require("../models");

//----------------------Get------------------------//
const get_all_carritos = async (req, res) => {
  try {
    const carritos = await CarritoDeCompras.findAll()
    res.status(200).json(carritos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los carritos de compras." });
  }
};

//----------------------Get by ID------------------------//
const get_carrito_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await CarritoDeCompras.findByPk(id)
    if (!carrito) return res.status(404).json({ error: "Carrito no encontrado" });

    res.status(200).json(carrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el carrito de compras." });
  }
};

//----------------------Post------------------------//
const post_carrito = async (req, res) => {
  try {
    const { id_producto, id_cliente, cantidad } = req.body;
    const nuevoCarrito = await CarritoDeCompras.create({ id_producto, id_cliente, cantidad });
    res.status(201).json(nuevoCarrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el carrito de compras." });
  }
};

//----------------------Put------------------------//
const put_carrito = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_producto, id_cliente, cantidad } = req.body;
    const carrito = await CarritoDeCompras.findByPk(id);
    if (!carrito) return res.status(404).json({ error: "Carrito no encontrado" });

    await carrito.update({ id_producto, id_cliente, cantidad });
    res.status(200).json(carrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el carrito de compras." });
  }
};

//----------------------Delete------------------------//
const delete_carrito = async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await CarritoDeCompras.findByPk(id);
    if (!carrito) return res.status(404).json({ error: "Carrito no encontrado" });

    await carrito.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el carrito de compras." });
  }
};

module.exports = {
  get_all_carritos,
  get_carrito_by_id,
  post_carrito,
  put_carrito,
  delete_carrito,
};
