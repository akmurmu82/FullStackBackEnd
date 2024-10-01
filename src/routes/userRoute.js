const express = require("express");
const registerUser = require("../controllers/userRoute/registerUser");
const userProfile = require("../controllers/userRoute/userProfile");
const updateUser = require("../controllers/userRoute/updateUser");

const userRouter = express.Router();

userRouter.get("/:userId", userProfile);
userRouter.post("/register", registerUser);
userRouter.patch("/update/:userId", updateUser);

module.exports = userRouter;
