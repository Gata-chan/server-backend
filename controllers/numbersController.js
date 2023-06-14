const {Numbers} = require('../models/models.js')

class NumbersController {
    async post (req, res) {
        const {phonenumber} = req.body
        if (phonenumber === "") {
            return res.json({message:'Uh-oh not good', NumberStatus: false})
        } if (phonenumber.length != 11) {
            return res.json({message:'Uh-oh not good', NumberStatus: false})
        } else {
            const numbers = await Numbers.create({phonenumber})
            return res.json({numbers, NumberStatus: true})
        }

    }
    async get (req, res) {
        const numbers = await Numbers.findAll()
        return res.json(numbers)
    }
    async delete (req, res) {

    }
}

module.exports = new NumbersController()