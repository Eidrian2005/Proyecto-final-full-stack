'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Productos extends Model {
    static associate(models) {
      //relacion con historial ventas
      this.hasMany(models.Historial_ventas, {foreignKey: 'id_producto'})

      //relacion con inventario
      this.hasOne(models.Inventario, {foreignKey: 'id_producto'})

      //relacion con lista de deseos
      this.hasMany(models.Lista_de_deseos, { foreignKey: 'id_producto' });

      // Relación con Pedidos
      this.hasMany(models.Pedidos, { foreignKey: 'id_producto'});

      // Relación con Categoria
      this.belongsTo(models.Categoria, { foreignKey: 'id_categoria'});

    }
  }
  Productos.init({
    id_categoria: {
      type:DataTypes.INTEGER,
      references: {
        model: "Categoria",
        key: "id"
      }
    },
    imagen: {
      type:DataTypes.BLOB,
    allowNull: true
    },
    nombre_producto: {
      type:DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false
    },
    unidades: {
      type:DataTypes.INTEGER,
    allowNull:false
    },
    precio: {
      type:DataTypes.DECIMAL,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Productos',
    tableName: "Productos",
    timestamps: true,
  });
  return Productos;
};