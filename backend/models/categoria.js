'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Categoria extends Model {
   
    static associate(models) {
      //relacion con productos
      this.hasMany(models.Productos, { foreignKey: 'id_categoria'})
    }
  }
  Categoria.init({
    categoria: {
      type: DataTypes.STRING,
      unique: true,
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