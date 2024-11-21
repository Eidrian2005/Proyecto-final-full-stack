'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Informacion_de_pago extends Model {
    static associate(models) {
      this.hasMany(models.Pedidos, {foreignKey: 'id_informacion_pago'})
    }
  }
  Informacion_de_pago.init({
    nombre_de_tarjeta: {
      type:DataTypes.STRING,
      allowNull:false
    },
    numero_de_tarjeta: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fecha_de_vencimiento: {
      type:DataTypes.DATE,
      allowNull: false
    },
    codigo_de_seguridad: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Informacion_de_pago',
    tableName: "Informacion_de_pago",
    timestamps: true,
  });
  return Informacion_de_pago;
};