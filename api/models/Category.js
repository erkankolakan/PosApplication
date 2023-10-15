const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    }
},{timestamps:true} //-> oluşturduğu zamanı otomatik not alır
)

const Category = mongoose.model("category", CategorySchema )

module.exports = Category;