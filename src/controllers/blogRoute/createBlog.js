const blogModel = require("../../models/blog.model");

const createBlog = async (req, res) => {
  const { title, content, userId, author, image, tag } = req.body;

  try {
    // Check if a blog with the same title already exists
    let existingBlog = await blogModel.findOne({ title });

    if (existingBlog) {
      console.log(existingBlog);
      return res.status(403).json({
        message: "Blog with this title already exists.",
      });
    }

    // Create and save the new blog
    const newBlog = new blogModel({
      title,
      userId,
      author,
      image,
      content,
      tag,
    });

    await newBlog.save(); // Ensure the save operation is awaited

    return res
      .status(201)
      .json({ message: "Blog created successfully.", data: newBlog });
  } catch (error) {
    console.error("Error while creating blog:", error);
    return res
      .status(500)
      .json({ message: "Error while creating blog!", error });
  }
};

module.exports = createBlog;
