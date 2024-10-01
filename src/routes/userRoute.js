const express = require("express");
const registerUser = require("../controllers/registerUser");
const userProfile = require("../controllers/userProfile");
const updateUser = require("../controllers/updateUser");

const userRouter = express.Router();

userRouter.get("/:userId", userProfile);
userRouter.post("/register", registerUser);
userRouter.patch("/update/:userId", updateUser);

module.exports = userRouter;
