const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('shedaboshop', 'eidrian', 'EDGAV20052506', {
host: '127.0.0.1',
dialect: 'mysql',
});
module.exports = sequelize;