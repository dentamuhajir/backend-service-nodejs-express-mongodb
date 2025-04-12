const express = require('express')
const productController = require('../controllers/product.controller.js')
const productRouter = new express.Router();

productRouter.get('/api/products', productController.getProduct)
productRouter.post('/api/products', productController.postProduct)
productRouter.delete('/api/products/:productId', productController.deleteProduct)
productRouter.get('/api/products/:productId', productController.getDetailProduct)
productRouter.put('/api/products/update/:productId', productController.updateProduct)

module.exports = productRouter 
