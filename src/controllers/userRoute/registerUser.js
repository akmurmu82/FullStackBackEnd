const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");

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
    const newUser = await new UserModel({
      name,
      password: hashedPassword,
      email,
    });
    newUser.save();

    res.status(201).json({ message: "User registered.", data: newUser });
  } catch (error) {
    res.status(500).json({ error, message: "Error while registering!" });
  }
};

module.exports = registerUser;
