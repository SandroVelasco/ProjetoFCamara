const express = require('express');
const router = express.Router();
const IndexController = require('./../controllers/IndexController');

/**
 * Index Controller
 */
router.get('/', IndexController.index);
router.get('/doacao', IndexController.doacao);
router.get('/confirmacao', IndexController.confirmacao);
router.get('/pagamento', IndexController.pagamento);
router.get('/agradecimento', IndexController.agradecimento);

module.exports = router;
