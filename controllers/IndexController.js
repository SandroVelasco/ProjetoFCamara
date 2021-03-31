class IndexController {
  constructor() {}

  /**
   * Rota: /
   * Método: GET
   */
  index(req, res) {
    res.render("./../views/index");
  }

  /**
   * Rota: /doacao
   * Método: GET
   */
  doacao(req, res) {
    res.render('./../views/fazer-doacao-2');
  }

  /**
   * Rota: /confirmacao 
   * Método: GET
   */
  confirmacao(req, res) {
    res.render('./../views/confirmacao.ejs');
  }

  /**
   * Rota: /pagamento 
   * Método: GET
   */
  pagamento(req, res) {
    res.render('./../views/pagamento');
  }

  /**
   * Rota: /agradecimento
   * Método: GET
   */
  agradecimento(req, res) {
    res.render('./../views/agradecimento');
  }

  /**
   * Rota: /anunciar/:page
   * Método: GET
   */
  anunciar(req, res) {
    if(req.params.page == 1) {
      res.render('./../views/fazer-anuncio-1');
    } else if(req.params.page == 2) {
      res.render("./../views/fazer-anuncio-2");
    } else if(req.params.page == 3) {
      res.render("./../views/fazer-anuncio-3");
    } else {
      res.render('./../views/fazer-anuncio-1');
    }
  }
}

module.exports = new IndexController();