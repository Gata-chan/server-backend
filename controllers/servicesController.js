const {Services} = require('../models/models.js')

class ServicesController {
    async post (req, res) {
        const {service_name, service_price, service_img_url} = req.body
        const services = await Services.create({service_name, service_price, service_img_url})
        return res.json(services)
    }
    async get (req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }
    async delete (req, res) {

    }
}

module.exports = new ServicesController()