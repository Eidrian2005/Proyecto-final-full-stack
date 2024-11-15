'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historial_ventas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references:{
          model:"Productos",
          key:"id"
        }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references:{
          model:"Clientes",
          key:"id"
        }
      },
      id_pedidos: {
        type: Sequelize.INTEGER,
        references:{
          model:"Pedidos",
          key:"id"
        }
      },
      fecha_venta: {
        type: Sequelize.DATE
      },
      cantidad_vendida: {
        type: Sequelize.INTEGER
      },
      total_venta: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historial_ventas');
  }
};