const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('shedaboshop', 'eidrian', 'EDGAV20052506', {
host: '192.168.100.7',
dialect: 'mysql',
});
module.exports = sequelize;