'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HistorialCompras extends Model {
   
    static associate(models) {
      // Relación con Pedidos
      HistorialCompras.belongsTo(models.Pedidos, {
        foreignKey: 'id_pedidos',
        as: 'pedido'
      });
      models.Pedidos.hasMany(HistorialCompras, {
        foreignKey: 'id_pedidos',
        as: 'Historiales'
      });
    }
  }

  HistorialCompras.init({
    id_pedidos: DataTypes.INTEGER,
    fecha_compra: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Historial_Compras',
    tableName: 'Historial_compras',
    timestamps: true// Puedes habilitarlo si necesitas createdAt y updatedAt
  });

  return HistorialCompras;
};
