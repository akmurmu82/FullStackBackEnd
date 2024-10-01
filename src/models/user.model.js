const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
  // use .toLocalString() to use in frontend
);

const UserModel = mongoose.model("blogify-users", userSchema);

module.exports = UserModel;
