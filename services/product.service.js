const Product = require('../models/product.model.js')
const getProducts  = async() => {    
    return await Product.find({})
} 

module.exports = {
    getProducts
}
