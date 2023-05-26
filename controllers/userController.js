const {User} = require ('../models/models.js')

class UserController {
    async login (req, res) {
        const {username, password} = req.body
        const user = await User.findOne({where: {username}})
        if (!user) {
            res.json({message:'NOT WORKING !!!!', LoginStatus: false})
        }
        if (user.password != password) {
            res.json({message:'NOT WORKING !!!!2', LoginStatus: false})
        }
        if (user.password == password && user.username == username) {
            res.json({message:'Good Login', LoginStatus: true})
        }
    }
}

module.exports = new UserController()