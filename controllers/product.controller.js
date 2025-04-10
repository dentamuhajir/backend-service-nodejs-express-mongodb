const mongoose = require('mongoose')
const Product = require('../models/product.model.js');

const getProduct = async(request, response, next) => {
    try { 
        const product = await Product.find({})
        response.status(200).json(product)  
    } catch(error) {
        next(error)
    }
}

const postProduct = async(request, response, next) => {
    try {
        const product = await Product.create(request.body)
        response.status(200).json(product)
    } catch(error) {
         next(error)
    }
}

module.exports = {
    getProduct,
    postProduct
}
