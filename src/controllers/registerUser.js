const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        status: true,
        message: "User already registered.",
      });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    const newUser = await new UserModel({
      name,
      password: hashedPassword,
      email,
    });
    newUser.save();

    res.status(201).json({ status: true, message: "User registered." });
  } catch (error) {
    res
      .status(403)
      .json({ status: 500, error, message: "Error while registering!" });
  }
};

module.exports = registerUser;
