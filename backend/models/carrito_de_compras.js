'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Carrito_de_compras extends Model {
    static associate(models) {
      // Relación con Producto 
      Carrito_de_compras.belongsTo(models.Productos, {
        foreignKey: 'id_producto',
        as: 'Productos'
      });

      // Relación con Cliente 
      Carrito_de_compras.belongsTo(models.Clientes, {
        foreignKey: 'id_cliente',
        as: 'Clientes'
      });
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
