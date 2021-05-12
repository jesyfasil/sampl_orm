const Session=require('../models/session').Session
module.exports={userLogout:(sessionid)=>{
    return new Promise((resolve,reject)=>{
        console.log(sessionid)
        console.log("logging out")
        Session.destroy({where:{sessionid:sessionid}}).then(resolve).catch(reject)
    })
}}
