const { Router } = require('express');
const express = require('express');
const router = express.Router();
const appController = require('./../controllers/AppController');
const Middleware = require('./../controllers/Middleware');

/**
 * App Controller
 */
router.get('/', Middleware.sessionCheck, appController.index);
router.get('/pesquisar', Middleware.sessionCheck, appController.pesquisar);
router.get('/doar/:page', Middleware.sessionCheck, appController.doar);
router.get('/anunciar', Middleware.sessionCheck, appController.anunciar);
router.get('/anunciar/:page', Middleware.sessionCheck, appController.anunciarForm);

module.exports = router;
