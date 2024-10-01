const express = require("express");
const fetchAllBlogs = require("../controllers/blogRoute/fetchBlogs");
const createBlog = require("../controllers/blogRoute/createBlog");
const updateBlog = require("../controllers/blogRoute/updateBlog");
const deleteBlog = require("../controllers/blogRoute/deleteBlog");
const auth = require("../middleware/auth");
const userBlogs = require("../controllers/blogRoute/userBlog");
const canUpdateBlog = require("../middleware/canUpdateBlog");

const blogRouter = express.Router();

blogRouter.get("/", fetchAllBlogs);
blogRouter.get("/:userId", auth, userBlogs);
blogRouter.post("/create", auth, createBlog);
blogRouter.patch("/update/:blogId", auth, canUpdateBlog, updateBlog);
blogRouter.delete("/delete/:blogId", auth, canUpdateBlog, deleteBlog);

module.exports = blogRouter;
