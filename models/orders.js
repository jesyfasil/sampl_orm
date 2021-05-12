const {DataTypes}=require('sequelize')
const Signup=require('./signup').Signup
const sequelize=require('../config/connection').sequelize
const Order=sequelize.define('order',{product_name:{type:DataTypes.STRING,allowNull:false},price:{type:DataTypes.FLOAT,allowNull:false}},{freezeTableName:true});
Signup.hasMany(Order)
Order.belongsTo(Signup)
module.exports={Order:Order}