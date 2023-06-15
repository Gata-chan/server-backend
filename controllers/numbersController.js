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
        const {id} = req.body
        
        if (id === "" || id === undefined || id === 0) {
            return res.json({Message:'Uh-oh',NumberStatus: false})
        } else {
            const numbers = await Numbers.destroy({where: {id}})
            console.log(id);
            return res.json({numbers, NumberStatus: true})
        }
    }
}

module.exports = new NumbersController()