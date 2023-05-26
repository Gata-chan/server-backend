const Router = require('express')
const router = new Router()
const numbersRouter = require('./numbersRouter')
const servicesRouter = require('./servicesRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/numbers', numbersRouter)
router.use('/services', servicesRouter)

module.exports = router