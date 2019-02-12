const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    tyle: String,
    unique: true,
    lowercase: true
  },
  password: String
});

const User = mongoose.model("Usr", userSchema);

module.exports = User;
