const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    var nome = "gabriel"
    res.render('pages/teste', {
      nome: nome})
    //res.send("Olá!");
  }
}

module.exports = IndexController;