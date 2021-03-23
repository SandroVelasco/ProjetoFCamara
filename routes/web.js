const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/IndexController');

/**
 * Index Controller
 */
router.get('/', indexController.index);

router.get('/teste/', (req, res)=> {

  res.send(`var ${req.body}`)
}) 

router.post('/post/', (req, res) => {
  var nome = ''
  res.render('pages/teste', {
    nome: nome})
  })

module.exports = router;