const User = require("../models/User")
const router = require("express").Router()
const bcrypt = require('bcrypt');

//register
router.post("/register", async(req, res) => {
    try {
        const {username,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(200).json("A new user created successfully")
    } catch (error) {
        console.log(error);
    }
})

//login
router.post("/register", async(req, res) => {
    try {
        await User.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(200).json("A new user created successfully")
    } catch (error) {
        console.log(error);
    }
})





module.exports = router