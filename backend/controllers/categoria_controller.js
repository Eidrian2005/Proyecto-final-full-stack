const { Categorias } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_Categoria = async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener las Categorias." });
  }
};
//----------------------Post------------------------//
const post_Categoria = async (req, res) => {
  try {
    const { nombre_categoria} = req.body;
    const categoria = await Categorias.create({
    nombre_categoria
    });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoria" });
  }
};



const put_Categoria= async (req , res) => {
  try {
   const{id}=req.params
   const  {  nombre_categoria }= req.body;
 
   const categoria = await Categorias.findByPk(id);
   if(!categoria) return res.status(404).json({error:'categoria no encontrada'});
 
   await categoria.update({ nombre_categoria });
   res.status(200).json(categoria)
  } catch (error) {
   res.status(500).json({error:'error al actualizar la Categoria.'})
  }
   
 }
 
 const delete_Categoria = async (req , res) => {
   try {
     const{id}=req.params
 
     const categoria = await Categorias.findByPk(id);
     if(!categoria) return res.status(404).json({error:'categoria no encontrado'});
 
     await categoria.destroy()
     res.status(204).send()
   } catch (error) {
     res.status(500).json({error:'error al eliminar la categoria.'})
   }
 }

module.exports = { get_all_Categoria, post_Categoria, put_Categoria, delete_Categoria};