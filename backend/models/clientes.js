'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Clientes extends Model {
  
    static associate(models) {
      // Relación con CarritoDeCompras
      Clientes.hasMany(models.Carrito_de_compras, {
        foreignKey: 'id_cliente'
      });
      models.Carrito_de_compras.belongsTo(Clientes, {
        foreignKey: 'id_cliente'
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

    descripcion: {
      type:DataTypes.STRING,
      allowNull: false,
      defaultValue: "usuario" 
    },

    direccion: {
      type:DataTypes.STRING, 
      allowNull: false
    },
    imagen:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario: {
      type:DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    correo: {
      type:DataTypes.STRING,
      unique:true,
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
