'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedidos.init({
    id_producto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    id_condicion: DataTypes.INTEGER,
    id_informacion_pago: DataTypes.INTEGER,
    fecha_de_pedido: DataTypes.DATE,
    cantidad: DataTypes.INTEGER,
    precio_total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Pedidos',
    tableName: "Pedidos",
    timestamps: true,
  });
  return Pedidos;
};