const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/IndexController');

/**
 * Index Controller
 */
//router.get('/', indexController.index);

router.get('/', (req, res) => {
  res.render('admin/index')
  })

router.post('/teste/', (req, res)=> {
  if (req.body.email != [null] && req.body.senha1 == req.body.senha1Confirm){
    res.send(`Bem vindo ${req.body.email}!`)
  } else{
    res.send('erro')
  }
}) 



module.exports = router;  