const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    res.render('pages/teste')
    //res.send("Olá!");
  }
}

module.exports = IndexController;