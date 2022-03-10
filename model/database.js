const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const util = require("../util/util");
const { Model } = require("sequelize");
const Commons = require("../util/commons-config");
const commons = new Commons();
const sequelize = new Sequelize(
  process.env.CLEARDB_DATABASE_URL,
  commons.objAdress
);

class Habilidade extends Model{}

class Manutencao {
  async tables() {
    console.log("Tentando incluir tabelas!");

    await Habilidade.sync()

    console.log("");
    console.log("DONE!");
    console.log("");
  }

  createTables() {
    commons
      .connectMysql(process.env.CLEARDB_DATABASE_URL)
      .then(() => {
        console.log("");
        console.log(
          "***** - Inicianco Criação do Banco de Dados do Sistema - *****"
        );
        console.log("");
        console.log("Data da Inicialização: ", util.dateNow());
        console.log("Hora Inicialização: ", util.timeNow());
        console.log("");
      })
      .then(() => this.tables())
      .then(() => {
        console.log("Hora Finalização: ", util.timeNow());
        console.log("");
        console.log(
          "********* - Finalizando Crianção do banco de Dados - *********"
        );
        console.log("");
      });
  }
}
const man = new Manutencao();
//man.createTables();

module.exports = {
  sequelize,
  Habilidade
};
