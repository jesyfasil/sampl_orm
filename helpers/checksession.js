const Session=require('../models/session').Session
module.exports={checkSession:(sessionid)=>{
    return new Promise((resolve,reject)=>{
    Session.findOne({where:{sessionid:sessionid},raw:true}).then((result)=>{resolve(result)}).catch(reject)
    })
}}