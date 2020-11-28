import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//@description Fetch all products
//@route Get / api/products
//@acces Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//@description Fetch single products
//@route Get / api/products/:id 
//@acces Public

const getProductByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)


    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})

export { getProducts, getProductByID }