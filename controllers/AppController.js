class AppController {
  constructor() {}

  /**
   * Rota: /
   * Método: GET
   */
  index(req, res) {
    res.render("./../views/index");
  }

  /**
   * Rota: /pesquisar
   * Método: GET
   */
  pesquisar(req, res) {
    res.render("./../views/pesquisar");
  }

  /**
   * Rota: /doar/:page
   * Método: GET
   */
  doar(req, res) {
    switch (req.params.page) {
      case "descricao":
      case "confirmacao":
      case "pagamento":
      case "agradecimentos":
        res.render(`./../views/doar-page-${req.params.page}`);
        break;
      default:
        res.redirect("/doar/descricao");
    }
  }

  /**
   * Rota: /anunciar
   * Método: GET
   */
  anunciar(req, res) {
    res.render("./../views/fluxo-anuncio-inicial");
  }

  /**
   * Rota: /anunciar/:page
   * Método: GET
   */
  anunciarForm(req, res) {
    switch (req.params.page) {
      case "matricula":
      case "anuncio":
      case "materiais":
      case "finalizacao":
        res.render(`./../views/fluxo-anuncio-${req.params.page}`);
        break;
      default:
        res.redirect("/anunciar");
    }
  }
}

module.exports = new AppController();