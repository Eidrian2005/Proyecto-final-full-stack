'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventario extends Model {
    static associate(models) {
      // relacion con productos
      this.belongsTo(models.Productos, {foreignKey: 'id_producto'})
    }
  }
  Inventario.init({
    id_producto: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: "Productos",
        key: "id"
      }
    },
    cantidad_disponible: {
      type: DataTypes.INTEGER,
    allowNull: false
    },
    fecha_actualizacion: {
      type:DataTypes.DATE,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Inventario',
    tableName: "Inventario",
    timestamps: true,
  });
  return Inventario;
};