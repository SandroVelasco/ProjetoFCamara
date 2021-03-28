const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    res.render('./../views/index');
  },

  /**
   * Rota: /doacao2
   * Método: GET
   */
  doacao2: (req, res) => {
    res.render('./../views/fazer-doacao-2');
  },

  /**
   * Rota: /pagamento 
   * Método: GET
   */
  pagamento: (req, res) => {
    res.render('./../views/pagamento.ejs');
  }
}

module.exports = IndexController;