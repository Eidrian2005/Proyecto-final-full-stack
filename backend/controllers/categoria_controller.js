const { Categoria } = require("../models");

//----------------------Get------------------------//
const get_all_Categoria = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener las Categorias." });
  }
};
//----------------------Post------------------------//
const post_Categoria = async (req, res) => {
  try {
    const { Categoria} = req.body;
    const categorias = await Categoria.create({
    categorias
    });
    res.status(201).json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoria" });
  }
};



const put_Categoria= async (req , res) => {
  try {
   const{id}=req.params
   const  {  categoria }= req.body;
 
   const categorias = await Categoria.findByPk(id);
   if(!categoria) return res.status(404).json({error:'categoria no encontrada'});
 
   await categoria.update({ categorias });
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