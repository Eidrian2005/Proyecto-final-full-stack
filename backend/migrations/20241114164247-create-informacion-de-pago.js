'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('informacion_de_pagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_de_tarjeta: {
        type: Sequelize.STRING
      },
      numero_de_tarjeta: {
        type: Sequelize.INTEGER
      },
      fecha_de_vencimiento: {
        type: Sequelize.DATE
      },
      codigo_de_seguridad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('informacion_de_pagos');
  }
};