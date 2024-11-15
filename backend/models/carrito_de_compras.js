'use strict';
// Importación de Sequelize y DataTypes
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Carrito_de_compras extends Model {
    static associate(models) {
      // Relación con Producto
      Carrito_de_compras.belongsTo(models.Producto, {
        foreignKey: 'id_producto',
        as: 'Producto'
      });

      // Relación con Cliente
      Carrito_de_compras.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'Cliente'
      });
      // Relación entre Producto y Carrito_de_compras
      Producto.hasMany(models.Carrito_de_compras, { foreignKey: 'id_producto' });
      Carrito_de_compras.belongsTo(models.Producto, { foreignKey: 'id_producto' });

      // Relación entre Cliente y Carrito_de_compras
      Cliente.hasMany(models.Carrito_de_compras, { foreignKey: 'id_cliente' });
      Carrito_de_compras.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });

    }
  }

  Carrito_de_compras.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: {
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Carrito_de_compras',
    tableName: 'Carrito_de_compras',
    timestamps: true
  });

  return Carrito_de_compras;
};
