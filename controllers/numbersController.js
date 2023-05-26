const {Numbers} = require('../models/models.js')

class NumbersController {
    async post (req, res) {
        const {phonenumber} = req.body
        const numbers = await Numbers.create({phonenumber})
        return res.json(numbers)
    }
    async get (req, res) {
        const numbers = await Numbers.findAll()
        return res.json(numbers)
    }
    async delete (req, res) {

    }
}

module.exports = new NumbersController()