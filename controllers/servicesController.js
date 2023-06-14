const {Services} = require('../models/models.js')

class ServicesController {
    async post (req, res) {
        const {service_name, service_price, service_img_url} = req.body
        if (service_name === "" || service_price === "" || service_img_url === "") {
            return res.json({Message:'Uh-oh',ServicesStatus: false})
        } else {
            const services = await Services.create({service_name, service_price, service_img_url})
            return res.json({services, ServicesStatus: true})
        }

    }
    async get (req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }
    async delete (req, res) {
        console.log(req);
        const {id} = req.body
        
        if (id === "") {
            return res.json({Message:'Uh-oh',ServicesStatus: false})
        } else {
            const services = await Services.destroy({where: {id}})
            console.log(id);
            return res.json({services, ServicesStatus: true})
        }
    }
}

module.exports = new ServicesController()