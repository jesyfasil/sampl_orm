const {DataTypes}=require('sequelize')
const sequelize=require('../config/connection').sequelize
const Signup=sequelize.define('signup',{firstname:{type:DataTypes.STRING,allowNull:false},secondname:DataTypes.STRING,username:{type:DataTypes.STRING,allowNull:false,unique:true},
mobile:{type:DataTypes.BIGINT,allowNull:false},state:DataTypes.STRING,password:{type:DataTypes.STRING}},{freezeTableName:true});
module.exports={Signup:Signup}