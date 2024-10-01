const bcrypt = require("bcrypt");
const blogModel = require("../../models/blog.model");

const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  const { title, content } = req.body;
  const updates = {};

  if (title) {
    updates.title = title;
  } else if (content) {
    updates.content = content;
  }

  try {
    let updatedBlog = await blogModel.findByIdAndUpdate(blogId, updates, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).json({
        status: false,
        message: "User not found.",
      });
    }

    res.status(200).json({ status: true, blog: updatedBlog });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, error, message: "Error while updating!" });
  }
};

module.exports = updateBlog;
