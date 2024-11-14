'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class condicion_de_pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  condicion_de_pedidos.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'condicion_de_pedidos',
  });
  return condicion_de_pedidos;
};