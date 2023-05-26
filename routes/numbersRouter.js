const Router = require('express')
const router = new Router()
const numbersController = require('../controllers/numbersController')

router.post('/', numbersController.post)
router.get('/', numbersController.get)
router.delete('/', numbersController.delete)

module.exports = router