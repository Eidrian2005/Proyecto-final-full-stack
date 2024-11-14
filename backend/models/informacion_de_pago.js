'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informacion_de_pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  informacion_de_pago.init({
    nombre_de_tarjeta: DataTypes.STRING,
    numero_de_tarjeta: DataTypes.INTEGER,
    fecha_de_vencimiento: DataTypes.DATE,
    codigo_de_seguridad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'informacion_de_pago',
  });
  return informacion_de_pago;
};