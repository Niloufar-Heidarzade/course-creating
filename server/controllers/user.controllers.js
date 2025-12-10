const users = require("../models/user.model");
const courses = require("../models/course.model");
const verifyEmails = require("../models/verifyEmail.model");
require("dotenv").config();
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const result = await users.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const result = await users.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "user not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await users.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "user not found" });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "user not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const registerNewUser = async (req, res) => {
  try {
    const { password, ...restOfUserData } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await users.create({
      hashedPass,
      ...restOfUserData,
    });

    const token = crypto.randomBytes(32).toString("hex");
    const newVerifyToken = await verifyEmails.create({
      userId: newUser.id,
      token: token,
    });

    const emailText = `your email verification address is: ${process.env.BASE_URL}:${process.env.PORT}/user/verify/${newUser.id}/${token}`;
    await sendEmail(newUser.email, "Verify Email", emailText);

    res.status(201).json({
      message: "you've been registered successfully , please verify your email",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const verifyUserEmail = async (req, res) => {
  try {
    const { id, token } = req.params;
    const user = users.findById(id);
    const verifyToken = verifyEmails.findOne({ userId: id });

    if (!user || !verifyToken) {
      return res.status(400).json({ error: "Invalid Link" });
    }
    if (verifyToken.token !== token) {
      return res.status(400).json({ error: "Invalid Link" });
    }

    user.verified = true;
    await user.save();
    await verifyToken.deleteOne();

    res
      .status(200)
      .send(
        "<h1 style='text-align: center;color: rgb(4, 202, 53);'>Email verified successfully</h1>"
      );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email: email });
    if (!user) return res.status(401).json({ error: "email doesn't exist!" });
    if (!user.verified)
      return res.status(401).json({ error: "email is not verified!" });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ error: "Authentication failed!" });
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "30m",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllCoursesOfOneUser = async (req, res) => {
  try {
    const id = req.userId;
    const result = await courses
      .find({ authorId: id })
      .populate("authorId")
      .exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error});
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  registerNewUser,
  verifyUserEmail,
  loginUser,
  getAllCoursesOfOneUser
};
