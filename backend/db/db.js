const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('shedaboshop', 'eidrian', 'EDGAV20052506', {
host: '192.168.1.80',
dialect: 'mysql',
});
module.exports = sequelize;