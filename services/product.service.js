const Product = require('../models/product.model.js')

const postProduct = async(requestBody) => {
    return await Product.post(requestBody)
}

const getProducts  = async() => {    
    return await Product.find({})
}

const getDetailProduct = async(id) => {
    return await Product.findById(id)    
}

const updateProduct = async(id, data) => {
    return await Product.findByIdAndUpdate(id, data)
}

module.exports = {
    getProducts,
    getDetailProduct,
    updateProduct,
    postProduct,
}
