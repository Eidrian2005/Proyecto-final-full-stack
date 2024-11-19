const { Condicion_de_pedidos } = require("../models");

//----------------------Get------------------------//
const get_all_condiciones = async (req, res) => {
  try {
    const condiciones = await Condicion_de_pedidos.findAll();
    res.status(200).json(condiciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las condiciones de pedidos." });
  }
};

//----------------------Get by ID------------------------//
const get_condicion_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const condicion = await Condicion_de_pedidos.findByPk(id);
    if (!condicion) return res.status(404).json({ error: "Condición de pedido no encontrada" });

    res.status(200).json(condicion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la condición de pedido." });
  }
};

//----------------------Post------------------------//
const post_condicion = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const nuevaCondicion = await Condicion_de_pedidos.create({ descripcion });
    res.status(201).json(nuevaCondicion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la condición de pedido." });
  }
};

//----------------------Put------------------------//
const put_condicion = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const condicion = await Condicion_de_pedidos.findByPk(id);
    if (!condicion) return res.status(404).json({ error: "Condición de pedido no encontrada" });

    await condicion.update({ descripcion });
    res.status(200).json(condicion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la condición de pedido." });
  }
};

//----------------------Delete------------------------//
const delete_condicion = async (req, res) => {
  try {
    const { id } = req.params;
    const condicion = await Condicion_de_pedidos.findByPk(id);
    if (!condicion) return res.status(404).json({ error: "Condición de pedido no encontrada" });

    await condicion.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la condición de pedido." });
  }
};

module.exports = {
  get_all_condiciones,
  get_condicion_by_id,
  post_condicion,
  put_condicion,
  delete_condicion,
};
