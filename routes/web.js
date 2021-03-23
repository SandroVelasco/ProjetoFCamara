const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/IndexController');

/**
 * Index Controller
 */
router.get('/', indexController.index);

router.post('/teste/', (req, res)=> {
  console.log(req.body)
  res.send(`var ${req.body.nome}`)
}) 

router.get('/post/', (req, res) => {
  var nome = ''
  res.render('pages/teste', {
    nome: nome})
  })

module.exports = router;