'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Pedidos extends Model {
    
    static associate(models) {
      //relacion con historial ventas
      this.hasMany(models.Historial_compras, {foreignKey: 'id_pedidos'});

      // Relación con Productos
      this.belongsTo(models.Productos, {foreignKey: 'id_producto'})

      // Relación con Clientes
      this.belongsTo(models.Clientes, { foreignKey: 'id_cliente'})

      // Relación con Condicion_pedido
      this.belongsTo(models.Condicion_de_pedidos, { foreignKey: 'id_condicion' })
    }
  }
  Pedidos.init({
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: "Productos",
        key: "id"
      }
    },
    id_cliente: {
      type:DataTypes.INTEGER,
      references: {
        model: "CLientes",
        key: "id"
      }
    },
    id_condicion: {
      type:DataTypes.INTEGER,
      references: {
        model: "Condicion_de_pedidos",
        key: "id"
      }
    },
    fecha_de_pedido: {
      type:DataTypes.DATE,
      allowNull: false
    },
    cantidad: {
      type:DataTypes.INTEGER,
    allowNull: false
    },
    precio_total: {
      type:DataTypes.DECIMAL,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Pedidos',
    tableName: 'Pedidos',
    timestamps: true,
    hooks: {
      async afterCreate(pedido, options) {
        const { Historial_compras } = sequelize.models;

        // Registrar el historial de compras
        await Historial_compras.create({
          id_pedidos: pedido.id,
          fecha_compra: new Date(), // Fecha actual
        });
      },
    },
  }
);
  return Pedidos;
};