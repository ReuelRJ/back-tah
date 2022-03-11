const VantagemDesvantagemDAO = require("../model/vantagemDesvantagem");

function create(nome, ponto, atributo, vd) {
  return new Promise((resolve, reject) => {
    VantagemDesvantagemDAO.sync()
      .then(() =>
        VantagemDesvantagemDAO.create({
          nome: nome,
          ponto: ponto,
          atributo: atributo,
          vd: vd,
        })
      )
      .then((vantagemDesvantagem) => resolve(vantagemDesvantagem))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    VantagemDesvantagemDAO.sync()
      .then(() =>
        VantagemDesvantagemDAO.findOne({
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
    VantagemDesvantagemDAO.sync()
      .then(() => VantagemDesvantagemDAO.findAll())
      .then((data) => resolve(data))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        VantagemDesvantagemDAO.sync()
        .then(() =>
        VantagemDesvantagemDAO.findOne({ where: { id: id } }).then((vantagemDesvantagem) =>
        vantagemDesvantagem.destroy()
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