const { Tipo_usuario } = require("../models");

//----------------------Get------------------------//
const get_all_tipo_usuarios = async (req, res) => {
  try {
    const tipoUsuarios = await Tipo_usuario.findAll();
    res.status(200).json(tipoUsuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los tipos de usuario." });
  }
};

//----------------------Get by ID------------------------//
const get_tipo_usuario_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await Tipo_usuario.findByPk(id);
    if (!tipoUsuario) {
      return res.status(404).json({ error: "Tipo de usuario no encontrado." });
    }
    res.status(200).json(tipoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el tipo de usuario." });
  }
};

//----------------------Post------------------------//
const post_tipo_usuario = async (req, res) => {
  try {
    const { id_cliente, descripcion } = req.body;
    const nuevoTipoUsuario = await Tipo_usuario.create({
      id_cliente,
      descripcion
    });
    res.status(201).json(nuevoTipoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el tipo de usuario." });
  }
};

//----------------------Put------------------------//
const put_tipo_usuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente, descripcion } = req.body;
    const tipoUsuario = await Tipo_usuario.findByPk(id);
    if (!tipoUsuario) {
      return res.status(404).json({ error: "Tipo de usuario no encontrado." });
    }
    await tipoUsuario.update({
      id_cliente,
      descripcion
    });
    res.status(200).json(tipoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el tipo de usuario." });
  }
};

//----------------------Delete------------------------//
const delete_tipo_usuario = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await Tipo_usuario.findByPk(id);
    if (!tipoUsuario) {
      return res.status(404).json({ error: "Tipo de usuario no encontrado." });
    }
    await tipoUsuario.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el tipo de usuario." });
  }
};

module.exports = {
  get_all_tipo_usuarios,
  get_tipo_usuario_by_id,
  post_tipo_usuario,
  put_tipo_usuario,
  delete_tipo_usuario,
};
