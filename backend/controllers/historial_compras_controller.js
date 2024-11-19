const { Historial_compras
 } = require("../models");

//----------------------Get------------------------//
const get_all_historiales_compras = async (req, res) => {
  try {
    const historiales = await Historial_compras
.findAll();
    res.status(200).json(historiales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el historial de compras." });
  }
};

//----------------------Get by ID------------------------//
const get_historial_compras_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const historial = await Historial_compras
.findByPk(id);
    if (!historial) return res.status(404).json({ error: "Historial de compra no encontrado" });

    res.status(200).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el historial de compra." });
  }
};

//----------------------Post------------------------//
const post_historial_compras = async (req, res) => {
  try {
    const { id_pedidos, fecha_compra } = req.body;
    const nuevoHistorial = await Historial_compras.create({ id_pedidos, fecha_compra });
    res.status(201).json(nuevoHistorial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el historial de compra." });
  }
};

//----------------------Put------------------------//
const put_historial_compra = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_pedidos, fecha_compra } = req.body;
    const historial = await Historial_compras
.findByPk(id);
    if (!historial) return res.status(404).json({ error: "Historial de compra no encontrado" });

    await historial.update({ id_pedidos, fecha_compra });
    res.status(200).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el historial de compra." });
  }
};

//----------------------Delete------------------------//
const delete_historial_compra = async (req, res) => {
  try {
    const { id } = req.params;
    const historial = await Historial_compras
.findByPk(id);
    if (!historial) return res.status(404).json({ error: "Historial de compra no encontrado" });

    await historial.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el historial de compra." });
  }
};

module.exports = {
  get_all_historiales_compras,
  get_historial_compras_by_id,
  post_historial_compras,
  put_historial_compra,
  delete_historial_compra,
};
