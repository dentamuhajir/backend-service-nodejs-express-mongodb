const mongoose = require('mongoose')
const Product = require('../models/product.model.js');

const getProduct = (req, res, next ) => {
    try {
        res.send("Hello from Node API with nodemon")   
    } catch(e) {
        next(e)
    }
}

module.exports = {
    getProduct
}