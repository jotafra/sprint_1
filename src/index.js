const express = require("express"); //importando o módolo express

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
  }
  routes() {
    //URL base:
    const api_routes = require("./routes/api_routes");
    this.express.use("/agen/sala-de-aula/v1", api_routes);

    this.express.get("/agen/sala-de-aula/v1/health/", (req, res) => {
      res.send({ status: "OK" });
    });
  }
}
module.exports = new AppController().express;