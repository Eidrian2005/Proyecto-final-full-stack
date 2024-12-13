
const { Lista_de_deseos } = require("../models");


//----------------------Get------------------------//
const get_all_lista_de_deseos = async (req, res) => {
  try {
    const clienteId = req.usuario.id; // Obtener el ID del cliente autenticado
    const listaDeDeseos = await Lista_de_deseos.findAll({
      where: { id_cliente: clienteId }, // Filtrar por cliente autenticado
    });
    res.status(200).json(listaDeDeseos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la lista de deseos." });
  }
};

//----------------------Get by ID------------------------//
const get_lista_de_deseos_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id; // Obtener el ID del cliente autenticado

    const item = await Lista_de_deseos.findOne({
      where: { id, id_cliente: clienteId }, // Validar que el elemento sea del cliente
    });

    if (!item) {
      return res.status(404).json({ error: "Elemento no encontrado en la lista de deseos." });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el elemento de la lista de deseos." });
  }
};

//----------------------Post------------------------//
const post_lista_de_deseos = async (req, res) => {
  try {
    const { id_producto, fecha_agregado } = req.body;
    const clienteId = req.usuario.id; // Obtener el ID del cliente autenticado

    // Verificar si ya existe un registro en la lista de deseos con el mismo producto y cliente
    const listaDeseosExistente = await Lista_de_deseos.findOne({
      where: { id_producto, id_cliente: clienteId },
    });

    if (listaDeseosExistente) {
      return res.status(409).json({ error: "Ya existe un elemento en la lista de deseos con el mismo producto y cliente." });
    } else {
      // Crear un nuevo registro en la lista de deseos
      const nuevoItem = await Lista_de_deseos.create({
        id_producto,
        id_cliente: clienteId,
        fecha_agregado,
      });

      res.status(201).json({
        message: "Elemento agregado a la lista de deseos",
        deseo: nuevoItem,
      });
    }  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar un elemento a la lista de deseos." });
  }
};

//----------------------Put------------------------//
const put_lista_de_deseos = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id; // Obtener el ID del cliente autenticado
    const { id_producto, fecha_agregado } = req.body;

    const item = await Lista_de_deseos.findOne({
      where: { id, id_cliente: clienteId }, // Validar que el elemento sea del cliente
    });

    if (!item) {
      return res.status(404).json({ error: "Elemento no encontrado o acceso denegado." });
    }

    await item.update({
      id_producto,
      fecha_agregado,
    });

    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el elemento de la lista de deseos." });
  }
};

//----------------------Delete------------------------//
const delete_lista_de_deseos = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id; // Obtener el ID del cliente autenticado

    const item = await Lista_de_deseos.findOne({
      where: { id, id_cliente: clienteId }, // Validar que el elemento sea del cliente
    });

    if (!item) {
      return res.status(404).json({ error: "Elemento no encontrado o acceso denegado." });
    }

    await item.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el elemento de la lista de deseos." });
  }
};

module.exports = {
  get_all_lista_de_deseos,
  get_lista_de_deseos_by_id,
  post_lista_de_deseos,
  put_lista_de_deseos,
  delete_lista_de_deseos,
};
