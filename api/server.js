const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const port = 5000


dotenv.config() //env dosyasıne erişmemizi sağlar

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    } catch (error) {
        throw error
    }
}


app.listen(port, () => {
    connect()
    console.log(`Server running on port ${port}`)
})
