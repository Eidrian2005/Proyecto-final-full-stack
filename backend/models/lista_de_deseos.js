'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lista_de_deseos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lista_de_deseos.init({
    id_productos: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    fecha_agregado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'lista_de_deseos',
  });
  return lista_de_deseos;
};