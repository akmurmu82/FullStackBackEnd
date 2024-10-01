const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const canUpdateUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user._id.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorised!" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error, message: "Server error" });
  }
};

module.exports = canUpdateUser;
