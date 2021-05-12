const Session=require('../models/session').Session
module.exports={addSession:(details)=>{
    return new Promise((resolve,reject)=>{
        Session.create(details).then(()=>{resolve()}).catch(()=>{reject(err)})
    })
}}
