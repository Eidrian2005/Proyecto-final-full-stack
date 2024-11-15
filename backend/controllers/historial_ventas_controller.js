const { Historial_ventas, Productos, Clientes, Pedidos } = require("../models");

//----------------------Get------------------------//
const get_all_historial_ventas = async (req, res) => {
  try {
    const historialVentas = await Historial_ventas.findAll();
    res.status(200).json(historialVentas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el historial de ventas." });
  }
};

//----------------------Get by ID------------------------//
const get_historial_venta_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const historialVenta = await Historial_ventas.findByPk(id);
    if (!historialVenta) return res.status(404).json({ error: "Historial de venta no encontrado" });

    res.status(200).json(historialVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el historial de venta." });
  }
};

//----------------------Post------------------------//
const post_historial_venta = async (req, res) => {
  try {
    const { id_producto, id_cliente, id_pedidos, fecha_venta, cantidad_vendida, total_venta } = req.body;
    const nuevoHistorialVenta = await Historial_ventas.create({
      id_producto,
      id_cliente,
      id_pedidos,
      fecha_venta,
      cantidad_vendida,
      total_venta
    });
    res.status(201).json(nuevoHistorialVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el historial de venta." });
  }
};

//----------------------Put------------------------//
const put_historial_venta = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_producto, id_cliente, id_pedidos, fecha_venta, cantidad_vendida, total_venta } = req.body;
    const historialVenta = await Historial_ventas.findByPk(id);
    if (!historialVenta) return res.status(404).json({ error: "Historial de venta no encontrado" });

    await historialVenta.update({
      id_producto,
      id_cliente,
      id_pedidos,
      fecha_venta,
      cantidad_vendida,
      total_venta
    });
    res.status(200).json(historialVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el historial de venta." });
  }
};

//----------------------Delete------------------------//
const delete_historial_venta = async (req, res) => {
  try {
    const { id } = req.params;
    const historialVenta = await Historial_ventas.findByPk(id);
    if (!historialVenta) return res.status(404).json({ error: "Historial de venta no encontrado" });

    await historialVenta.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el historial de venta." });
  }
};

module.exports = {
  get_all_historial_ventas,
  get_historial_venta_by_id,
  post_historial_venta,
  put_historial_venta,
  delete_historial_venta,
};
