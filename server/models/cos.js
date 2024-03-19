const mongoose = require("mongoose");

const COPOSchema = new mongoose.Schema({
  sno: String,
  cos: String,
});

const COPOModel = mongoose.model("cos", COPOSchema);

module.exports = COPOModel;
