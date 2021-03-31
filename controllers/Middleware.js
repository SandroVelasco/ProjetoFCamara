class Middleware {
  constructor() {}

  /**
   * Middleware para o IndexController
   */
  static indexController(req, res, next) {
    next();
  }
}

module.exports = Middleware;