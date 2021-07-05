const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 20 },
  email: { type: String, required: true },
});
const blog = mongoose.model("rest", Schema);
module.exports = blog;
