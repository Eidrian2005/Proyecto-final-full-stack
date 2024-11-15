'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_usuario extends Model {
    static associate(models) {
      //relacion con clientes
      this.belongsTo(models.Clientes, { foreignKey: 'id_cliente'})
    }
  }
  Tipo_usuario.init({
    id_cliente: {
      type:DataTypes.INTEGER,
      references: {
        model: "Cliente",
        key: "id"
      }
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tipo_usuario',
    tableName: "Tipo_usuario",
    timestamps: true,
  });
  return Tipo_usuario;
};