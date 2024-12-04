const { Productos } = require("../models");
const cloudinary = require('../config/cloudinaryConfig');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
    const { id_categoria, imagen, nombre_producto, descripcion, unidades, precio } = req.body;

    const file = req.file; // Obtenido a través de multer
    let imageUrl = null;

    if (file) {
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        folder: 'productos', // Carpeta en Cloudinary
      });
      imageUrl = uploadResult.secure_url; // URL segura de Cloudinary
    }


    const nuevoProducto = await Productos.create({
      id_categoria,
      imagen: imageUrl,
      nombre_producto,
      descripcion,
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
    const { id_categoria, nombre_producto, descripcion, unidades, precio } = req.body;
    const producto = await Productos.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }

    let imageUrl = producto.imagen; // Mantener la URL existente si no hay nueva imagen

    if (req.file) { // Si se sube una nueva imagen
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'productos',
      });
      imageUrl = uploadResult.secure_url; // Actualizar la URL de la imagen
    }

    await producto.update({
      id_categoria,
      imagen: imageUrl, // Usar la URL nueva o la existente
      nombre_producto,
      descripcion,
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
