const router = require('express').Router();
const vantagemDesvantagem = require('../controller/vantagem-desvantagem.controller')

router.get('/', vantagemDesvantagem.findAll)
router.get('/:id', vantagemDesvantagem.findOne)
router.post('/', vantagemDesvantagem.create)
router.delete('/:id', vantagemDesvantagem.delete)

module.exports = router