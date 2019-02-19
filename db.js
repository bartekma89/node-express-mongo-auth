const mongoose = require("mongoose");

const config = require("./config");

const run = async () => {
  try {
    mongoose.connect(
      `mongodb://${config.db.user}:${
        config.db.password
      }@ds149914.mlab.com:49914/auth123`,
      {
        useNewUrlParser: true
      }
    );
    console.log("Connected");
  } catch (e) {
    console.log("Something screw up");
    console.error(e.stack);
  }
};

run();
