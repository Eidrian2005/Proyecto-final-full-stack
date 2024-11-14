'use strict';
// Importación de Sequelize y DataTypes
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CarritoDeCompras extends Model {
    static associate(models) {
      // Relación con Producto
      CarritoDeCompras.belongsTo(models.Producto, {
        foreignKey: 'id_producto',
        as: 'Producto'
      });

      // Relación con Cliente
      CarritoDeCompras.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'Cliente'
      });
      // Relación entre Producto y CarritoDeCompras
      Producto.hasMany(models.CarritoDeCompras, { foreignKey: 'id_producto' });
      CarritoDeCompras.belongsTo(models.Producto, { foreignKey: 'id_producto' });

      // Relación entre Cliente y CarritoDeCompras
      Cliente.hasMany(models.CarritoDeCompras, { foreignKey: 'id_cliente' });
      CarritoDeCompras.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });

    }
  }

  CarritoDeCompras.init({
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Carrito_De_Compras',
    tableName: 'Carrito_de_compras',
    timestamps: true
  });

  return CarritoDeCompras;
};
