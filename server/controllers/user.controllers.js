const users = require("../models/user.model");

const getAllUsers = async (req , res) => {
  try {
    const result = await users.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message : error})
  }
};

const getOneUser = async (req , res) => {
  try {
    const result = await users.findById(req.params.id);
    if(!result) return res.status(404).json({message : "user not found"});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message : error})
  }
};

const deleteUser = async (req , res) => {
  try {
    const deletedUser = await users.findByIdAndDelete(req.params.id);
    if(!deletedUser) return res.status(404).json({message : "user not found"});
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({message : error});
  }
};

const updateUser = async (req , res) => {
  try {
    const updatedUser = await users.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true}
    );
    if(!updatedUser) return res.status(404).json({message : "user not found"});
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({message : error});
  }
};

module.exports = {getAllUsers , getOneUser , deleteUser , updateUser};