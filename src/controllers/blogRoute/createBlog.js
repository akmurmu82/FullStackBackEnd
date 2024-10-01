const bcrypt = require("bcrypt");
const blogModel = require("../../models/blog.model");

const createBlog = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    let existingBlog = await blogModel.findOne({ title });
    if (existingBlog) {
      return res.status(403).json({
        message: "Blog already exists.",
      });
    }

    const newBlog = await new blogModel({
      title,
      content,
      userId,
    });
    newBlog.save();

    res.status(201).json({ message: "Blog created.", data: newBlog });
  } catch (error) {
    res.status(500).json({ error, message: "Error while creating blog!" });
  }
};

module.exports = createBlog;
