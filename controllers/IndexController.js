const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    res.render('./../views/index');
  },

  doacao2: (req, res) => {
    res.render('./../views/fazer-doacao-2');
  }
}

module.exports = IndexController;