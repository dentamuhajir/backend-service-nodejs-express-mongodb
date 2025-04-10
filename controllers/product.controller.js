const mongoose = require('mongoose')
const Product = require('../models/product.model.js');

const getProduct = async(request, response, next) => {
    try { 
        const product = await Product.findd({})
        response.status(200).json(product)  
    } catch(error) {
        console.log("error code" + error)
        return
        //request.status(500).json({ message: error.message})
        //next(error)
    }
}

const postProduct = async(request, response, next) => {
    try {
        const product = await Product.create(request.body)
        response.status(200).json(product)
    } catch(error) {
        console.log("error code" + error)
        return
        //next(error)
    }
}

module.exports = {
    getProduct,
    postProduct
}