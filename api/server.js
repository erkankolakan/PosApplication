const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()



//routes
const categoryRoute = require("./routes/categories")
const productsRoute = require("./routes/products")
const billsRoute = require("./routes/bill")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


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
app.use("/api/products" , productsRoute)
app.use("/api/bill" , billsRoute)
app.use("/api/auth" , authRoute)
app.use("/api/users" , userRoute)


const port = 5000
app.listen(port, () => {
    connect()
    console.log(`Server running on port ${port}`)
})