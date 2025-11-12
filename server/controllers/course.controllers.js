const courses = require("../models/course.model");

const getAllCourses = async (req , res) => {
  try {
    const coursesList = await courses.find();
    res.status(200).json(coursesList)
  } catch (error) {
    res.status(500).json({message : error.message})
  }
};

const getOneCourse = async (req , res) => {
  try {
    const course = await courses.findById(req.params.id);
    if (!course) return res.status(404).json({message : "course not found"})
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({message : error.message})
  }
};

const createCourse = async (req , res) => {
  try {
    const newCourse = await courses.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({message : error.message});
  }
};

const updateCourse = async (req , res) => {
  try {
    const updatedCourse = await courses.findByIdAndUpdate(req.params.id , req.body , {new:true , runValidators:true});
    if(!updateCourse) return res.status(404).json({message : "course not found"});
    res.status(201).json(updatedCourse);
  } catch (error) {
    res.status(500).json({message : error.message});
  }
};

const deleteCourse = async (req , res) => {
  try {
    const deletedCourse = await courses.findByIdAndDelete(req.params.id);
    if(!deletedCourse) return res.status(404).json({message : "course not found"});
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}

module.exports = {getAllCourses , getOneCourse , createCourse , updateCourse , deleteCourse}