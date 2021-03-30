const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/IndexController');
const Middleware = require('./../controllers/Middleware');

/**
 * Index Controller
 */
router.get('/', Middleware.indexController, indexController.index);
router.get("/doacao", Middleware.indexController, indexController.doacao);
router.get('/confirmacao', Middleware.indexController, indexController.confirmacao);
router.get("/pagamento", Middleware.indexController, indexController.pagamento);
router.get("/agradecimento", Middleware.indexController, indexController.agradecimento);

module.exports = router;
