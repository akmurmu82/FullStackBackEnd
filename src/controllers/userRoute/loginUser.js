const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user.model");
require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let dbUser = await UserModel.findOne({ email });

    if (!dbUser) {
      return res.status(404).json({
        message: "User not registered.",
      });
    }

    const isMatch = await bcrypt.compare(password, dbUser.password);

    if (!isMatch) {
      return res.status(409).json({
        message: "Incorrect password!",
      });
    }

    // Generating Token
    const token = jwt.sign({ userId: dbUser._id }, jwtSecretKey);

    res.status(200).json({ token, data: dbUser });
  } catch (error) {
    res.status(500).json({ error, message: "Error while loggin in!" });
  }
};

module.exports = loginUser;
