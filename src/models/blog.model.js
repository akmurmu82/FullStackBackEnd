const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    createdOn: { type: Date, required: true, unique: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Types.userId, required: true },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const blogModel = mongoose.model("user", blogSchema);

module.exports = blogModel;
