const sequelize = require('../db.js')
const {DataTypes} = require ('sequelize')

const User = sequelize.define(
    'user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, unique: true, allowNull:false},
        password: {type: DataTypes.STRING, allowNull:false}
    }
)

const Numbers = sequelize.define(
    'numbers', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        phonenumber: {type: DataTypes.STRING, allowNull:false}
    }
)

const Services = sequelize.define(
    'services', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        service_name: {type: DataTypes.STRING, allowNull:false},
        service_price: {type: DataTypes.STRING, allowNull:false},
        service_img_url: {type: DataTypes.STRING, allowNull:false}
    }
)

module.exports = {
    User, 
    Numbers, 
    Services
}