const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send("Hello from Node API with nodemon")
})

app.post('/api/products', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


mongoose.connect("mongodb+srv://dentamuhajir:7gYr72jCQ1dsxsA3@backenddb.oiomyfk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!")
})
.catch((error)=> {
    console.log("Connection is failed! " + error.message)
})