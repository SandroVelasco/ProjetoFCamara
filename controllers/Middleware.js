class Middleware {
  constructor() {}

  /**
   * Controle de sessão (não implementado)
   */
  static sessionCheck(req, res, next) {
    next();
  }
}

module.exports = Middleware;