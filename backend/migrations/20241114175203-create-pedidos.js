'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
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
      id_condicion: {
        type: Sequelize.INTEGER,
        references:{
          model:"Condicion_de_pedidos",
          key:"id"
        }
      },
      id_informacion_pago: {
        type: Sequelize.INTEGER,
        references:{
          model:"Informacion_de_pago",
          key:"id"
        }
      },
      fecha_de_pedido: {
        type: Sequelize.DATE
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio_total: {
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
    await queryInterface.dropTable('pedidos');
  }
};