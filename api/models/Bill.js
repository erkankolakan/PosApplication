const mongoose = require("mongoose")

const BillSchema = new mongoose.Schema({
    costomerName: {
        type: String,
        required: true,
    },
    costomerPhoneNumber: {
        type: String,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    cartItems: {
        type: Array,
        required: true,
    },
    subTotal: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
},{timestamps:true} //-> oluşturduğu zamanı otomatik not alır
)

const Bill = mongoose.model("bills", BillSchema )

module.exports = Bill;