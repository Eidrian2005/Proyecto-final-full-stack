const { Inventario } = require("../models");

//----------------------Get------------------------//
const get_all_inventario = async (req, res) => {
  try {
    const inventario = await Inventario.findAll();
    res.status(200).json(inventario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el inventario." });
  }
};

//----------------------Get by ID------------------------//
const get_inventario_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Inventario.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado en el inventario." });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el producto del inventario." });
  }
};

//----------------------Post------------------------//
const post_inventario = async (req, res) => {
  try {
    const { id_producto, cantidad_disponible, fecha_actualizacion } = req.body;
    const nuevoProducto = await Inventario.create({
      id_producto,
      cantidad_disponible,
      fecha_actualizacion,
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar un producto al inventario." });
  }
};

//----------------------Put------------------------//
const put_inventario = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_producto, cantidad_disponible, fecha_actualizacion } = req.body;
    const producto = await Inventario.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado en el inventario." });
    }
    await producto.update({
      id_producto,
      cantidad_disponible,
      fecha_actualizacion,
    });
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el producto del inventario." });
  }
};

//----------------------Delete------------------------//
const delete_inventario = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Inventario.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado en el inventario." });
    }
    await producto.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto del inventario." });
  }
};

module.exports = {
  get_all_inventario,
  get_inventario_by_id,
  post_inventario,
  put_inventario,
  delete_inventario,
};
