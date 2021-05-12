const Sequelize = require('sequelize')
const sequelize = new Sequelize('npci', 'root', 'password', { host: 'localhost', dialect: 'mysql' })
module.exports={sequelize:sequelize}