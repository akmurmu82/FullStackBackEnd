const express = require("express");
const fetchAllBlogs = require("../controllers/blogRoute/fetchBlogs");
const createBlog = require("../controllers/blogRoute/createBlog");
const updateBlog = require("../controllers/blogRoute/updateBlog");
const deleteBlog = require("../controllers/blogRoute/deleteBlog");

const blogRouter = express.Router();

blogRouter.get("/", fetchAllBlogs);
blogRouter.post("/create", createBlog);
blogRouter.patch("/update/:blogId", updateBlog);
blogRouter.delete("/delete/:blogId", deleteBlog);

module.exports = blogRouter;
