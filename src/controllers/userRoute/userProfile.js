const UserModel = require("../../models/user.model");

const userProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    let dbUser = await UserModel.findOne({ _id: userId });
    if (!dbUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ data: dbUser });
  } catch (error) {
    res.status(500).json({ message: "Error while fething." });
  }
};

module.exports = userProfile;
