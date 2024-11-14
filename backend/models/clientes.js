'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
  
    static associate(models) {
      // Relación con CarritoDeCompras
      Clientes.hasMany(models.CarritoDeCompras, {
        foreignKey: 'id_cliente',
        as: 'Carritos'
      });
      models.CarritoDeCompras.belongsTo(Clientes, {
        foreignKey: 'id_cliente',
        as: 'Cliente'
      });
    }
  }

  Clientes.init({
    direccion: DataTypes.STRING,
    imagen: DataTypes.BLOB,
    usuario: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
    tableName: 'Clientes',
    timestamps: true
  });

  return Clientes;
};
