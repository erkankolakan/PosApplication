const Product = require("../models/Product")
const express = require("express")
const router = express.Router()


router.get("/get-all" , async(req, res) => {

    try {
        const products = await Product.find();
        res.send(products)
    }catch (error) {
        console.log(error);
    }
})


router.post("/add-product" ,  async(req, res) => {
    try {
        const newProduct = await new Product(req.body)
        await newProduct.save()
        res.status(200).json("başarı bir şekilde product oluşturuldu")
    } catch (error) {
        console.log(error);
    }
})

router.put("/update-product", async(req , res) =>{
    try {
        await Product.findOneAndUpdate({_id:req.body.productId}, {
            title: req.body.title,
            img: req.body.img,
            price: req.body.price,
            category: req.body.category,
        });
        res.status(200).json("ürün güncellendi")
    } catch (error) {
        console.log(error);
    }
})

router.delete("/delete-product", async(req , res) =>{
    try {
        await Product.findOneAndDelete({_id: req.body.productId});
        res.status(200).json("ürün silindi")
    } catch (error) {
        console.log(error);
    }
})
 


module.exports = router