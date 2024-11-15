'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
  
    static associate(models) {
      // Relación con CarritoDeCompras
      Clientes.hasMany(models.CarritoDeCompras, {
        foreignKey: 'id_cliente',
        as: 'Carritos'
      });
      models.CarritoDeCompras.belongsTo(Clientes, {
        foreignKey: 'id_cliente',
        as: 'Cliente'
      });

     //relacion con historial venta
      this.hasMany(models.Historial_ventas, {foreignKey: 'id_cliente'})

      //relacion con lista de deseos
      this.hasMany(models.Lista_de_deseos, { foreignKey: 'id_cliente' })

      // Relación con Pedidos
      this.hasMany(models.Pedidos, { foreignKey: 'id_cliente'});

      // Relación con Tipo_usuario
      this.hasOne(models.Tipo_usuario, { foreignKey: 'id_cliente'});

    }
  }
  

  Clientes.init({
    direccion: {
      type:DataTypes.STRING, 
      allowNull: false
    },
    imagen:{
      type: DataTypes.BLOB,
      allowNull: true
    },
    usuario: {
      type:DataTypes.STRING,
      unique,
      allowNull: false
    },
    correo: {
      type:DataTypes.STRING,
      unique,
      allowNull: false
    },
    contraseña: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Clientes',
    tableName: 'Clientes',
    timestamps: true
  });

  return Clientes;
};
