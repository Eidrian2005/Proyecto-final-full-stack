'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CondicionDePedidos extends Model {
  
    static associate(models) {
      // Relación con Pedidos
      CondicionDePedidos.hasMany(models.Pedidos, {
        foreignKey: 'id_condicion',
        as: 'Pedidos'
      });
      models.Pedidos.belongsTo(CondicionDePedidos, {
        foreignKey: 'id_condicion',
        as: 'Condicion'
      });
    }
  }

  CondicionDePedidos.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Condicion_De_Pedidos',
    tableName: 'Condicion_de_Pedidos',
    timestamps: true
  });

  return CondicionDePedidos;
};
