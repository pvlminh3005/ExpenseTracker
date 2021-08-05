const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    icon: {
        type: Number,
        required: true,
    },
    expenses: [Schema.Types.Mixed],
    registration_data: {
        type: Date,
        default: Date.now,
    }
})

module.exports = category = mongoose.model("category", CategorySchema)