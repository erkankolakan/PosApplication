const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
const port = 5000


//routes
const categoryRoute = require("./routes/categories")


dotenv.config() //env dosyasıne erişmemizi sağlar

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    } catch (error) {
        throw error
    }
}

//middlewares
app.use(express.json());
// app.use(cors()) //-> normalde bu paketi depolarken hata almamak için kullanırız ama express.json() gelen veriyi json a çevirdiği için buna gerek yoktur. Sadece gelen veriyi json a çevirmen yeterli.
app.use("/api/categories" , categoryRoute)



app.listen(port, () => {
    connect()
    console.log(`Server running on port ${port}`)
})