const mongoose = require("mongoose")
const shirtSchema = mongoose.Schema({
name: String,
cost: Number,
brand: String
})
module.exports = mongoose.model("Shirt", shirtSchema)