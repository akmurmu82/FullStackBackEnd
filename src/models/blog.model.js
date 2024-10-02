const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    image: { type: String },
    author: { type: String, required: true },
    title: { type: String, required: true },
    tag: { type: String, required: true, default: "General" },
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
