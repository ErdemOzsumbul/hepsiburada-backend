const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: Number,
  },
  provinces: {
    type: Array,
  },
  src: {
    type: String,
  },
  starRating: {
    type: Number,
  },
  ratingCount: {
    type: String,
  },
  sellerPoints: {
    type: Number,
  },
  keywords: {
    type: Array,
  },
  tomorrow: {
    type: Boolean,
  },
});

module.exports = mongoose.model("products", userSchema);
