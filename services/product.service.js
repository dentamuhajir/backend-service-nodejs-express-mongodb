const Product = require('../models/product.model.js')
const getProducts  = async() => {    
    return await Product.find({})
}

const getDetailProduct = async(id) => {
    return await Product.findById(id)    
}

module.exports = {
    getProducts,
    getDetailProduct
}
