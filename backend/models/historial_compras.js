'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historial_compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historial_compras.init({
    id_pedidos: DataTypes.INTEGER,
    fecha_compra: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'historial_compras',
  });
  return historial_compras;
};