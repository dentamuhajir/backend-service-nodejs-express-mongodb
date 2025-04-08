const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/api.route.js')

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Connected to database! ")
    app.listen(3000, () => {
        console.log('Server is running on port 3000 ')
    })
}).catch((error)=> {
    console.log("Connection is failed! " + error.message)
})