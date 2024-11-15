'use strict';
const {
  Model
} = require('sequelize');
const productos = require('./productos');
module.exports = (sequelize, DataTypes) => {
  class Historial_ventas extends Model {
    static associate(models) {

      // relacion con productos
      this.belongsTo(models.productos, { foreignKey: "id_producto" });
      // relacion con clientes
      this.belongsTo(models.clientes, { foreignKey: "id_cliente" });
      // relacion con pedidos
      this.belongsTo(models.pedidos, { foreignKey: "id_pedidos" })
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
      type:DataTypes.DATE,
      allowNull: false
    },
    cantidad_vendida:{ 
      type:DataTypes.INTEGER,
      allowNull: false
    },
    total_venta: {
      type:DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Historial_ventas',
    tableName: "Historial_ventas",
    timestamps: true,
  });
  return Historial_ventas;
};