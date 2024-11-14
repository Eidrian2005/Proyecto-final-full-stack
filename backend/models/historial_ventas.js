'use strict';
const {
  Model
} = require('sequelize');
const productos = require('./productos');
module.exports = (sequelize, DataTypes) => {
  class Historial_ventas extends Model {
    static associate(models) {

      // define association here
      this.belongsTo(models.productos, {foreignKey: "id_producto"})

    }
  }
  Historial_ventas.init({
    id_producto:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Productos",
        key: "id"
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Clientes",
        key: "id"
      }
    },
    id_pedidos: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pedidos",
        key: "id"
      }
    },
    fecha_venta: {
      type:DataTypes.DATE
    },
    cantidad_vendida:{ 
      type:DataTypes.INTEGER
    },
    total_venta: {
      type:DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Historial_ventas',
    tableName: "Historial_ventas",
    timestamps: true,
  });
  return Historial_ventas;
};