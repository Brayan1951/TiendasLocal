const express = require("express");
const cors = require("cors");

const db = require("../database/conectionSql");
const { dbConnection } = require("../database/conctionMongo");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT || "8000";
    this.server = require("http").createServer(this.app);

    this.apiPaths = {
      tiendas: "/api/tiendas",
      productos: "/api/productos",
      usuarios: "/api/usuarios",
      auth: "/api/auth",
    };

    // middlewares
    // this.dbConectionSQL();
    this.conectarMongoDB();
    this.middleware();

    // Rutas
    this.routes();
  }
  // Conection con SQl
  // async dbConectionSQL() {
  //   try {
  //     await db.authenticate();
  //     console.log("database online !!! :D");
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  async conectarMongoDB() {
    await dbConnection();
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
    this.app.use(this.apiPaths.productos, require("../routes/productos"));
    this.app.use(this.apiPaths.usuarios, require("../routes/usuario"));
    this.app.use(this.apiPaths.auth, require("../routes/auth"));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
