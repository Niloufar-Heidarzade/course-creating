const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req , res , next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({error : "Access denied!"});
    const secretKey = process.env.SECRET_KEY;
    const decode = jwt.verify(token , secretKey);
    req.userId = decode.userId;
    next();
  } catch (error) {
    res.status(500).json({error : "Invalid Token!"});
  }
};

module.exports = verifyToken;