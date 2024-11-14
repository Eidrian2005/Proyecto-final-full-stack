'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informacion_de_pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Informacion_de_pago.init({
    nombre_de_tarjeta: DataTypes.STRING,
    numero_de_tarjeta: DataTypes.INTEGER,
    fecha_de_vencimiento: DataTypes.DATE,
    codigo_de_seguridad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Informacion_de_pago',
    tableName: "Informacion_de_pago",
    timestamps: true,
  });
  return Informacion_de_pago;
};