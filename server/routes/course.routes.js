const express = require("express");
const router = express.Router()
const {getAllCourses , getOneCourse , createCourse , updateCourse , deleteCourse} = require("../controllers/course.controllers");



router.get("/" , getAllCourses);
router.get("/:id" , getOneCourse);
router.post("/" , createCourse);
router.put("/:id" , updateCourse);
router.delete("/:id" , deleteCourse);

module.exports = router;