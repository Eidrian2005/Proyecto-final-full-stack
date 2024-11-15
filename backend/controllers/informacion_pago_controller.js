const { Informacion_de_pago } = require("../models");

//----------------------Get------------------------//
const get_all_informacion_de_pago = async (req, res) => {
  try {
    const informacionDePago = await Informacion_de_pago.findAll();
    res.status(200).json(informacionDePago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la información de pago." });
  }
};

//----------------------Get by ID------------------------//
const get_informacion_de_pago_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const informacionPago = await Informacion_de_pago.findByPk(id);
    if (!informacionPago) {
      return res.status(404).json({ error: "Información de pago no encontrada." });
    }
    res.status(200).json(informacionPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la información de pago." });
  }
};

//----------------------Post------------------------//
const post_informacion_de_pago = async (req, res) => {
  try {
    const { nombre_de_tarjeta, numero_de_tarjeta, fecha_de_vencimiento, codigo_de_seguridad } = req.body;
    const nuevaInformacionPago = await Informacion_de_pago.create({
      nombre_de_tarjeta,
      numero_de_tarjeta,
      fecha_de_vencimiento,
      codigo_de_seguridad,
    });
    res.status(201).json(nuevaInformacionPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la información de pago." });
  }
};

//----------------------Put------------------------//
const put_informacion_de_pago = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_de_tarjeta, numero_de_tarjeta, fecha_de_vencimiento, codigo_de_seguridad } = req.body;
    const informacionPago = await Informacion_de_pago.findByPk(id);
    if (!informacionPago) {
      return res.status(404).json({ error: "Información de pago no encontrada." });
    }
    await informacionPago.update({
      nombre_de_tarjeta,
      numero_de_tarjeta,
      fecha_de_vencimiento,
      codigo_de_seguridad,
    });
    res.status(200).json(informacionPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la información de pago." });
  }
};

//----------------------Delete------------------------//
const delete_informacion_de_pago = async (req, res) => {
  try {
    const { id } = req.params;
    const informacionPago = await Informacion_de_pago.findByPk(id);
    if (!informacionPago) {
      return res.status(404).json({ error: "Información de pago no encontrada." });
    }
    await informacionPago.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la información de pago." });
  }
};

module.exports = {
  get_all_informacion_de_pago,
  get_informacion_de_pago_by_id,
  post_informacion_de_pago,
  put_informacion_de_pago,
  delete_informacion_de_pago,
};
