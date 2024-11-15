'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
   
    static associate(models) {
      //relacion con productos
      this.hasMany(models.Productos, { foreignKey: 'id_categoria'})
    }
  }
  Categoria.init({
    categoria: {
      type:DataTypes.STRING,
      unique,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Categoria',
    tableName: 'Categoria',
    timestamps: true
  });
  return Categoria;
};