
const { Lista_de_deseos } = require("../models");


//----------------------Get------------------------//
const get_all_lista_de_deseos = async (req, res) => {
  try {
    const listaDeDeseos = await Lista_de_deseos.findAll();
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
    const item = await Lista_de_deseos.findByPk(id);
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
    const { id_producto, id_cliente, fecha_agregado } = req.body;

    console.log('Req Body', req.body);
    
    // Verificar si ya existe un registro en la lista de deseos con el mismo producto y cliente
    const listaDeseosExistente = await Lista_de_deseos.findOne({
      where: { id_producto, id_cliente } // Aquí se pasa un objeto con las condiciones
    });

    console.log("Lista de deseos existente", listaDeseosExistente);

    if (listaDeseosExistente) {
      return res.status(409).json({ error: 'Ya existe un elemento en la lista de deseos con el mismo producto y cliente.' });
    } else {
      // Crear un nuevo registro en la lista de deseos
      const nuevoItem = await Lista_de_deseos.create({
        id_producto,
        id_cliente,
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
    const { id_productos, id_cliente, fecha_agregado } = req.body;
    const item = await Lista_de_deseos.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Elemento no encontrado en la lista de deseos." });
    }
    await item.update({
      id_productos,
      id_cliente,
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
    const item = await Lista_de_deseos.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Elemento no encontrado en la lista de deseos." });
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
