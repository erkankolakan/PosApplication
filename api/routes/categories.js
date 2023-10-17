const Category = require("../models/Category")
const express = require("express")
const router = express.Router()



router.get("/get-all", async (req , res) => {
    try {
        const categories = await Category.find()
        res.send(categories)
        // res.status(200).json(categories)
    } catch (error) {
        console.log(error);
    }
})


router.post("/add-category" , async (req, res) => {
    try {
        await Category.create(req.body)
        res.status(200).json("Item added successfully")

    } catch (error) {
        console.log(error);
        res.status(400).json("error")
    }
} )

router.put("/update-category", async (req , res) => {
    try {
        await Category.findOneAndUpdate({ _id: req.body._id} , req.body )
        res.status(200).json("Item updated successfully");

    } catch (error) {
        // res.status(500).json({ error: "Error updating category" });
        console.log(error);
    }
})


router.delete("/delete-category", async (req , res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body.categoryId})
        res.status(200).json("Item deleted successfully");
    } catch (error) {
        // res.status(500).json({ error: "Error updating category" });
        console.log(error);
    }
})



module.exports = router