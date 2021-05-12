const model=require('../models/signup')
module.exports={addDetails:(details)=>{
    return new Promise((resolve,reject)=>{
        model.Signup.create(details).then(resolve).catch(reject)
    })
}}
