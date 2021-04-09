const mongoose = require("mongoose")
const shirtSchema = mongoose.Schema({
name: String,
brand: String,
cost: Number
})
module.exports = mongoose.model("shirt", shirtSchema)