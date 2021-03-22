const IndexController = {
  /**
   * Rota: /
   * Método: GET
   */
  index: (req, res) => {
    res.send("Olá!");
  }
}

module.exports = IndexController;