const model=require('../models/signup')
const {Op}=require('sequelize')
module.exports={userLogin:(details)=>{
    return new Promise((resolve,reject)=>{
        model.Signup.findAll({where:{[Op.and]:{username:details.username,password:details.password}},raw:true}).then((result)=>{resolve(result)}).catch(reject)
    })
}}
