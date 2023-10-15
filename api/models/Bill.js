const mongoose = require("mongoose")

const BillSchema = new mongoose.Schema({
    costomerName: {
        type: String,
        require:true
    },
    costomerPhoneNumber: {
        type: String,
        require:true
    },
    paymentMode: {
        type: String,
        require:true
    },
    cartItems: {
        type: Array,
        require:true
    },
    subTotal: {
        type: Number,
        require:true
    },
    tax: {
        type: Number,
        require:true
    },
    totalAmount: {
        type: Number,
        require:true
    },
},{timestamps:true} //-> oluşturduğu zamanı otomatik not alır
)

const Bill = mongoose.model("bills", BillSchema )

module.exports = Bill;