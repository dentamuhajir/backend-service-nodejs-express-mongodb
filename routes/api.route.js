const express = require('express')
const productController = require('../controllers/product.controller.js')
const productRouter = new express.Router();

productRouter.get('/api/products', productController.getProduct)

module.exports = productRouter 