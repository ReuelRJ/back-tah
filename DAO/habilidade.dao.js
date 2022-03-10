const HabilidadeDAO = require("../model/habilidade");

function create(nome, custoModFol, tipoAlcance) {
  return new Promise((resolve, reject) => {
    HabilidadeDAO.sync()
      .then(() =>
        HabilidadeDAO.create({
          nome: nome,
          custoModFol: custoModFol,
          tipoAlcance: tipoAlcance,
        })
      )
      .then((habilidade) => resolve(habilidade))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    HabilidadeDAO.sync()
      .then(() =>
        HabilidadeDAO.findOne({
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
    HabilidadeDAO.sync()
      .then(() => HabilidadeDAO.findAll())
      .then((data) => resolve(data))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    HabilidadeDAO.sync()
      .then(() =>
        HabilidadeDAO.findOne({ where: { id: id } }).then((habilidade) =>
          habilidade.destroy()
        )
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
    remove
}