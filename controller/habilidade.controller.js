const controllers = {};

let HabilidadeDAO = require("../DAO/habilidade.dao");

controllers.create = async (req, res) =>
  await HabilidadeDAO.create(
    req.body.nome,
    req.body.custoModificador,
    req.body.tipoAlcance
  )
    .then((habilidade) =>
      res.status(201).send({
        msg: "Habilidade criada com sucesso! ",
        data: habilidade,
      })
    )
    .catch((error) =>
      res.status(400).send({
        msg: "Habilidade nao criada.",
        Type: error.errors[0].type,
        Campo_ERROR: error.errors[0].path,
      })
    );

controllers.delete = async (req, res) =>
  await HabilidadeDAO.remove(req.params.id)
    .then((habilidade) =>
      res
        .status(201)
        .send({ msg: "Habilidade Excluida Com Sucesso!", data: habilidade })
    )
    .catch((error) =>
      res.status(400).send({ msg: "Habilidade nao removida", Type: error })
    );

controllers.findAll = async (req, res) =>
  await HabilidadeDAO.findAll()
    .then((habilidade) => res.status(201).send({ data: habilidade }))
    .catch((error) =>
      res.status(400).send({ msg: "Sem habilidades", Type: error })
    );

controllers.findOne = async (req, res) =>
  await HabilidadeDAO.findOne(req.params.id)
    .then((habilidade) => res.status(201).send({ data: habilidade }))
    .catch((error) =>
      res.status(400).send({ msg: "Habilidade nao encontrada", Type: error })
    );


module.exports = controllers