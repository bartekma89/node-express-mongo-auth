const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

userSchema.pre("save", async function(next) {
  try {
    const user = this;

    const genSalt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, genSalt);
    user.password = hash;

    return next();
  } catch (e) {
    return next(e);
  }
});

const UserClass = mongoose.model("user", userSchema);

module.exports = UserClass;
