const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/IndexController');

/**
 * Index Controller
 */
router.get('/', indexController.index);
router.get('/doacao2', indexController.doacao2);
router.get('/pagamento', indexController.pagamento);
router.get('/agradecimento', indexController.agradecimento);

module.exports = router;