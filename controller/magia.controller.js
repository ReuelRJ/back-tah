const controllers = {};

let MagiaDAO = require("../DAO/magia.dao");

controllers.create = async (req, res) =>
  await MagiaDAO.create(
    req.body.nome,
    req.body.ponto,
    req.body.atributo,
    req.body.tipoAlcance
  )
    .then((magia) =>
      res.status(201).send({
        msg: "Magia criada com sucesso! ",
        data: magia,
      })
    )
    .catch((error) =>
      res.status(400).send({
        msg: "Magia nao criada.",
        Type: error.errors[0].type,
        Campo_ERROR: error.errors[0].path,
      })
    );

controllers.delete = async (req, res) =>
  await MagiaDAO.remove(req.params.id)
    .then((magia) =>
      res.status(201).send({ msg: "Magia Excluida Com Sucesso!", data: magia })
    )
    .catch((error) =>
      res.status(400).send({ msg: "Magia nao removida", Type: error })
    );

controllers.findAll = async (req, res) =>
  await MagiaDAO.findAll()
    .then((magia) => res.status(201).send({ data: magia }))
    .catch((error) => res.status(400).send({ msg: "Sem magia", Type: error }));

controllers.findOne = async (req, res) =>
  await MagiaDAO.findOne(req.params.id)
    .then((magia) => res.status(201).send({ data: magia }))
    .catch((error) =>
      res.status(400).send({ msg: "Magia nao encontrada", Type: error })
    );

module.exports = controllers;
