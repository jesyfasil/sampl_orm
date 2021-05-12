var express = require('express');
var { v4: uuidv4 } = require('uuid')
var router = express.Router();
var signupHelper = require('../helpers/signup')
var createPassw = require('../helpers/createpassw')
var login = require('../helpers/login')
var addSession=require('../helpers/addsession')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'NPCI' });
});
router.post('/signup', async (req, res) => {
  try {
    await signupHelper.addDetails(req.body)
    res.json({ success: true })
  }
  catch (err) {
    res.send(err)
  }
})
router.post('/createpassword', async (req, res, next) => {
  try {
    await createPassw.createPassw(req.body)
    res.json({ success: true })
  }
  catch (err) {
    res.send(err)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const result = await login.userLogin(req.body)
    console.log(result)
    if (result.length != 0) {
      let id = uuidv4()
      console.log(id)
      res.cookie('sessionid', id , { expire: 30 * 60 })
      await addSession.addSession({signupId:result[0].id,sessionid:id})
      res.json({ success: true })
    }
    else
      res.json({ message: "please signup first" })
  }
  catch (err) {
    console.log(err)
    res.send(err)
  }
})


module.exports = router;
