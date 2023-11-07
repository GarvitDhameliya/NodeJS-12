const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: "string",
    require: true,
  },
  lastname: {
    type: "string",
    require: true,
  },
  email: {
    type: "string",
    require: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
