const jwt = require("jsonwebtoken");
const BlogModel = require("../models/blog.model");

const canUpdateBlog = async (req, res, next) => {
  const { blogId } = req.params;
  const { userId } = req.body;

  try {
    const blog = await BlogModel.findOne({ _id: blogId });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    if (blog.userId.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorised!" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error, message: "Server error" });
  }
};

module.exports = canUpdateBlog;
