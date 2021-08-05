const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    id_Category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
    },
    registration_data: {
        type: Date,
        default: Date.now,
    }
})

module.exports = expense = mongoose.model("expense", ExpenseSchema)