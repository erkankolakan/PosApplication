const User = require("../models/User")
const express = require("express")
const router = express.Router()


router.get("/get-all" , async(req, res) => {

    try {
        const users = await User.find();
        res.status(200).json(users)
    }catch (error) {
        res.status(200).json(error)
    }
})


module.exports = router