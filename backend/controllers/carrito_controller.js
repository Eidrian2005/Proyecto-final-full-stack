const { Carrito_de_compras } = require("../models");

//----------------------Get------------------------//
const get_all_carritos = async (req, res) => {
  try {
    const carritos = await Carrito_de_compras.findAll()
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
    const carrito = await Carrito_de_compras.findByPk(id)
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

    // Buscar si ya existe un registro en el carrito con el mismo producto y cliente
    const carritoExistente = await Carrito_de_compras.findOne({
      where: { id_producto, id_cliente },
    });

    if (carritoExistente) {
      // Si ya existe, actualizar la cantidad
      carritoExistente.cantidad += cantidad; // Incrementar la cantidad
      await carritoExistente.save(); // Guardar los cambios
      return res.status(200).json({
        message: "Cantidad actualizada correctamente",
        carrito: carritoExistente,
      });
    } else {
      // Si no existe, crear un nuevo registro
      const nuevoCarrito = await Carrito_de_compras.create({
        id_producto,
        id_cliente,
        cantidad,
      });
      return res.status(201).json({
        message: "Producto añadido al carrito",
        carrito: nuevoCarrito,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud." });
  }
};


//----------------------Put------------------------//
const put_carrito = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_producto, id_cliente, cantidad } = req.body;
    const carrito = await Carrito_de_compras.findByPk(id);
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
    const carrito = await Carrito_de_compras.findByPk(id);
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
