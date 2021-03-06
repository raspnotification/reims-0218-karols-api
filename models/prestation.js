const mongoose = require("mongoose")

const PreparationSchema = mongoose.Schema({
  id: Number,
  selected: Boolean,
  count: Number,
  image: String,
  info: String,
  titlePreparation: String,
  type: String
})

const PrestationSchema = mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  description: String,
  gender: String,
  preparations: [PreparationSchema]
})

module.exports = mongoose.model("prestation", PrestationSchema)
