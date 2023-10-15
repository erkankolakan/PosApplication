const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, //-> toplama çıkarma yapmayacağımız için değeri number olarak almamıza gerek yok.
        required: true,
    }
},{timestamps:true} //-> oluşturduğu zamanı otomatik not alır
)

const User = mongoose.model("users", UserSchema )

module.exports = User;