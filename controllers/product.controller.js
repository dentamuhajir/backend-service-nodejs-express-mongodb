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
        const product = await service.postProduct(request.body)
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
        const id = request.params.productId
        // invalalid ID
        //const id = '507f1f77bcf86cd799439011'

        const product = await Product.findByIdAndDelete(id).then(deletedUser => {
            if (deletedUser) {
                response.status(200).json({ status: "Success", message: "User deleted successfully"})
            } else {
                return next({ status: 404, message: 'Product not found' });
            }
        })
        .catch(error => {
            next(error)
        });
    } catch(error) {
        next(error)
    }
}

const deleteManyProduct = async(request, response, next) => {
    const {ids: productIds} = request.body 
    if(!Array.isArray(productIds)) {
        return next({ status: 500, message: 'Product Ids should be an array' });
    }

    for(const id of productIds) {
        console.log("id = ", id)
    }
    
    console.log(productIds)
    return 
}

module.exports = {
    getProduct,
    postProduct,
    deleteProduct,
    getDetailProduct,
    updateProduct,
    deleteManyProduct
}
