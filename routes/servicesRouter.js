const Router = require('express')
const router = new Router()
const servicesController = require('../controllers/servicesController')

router.post('/', servicesController.post)
router.get('/', servicesController.get)
router.post('/Delete', servicesController.delete)

module.exports = router