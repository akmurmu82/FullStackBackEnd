const BlogModel = require("../../models/blog.model");

const userBlogs = async (req, res) => {
  const { userId } = req.params;
  try {
    let blogs = await BlogModel.find({ userId });

    res.status(200).json({ data: blogs });
  } catch (error) {
    res.status(500).json({ message: "Error while fething." });
  }
};

module.exports = userBlogs;
