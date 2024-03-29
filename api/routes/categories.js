const Category = require("../models/Category")
const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")



router.get("/get-all", async (req , res) => {
    try {
        const categories = await Category.find()
        res.send(categories)
        // res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post("/add-category"  ,async (req, res) => {
    try {
        await Category.create(req.body)
        res.status(200).json("Item added successfully")

    } catch (error) {
        res.status(500).json(error)
        res.status(400).json("error")
    }
} )

router.put("/update-category", async (req , res) => {
    try {
        const updateCate = await Category.findOneAndUpdate({ _id: req.body.categoryId} , req.body )
        if (!updateCate) {
            res.status(400).json("Item updated not successfully");
        }
        res.status(200).json("Item updated successfully");
    } catch (error) {
        // res.status(500).json({ error: "Error updating category" });
        res.status(500).json(error)
    }
})


router.delete("/delete-category", async (req , res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body.categoryId})
        res.status(200).json("Item deleted successfully");
    } catch (error) {
        // res.status(500).json({ error: "Error updating category" });
        res.status(500).json(error)
    }
})



module.exports = router