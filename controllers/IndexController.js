const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    res.render('./../views/index');
  }
}

module.exports = IndexController;
