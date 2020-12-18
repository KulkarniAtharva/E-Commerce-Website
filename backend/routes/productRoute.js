import express from 'express';
import Product from '../models/productModel';
import { isAuth,isAdmin } from '../util';
const router = express.Router();

router.get("/",async (req,res)=>{
    const products = await Product.find({});
    res.send(products);
});

router.post("/",async (req,res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        image: req.body.image,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        numReviews: req.body.numReviews,
        rating: req.body.rating,

    });
    const newProduct = await product.save();
    if(newProduct)
    {
        return res.status(201).send({message: 'New Product Created',data:newProduct});
    }
    return res.status(500).send({message: 'Error in Creating Product'});
})




  export default router;