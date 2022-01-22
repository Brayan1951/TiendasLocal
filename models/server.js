const express = require("express");
const cors = require("cors");

const db = require("../database/conectionSql");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT || "8000";
    this.server = require("http").createServer(this.app);

    this.apiPaths = {
      tiendas: "/api/tiendas",
    };

    // middlewares
    this.dbConection();
    this.middleware();
    // Rutas
    this.routes();
  }

  async dbConection() {
    try {
      await db.authenticate();
      console.log("database online !!! :D");
    } catch (error) {
      throw new Error(error);
    }
  }

  middleware() {
    // cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.tiendas, require("../routes/tiendas"));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
