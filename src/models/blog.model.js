const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    // createdOn: { type: Date, required: true, unique: true },
    content: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel;
