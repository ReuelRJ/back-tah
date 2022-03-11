const MagiaDAO = require("../model/magia");

function create(nome, ponto, atributo, tipoAlcance) {
  return new Promise((resolve, reject) => {
    MagiaDAO.sync()
      .then(() =>
        MagiaDAO.create({
          nome: nome,
          ponto: ponto,
          atributo: atributo,
          tipoAlcance: tipoAlcance,
        })
      )
      .then((magia) => resolve(magia))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    MagiaDAO.sync()
      .then(() =>
        MagiaDAO.findOne({
          where: { id: id },
        })
      )
      .then((data) => resolve(data))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function findAll() {
  return new Promise((resolve, reject) => {
    MagiaDAO.sync()
      .then(() => MagiaDAO.findAll())
      .then((data) => resolve(data))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    MagiaDAO.sync()
      .then(() =>
        MagiaDAO.findOne({ where: { id: id } }).then((magia) => magia.destroy())
      )
      .then((data) => resolve(data))
      .catch((error) => {
        console.log("ERROR: ", error);
        reject(error);
      });
  });
}

module.exports = {
  create,
  findAll,
  findOne,
  remove,
};
