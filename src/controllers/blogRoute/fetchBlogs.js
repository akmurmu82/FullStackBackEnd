const BlogModel = require("../../models/blog.model");

const fetchAllBlogs = async (req, res) => {
  try {
    let blogs = await BlogModel.find();

    res.status(200).json({ data: blogs });
  } catch (error) {
    res.status(500).json({ message: "Error while fething." });
  }
};

module.exports = fetchAllBlogs;
