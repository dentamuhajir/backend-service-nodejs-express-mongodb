const mongoose = require('mongoose')
const Product = require('../models/product.model.js');
const service = require('../services/product.service.js');

const getProduct = async(request, response, next) => {
    try { 
        const product = await service.getProducts() 
        response.status(200).json(product)  
    } catch(error) {
        next(error)
    }
}

const getDetailProduct = async(request, response, next) => {
    try {
        const id = request.params.productId
        const product = await service.getDetailProduct(id)
        if(!product) {
            return next({ status: 404, message: 'Product not found' });
        }
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

const updateProduct = async(request, response, next) => {
    try {
        const id = request.params.productId
        const product = await service.updateProduct(id, request.body)
        response.status(200).json({ status: "Success", message: 'Product updated'})
    } catch(error) {
        next(error)
    }
}

const deleteProduct = async(request, response, next) => {
    try {
        // how to get params
        //const id = request.params.productId
        //const id = '67ee633fd08176ae9b842ae0'
        // invalid ID
        const id = '507f1f77bcf86cd799439011'

        const product = await Product.findById(id).exec()

        if(!product) {
            return next({ status: 404, message: 'Product not found' });
        }

    } catch(error) {
        next(error)
    }
}

module.exports = {
    getProduct,
    postProduct,
    deleteProduct,
    getDetailProduct,
    updateProduct
}
