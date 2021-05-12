const {DataTypes}=require('sequelize')
const Signup=require('./signup').Signup
const sequelize=require('../config/connection').sequelize
const Session=sequelize.define('session',{sessionid:{type:DataTypes.STRING,allowNull:false}},{freezeTableName:true});
Signup.hasOne(Session)
Session.belongsTo(Signup)
module.exports={Session:Session}