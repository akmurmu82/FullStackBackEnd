const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders.split(" ")[1];
  if (!token) {
    res.status(403).json({ message: "Missing token!" });
  }
  next();
};

module.exports = auth;
