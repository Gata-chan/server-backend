require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index.js')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

/* app.get('/', (req, res) => {
    res.status(200).json({message:'WORKING BLYA!!!!'})
}) */



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server Started on port ${process.env.DB_PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()

