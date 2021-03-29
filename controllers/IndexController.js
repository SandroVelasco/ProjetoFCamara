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
   * Rota: /confirmacao 
   * Método: GET
   */
  confirmacao: (req, res) => {
    res.render('./../views/confirmacao.ejs');
  },

  /**
   * Rota: /pagamento 
   * Método: GET
   */
  pagamento: (req, res) => {
    res.render('./../views/pagamento');
  },

  /**
   * Rota: /agradecimento
   * Método: GET
   */
  agradecimento: (req, res) => {
    res.render('./../views/agradecimento');
  }
  
  /**
   * Rota: /agradecimento
   * Método: GET
   */
  agradecimento: (req, res) => {
    res.render('./../views/agradecimento');
  }
}

module.exports = IndexController;
