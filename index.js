const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()
 
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send("Hello from Node API with nodemon")
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        req.status(200).json(product) 
    } catch(error) {
        req.status(500).json({ message: error.message})
    }
})


mongoose.connect("mongodb+srv://dentamuhajir:7gYr72jCQ1dsxsA3@backenddb.oiomyfk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!")
})
.catch((error)=> {
    console.log("Connection is failed! " + error.message)
})