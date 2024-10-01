const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, password } = req.body;
  const updates = {};

  if (name) {
    updates.name = name;
  } else if (password) {
    const hashedPassword = await bcrypt(password, 5);
    updates.password = hashedPassword;
  } else if (email) {
    updates.email = email;
  }

  try {
    let updatedUser = await UserModel.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "User not found.",
      });
    }

    res.status(200).json({ status: true, user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, error, message: "Error while updating!" });
  }
};

module.exports = updateUser;
