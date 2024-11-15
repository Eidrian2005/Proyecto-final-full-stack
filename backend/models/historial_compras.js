'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Historial_compras extends Model {
   
    static associate(models) {
      // Relación con Pedidos
      Historial_compras.belongsTo(models.Pedidos, {
        foreignKey: 'id_pedidos',
        as: 'pedido'
      });
      models.Pedidos.hasMany(Historial_compras, {
        foreignKey: 'id_pedidos',
        as: 'Historiales'
      });
    }
  }

  Historial_compras.init({
    id_pedidos: {
      type:DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Pedidos",
      key: "id"
    }
    },
    fecha_compra: {
      type:DataTypes.DATE,
    allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Historial_Compras',
    tableName: 'Historial_compras',
    timestamps: true
  });

  return Historial_compras;
};
