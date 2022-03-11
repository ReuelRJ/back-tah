const router = require('express').Router();
const magia = require('../controller/magia.controller')


router.get('/', magia.findAll)
router.get('/:id', magia.findOne)
router.post('/', magia.create)
router.delete('/:id', magia.delete)

module.exports = router