const Order=require('../models/orders').Order
module.exports={makeOrder:(details,userid)=>{
    return new Promise((resolve,reject)=>{
        Order.create({product_name:details.name,price:details.price,signupId:userid}).then(()=>{resolve()}).catch((err)=>{reject(err)})
    })
}}
