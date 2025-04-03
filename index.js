const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');

const app = express()
 app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from Node API with nodemon")
})

app.get('/api/products', async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product) 
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product) 
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
})


mongoose.connect("mongodb+srv://dentamuhajir:eW95wn1yPBfD6oPS@backenddb.oiomyfk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB&ssl=true")
.then(() => {
    console.log("Connected to database! ")
    app.listen(3000, () => {
        console.log('Server is running on port 3000 ')
    })
})
.catch((error)=> {
    console.log("Connection is failed! " + error.message)
})