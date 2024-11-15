'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Condicion_de_pedidos extends Model {
  
    static associate(models) {
      // Relación con Pedidos
      Condicion_de_pedidos.hasMany(models.Pedidos, {
        foreignKey: 'id_condicion',
        as: 'Pedidos'
      });
      models.Pedidos.belongsTo(Condicion_de_pedidos, {
        foreignKey: 'id_condicion',
        as: 'Condicion'
      });

      //relacion de pedidos
      this.hasMany(models.Pedidos, { foreignKey: 'id_condicion', as: 'pedidos' })
    }
  }

  Condicion_de_pedidos.init({
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Condicion_de_pedidos',
    tableName: 'Condicion_de_pedidos',
    timestamps: true
  });

  return Condicion_de_pedidos;
};
