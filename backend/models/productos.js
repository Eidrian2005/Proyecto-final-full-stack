'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productos.init({
    id_categoria: DataTypes.INTEGER,
    imagen: DataTypes.BLOB,
    nombre_producto: DataTypes.STRING,
    descipcion: DataTypes.STRING,
    unidades: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};