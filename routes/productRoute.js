const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')
const { checkAutentication } = require('../controllers/protectedController')

productRouter.post('/addProduct',productController.addProduct)
productRouter.patch('/editProduct',productController.editProduct)
productRouter.delete('/deleteProduct',productController.deleteProduct)
productRouter.get('/searchProduct',checkAutentication,productController.searchProduct)

module.exports = productRouter;