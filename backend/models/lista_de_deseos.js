'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista_de_deseos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lista_de_deseos.init({
    id_productos: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    fecha_agregado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Lista_de_deseos',
    tableName: "Lista_de_deseos",
    timestamps: true,
  });
  return Lista_de_deseos;
};