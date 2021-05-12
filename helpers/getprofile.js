const Signup=require('../models/signup').Signup
const Order=require('../models/orders').Order
module.exports={getProfile:(userid)=>{
    return new Promise((resolve,reject)=>{
    Signup.findByPk(userid,{attribultes:['firstname','secondname','username','state','mobile'],include:Order}).then((result)=>{resolve(result)}).catch(reject)
    })
}}