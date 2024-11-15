'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    
    static associate(models) {
      //relacion con historial ventas
      this.hasMany(models.Historial_compras, {foreignKey: 'id_pedidos'});

      //relacion con historial ventas
      this.hasMany(models.Historial_ventas, {foreignKey: 'id_pedidos'})

      // Relación con Productos
      this.belongsTo(models.Productos, {foreignKey: 'id_producto'})

      // Relación con Clientes
      this.belongsTo(models.Clientes, { foreignKey: 'id_cliente'})

      // Relación con Condicion_pedido
      this.belongsTo(models.Condicion_de_pedido, { foreignKey: 'id_condicion' })

      // Relación con Informacion_de_pago 
      this.belongsTo(models.Informacion_de_pago, { foreignKey: 'id_informacion_pago'});

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
    id_informacion_pago:{
      type: DataTypes.INTEGER,
      references: {
        model: "Informacion_de_pago",
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
  }, {
    sequelize,
    modelName: 'Pedidos',
    tableName: "Pedidos",
    timestamps: true,
  });
  return Pedidos;
};