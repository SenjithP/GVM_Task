const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.post('/addProduct',productController.addProduct)
productRouter.patch('/editProduct',productController.editProduct)
productRouter.delete('/deleteProduct',productController.deleteProduct)
productRouter.get('/searchProduct',productController.searchProduct)

module.exports = productRouter;