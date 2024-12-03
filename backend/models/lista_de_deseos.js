'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Lista_de_deseos extends Model {
    static associate(models) {
      //relacion con producto
      this.belongsTo(models.Productos,{foreignKey: 'id_producto'})
      //relacion con clientes
      this.belongsTo(models.Clientes,{foreignKey: 'id_cliente'})
    }
  }
  Lista_de_deseos.init({
    id_producto:{
      type:DataTypes.INTEGER,
      references:{
        model: 'Productos',
        key: 'id'
      }
    },
    id_cliente: {
      type:DataTypes.INTEGER,
      references:{
        model: 'Clientes',
        key: 'id'
      }
    },
    fecha_agregado: {
      type:DataTypes.DATE,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Lista_de_deseos',
    tableName: "Lista_de_deseos",
    timestamps: true,
  });
  return Lista_de_deseos;
};