const express = require('express')
const productController = require('../controllers/product.controller.js')
const productRouter = new express.Router();

productRouter.get('/api/products', productController.getProduct)
productRouter.post('/api/products', productController.postProduct)

module.exports = productRouter 