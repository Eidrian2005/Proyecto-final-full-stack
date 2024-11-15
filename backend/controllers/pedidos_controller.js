const { Pedidos } = require("../models");

//----------------------Get------------------------//
const get_all_pedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los pedidos." });
  }
};

//----------------------Get by ID------------------------//
const get_pedido_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedidos.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }
    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el pedido." });
  }
};

//----------------------Post------------------------//
const post_pedido = async (req, res) => {
  try {
    const { id_producto, id_cliente, id_condicion, id_informacion_pago, fecha_de_pedido, cantidad, precio_total } = req.body;
    const nuevoPedido = await Pedidos.create({
      id_producto,
      id_cliente,
      id_condicion,
      id_informacion_pago,
      fecha_de_pedido,
      cantidad,
      precio_total
    });
    res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el pedido." });
  }
};

//----------------------Put------------------------//
const put_pedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_producto, id_cliente, id_condicion, id_informacion_pago, fecha_de_pedido, cantidad, precio_total } = req.body;
    const pedido = await Pedidos.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }
    await pedido.update({
      id_producto,
      id_cliente,
      id_condicion,
      id_informacion_pago,
      fecha_de_pedido,
      cantidad,
      precio_total
    });
    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el pedido." });
  }
};

//----------------------Delete------------------------//
const delete_pedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedidos.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }
    await pedido.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el pedido." });
  }
};

module.exports = {
  get_all_pedidos,
  get_pedido_by_id,
  post_pedido,
  put_pedido,
  delete_pedido,
};
