const bcrypt = require("bcrypt");
const blogModel = require("../../models/blog.model");

const deleteBlog = async (req, res) => {
  const { blogId } = req.params;

  try {
    let blogToBeDeleted = await blogModel.findByIdAndDelete(blogId);
    if (!blogToBeDeleted) {
      return res.status(404).json({
        status: false,
        message: "User not found.",
      });
    }

    res.status(204).json({ message: "Blog deleted!" });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, error, message: "Error while updating!" });
  }
};

module.exports = deleteBlog;
