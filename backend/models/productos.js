'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    static associate(models) {
      
    }
  }
  Productos.init({
    id_categoria: {
      type:DataTypes.INTEGER
    },
    imagen: DataTypes.BLOB,
    nombre_producto: DataTypes.STRING,
    descipcion: DataTypes.STRING,
    unidades: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Productos',
    tableName: "Productos",
    timestamps: true,
  });
  return Productos;
};