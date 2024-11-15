const { Productos } = require("../models");

//----------------------Get------------------------//
const get_all_productos = async (req, res) => {
  try {
    const productos = await Productos.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos." });
  }
};

//----------------------Get by ID------------------------//
const get_producto_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Productos.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el producto." });
  }
};

//----------------------Post------------------------//
const post_producto = async (req, res) => {
  try {
    const { id_categoria, imagen, nombre_producto, descipcion, unidades, precio } = req.body;
    const nuevoProducto = await Productos.create({
      id_categoria,
      imagen,
      nombre_producto,
      descipcion,
      unidades,
      precio
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el producto." });
  }
};

//----------------------Put------------------------//
const put_producto = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_categoria, imagen, nombre_producto, descipcion, unidades, precio } = req.body;
    const producto = await Productos.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    await producto.update({
      id_categoria,
      imagen,
      nombre_producto,
      descipcion,
      unidades,
      precio
    });
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el producto." });
  }
};

//----------------------Delete------------------------//
const delete_producto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Productos.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    await producto.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto." });
  }
};

module.exports = {
  get_all_productos,
  get_producto_by_id,
  post_producto,
  put_producto,
  delete_producto,
};
