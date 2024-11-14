'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventario.init({
    id_producto: DataTypes.INTEGER,
    cantidad_disponible: DataTypes.INTEGER,
    fecha_actualizacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Inventario',
    tableName: "Inventario",
    timestamps: true,
  });
  return Inventario;
};