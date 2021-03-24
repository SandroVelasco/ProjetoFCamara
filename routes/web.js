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
  res.send(`Bem vindo ${req.body.nome}!`)
}) 



module.exports = router;  