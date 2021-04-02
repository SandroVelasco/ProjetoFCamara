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
    switch(req.params.page) {
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
}

module.exports = new AppController();