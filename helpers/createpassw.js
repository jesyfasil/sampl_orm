const model=require('../models/signup')
module.exports={createPassw:(details)=>{
    return new Promise((resolve,reject)=>{
        model.Signup.update({password:details.password},{where:{username:details.username}}).then(resolve).catch(reject)
    })
}}
