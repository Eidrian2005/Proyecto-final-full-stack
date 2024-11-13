const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('shedabo-shop', 'shedabo-shop', 'EDGAV20052506', {
host: '127.0.0.1',
dialect: 'mysql',
});
module.exports = sequelize;