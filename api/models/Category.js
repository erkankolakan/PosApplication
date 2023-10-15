const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
},{timestamps:true} //-> oluşturduğu zamanı otomatik not alır
)

const Category = mongoose.model("category", CategorySchema )

module.exports = Category;