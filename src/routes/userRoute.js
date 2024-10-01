const express = require("express");
const registerUser = require("../controllers/userRoute/registerUser");
const userProfile = require("../controllers/userRoute/userProfile");
const updateUser = require("../controllers/userRoute/updateUser");
const loginUser = require("../controllers/userRoute/loginUser");
const auth = require("../middleware/auth");
const varifyUser = require("../middleware/canUpdateBlog");
const canUpdateUser = require("../middleware/canUpdateUser");

const userRouter = express.Router();

userRouter.get("/:userId", auth, userProfile);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.patch("/update/:userId", auth, canUpdateUser, updateUser);

module.exports = userRouter;
