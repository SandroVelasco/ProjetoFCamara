class Middleware {
  constructor() {}

  /**
   * Middleware para o IndexController
   */
  static indexController(req, res, next) {
    console.log('We passed on middleware for IndexController');
    next();
  }
}

module.exports = Middleware;