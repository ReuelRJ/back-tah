const controllers = {};

let VantagemDesvantagemDAO = require("../DAO/vantagem-desvantagem.dao");

controllers.create = async (req, res) =>
  await VantagemDesvantagemDAO.create(
    req.body.nome,
    req.body.ponto,
    req.body.atributo,
    req.body.vd
  )
    .then((vantagemDesvantagem) =>
      res.status(201).send({
        msg: "Vantagem ou Desvantagem criada com sucesso! ",
        data: vantagemDesvantagem,
      })
    )
    .catch((error) =>
      res.status(400).send({
        msg: "Vantagem ou Desvantagem nao criada.",
        Type: error.errors[0].type,
        Campo_ERROR: error.errors[0].path,
      })
    );

controllers.delete = async (req, res) =>
  await VantagemDesvantagemDAO.remove(req.params.id)
    .then((vantagemDesvantagem) =>
      res.status(201).send({
        msg: "Vantagem ou Desvantagem Excluida Com Sucesso!",
        data: vantagemDesvantagem,
      })
    )
    .catch((error) =>
      res
        .status(400)
        .send({ msg: "Vantagem ou Desvantagem nao removida", Type: error })
    );

controllers.findAll = async (req, res) =>
  await VantagemDesvantagemDAO.findAll()
    .then((vantagemDesvantagem) =>
      res.status(201).send({ data: vantagemDesvantagem })
    )
    .catch((error) =>
      res.status(400).send({ msg: "Sem Vantagem ou Desvantagem", Type: error })
    );

controllers.findOne = async (req, res) =>
  await VantagemDesvantagemDAO.findOne(req.params.id)
    .then((vantagemDesvantagem) =>
      res.status(201).send({ data: vantagemDesvantagem })
    )
    .catch((error) =>
      res
        .status(400)
        .send({ msg: "Vantagem ou Desvantagem nao encontrada", Type: error })
    );

module.exports = controllers;
