var express = require('express');
var router = express.Router();
const getprofile = require('../helpers/getprofile');
const logout=require('../helpers/logout');
const makeorder = require('../helpers/makeorder');
/* GET users listing. */

router.get('/getprofile', async (req, res, next) => {
    try {
        console.log(req.userid)
        const result = await getprofile.getProfile(req.userid) 
        res.json({data:result})
    }
    catch (e) {
        res.send(e)
    }
});
router.get('/logout', async (req, res, next) => {
    try {
        await logout.userLogout(req.cookies.sessionid)
        res.clearCookie('sessionid') 
        res.json({message:"loggedout successfully"})
    }
    catch (e) {
        res.send(e)
    }
});
router.post('/order', async (req, res, next) => {
    try {
    
        await makeorder.makeOrder (req.body,req.userid) 
        res.json({message:"order placed"})
    }
    catch (e) {
        res.send(e)
    }
});

module.exports = router;
