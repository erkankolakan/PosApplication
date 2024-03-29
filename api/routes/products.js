const Product = require("../models/Product")
const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")


router.get("/get-all" , async(req, res) => {

    try {
        const products = await Product.find();
        res.send(products)
    }catch (error) {
        res.status(500).json(error)
    }
})


router.post("/add-product" , async(req, res) => {
    try {
        await Product.create(req.body)
        res.status(200).json("başarı bir şekilde product oluşturuldu")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/update-product", async(req , res) =>{
    try {
        await Product.findOneAndUpdate({_id:req.body.productId}, req.body);
        res.status(200).json("ürün güncellendi")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/delete-product", async(req , res) =>{
    try {
        await Product.findOneAndDelete({_id: req.body.productId});
        res.status(200).json("ürün silindi")
    } catch (error) {
        res.status(500).json(error)
    }
})
 


module.exports = router