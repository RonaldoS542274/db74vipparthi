const mongoose = require("mongoose")
const shirtSchema = mongoose.Schema({
name: String,
brand: {
       type: String,
       minLength: 3,
       },
cost: {
    type:Number,
    min:10,
    max:100
}
})
module.exports = mongoose.model("shirt", shirtSchema)