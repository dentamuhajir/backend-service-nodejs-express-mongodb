const mongoose = require('mongoose')
const Product = require('../models/product.model.js');
const service = require('../services/product.service.js')

const getProduct = async(request, response, next) => {
    try { 
        const product = await service.getProducts() 
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
    postProduct,
}
