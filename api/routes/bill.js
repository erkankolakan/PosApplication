const Bill = require("../models/Bill")
const express = require("express")
const router = express.Router()


router.get("/get-all" , async(req, res) => {

    try {
        const bills = await Bill.find();
        res.send(bills)
    }catch (error) {
        console.log(error);
    }
})


router.post("/add-bill" ,  async(req, res) => {
    try {
        await Bill.create(req.body)
        res.status(200).json("başarı bir şekilde bill oluşturuldu")
    } catch (error) {
        console.log(error);
    }
})


module.exports = router