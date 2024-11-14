'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historial_ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historial_ventas.init({
    id_producto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    id_pedidos: DataTypes.INTEGER,
    fecha_venta: DataTypes.DATE,
    cantidad_vendida: DataTypes.INTEGER,
    total_venta: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'historial_ventas',
  });
  return historial_ventas;
};