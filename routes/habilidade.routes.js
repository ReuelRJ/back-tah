const router = require('express').Router();
const habilidade = require('../controller/habilidade.controller')


router.get('/', habilidade.findAll)
router.get('/:id', habilidade.findOne)
router.post('/', habilidade.create)
router.delete('/:id', habilidade.delete)

module.exports = router