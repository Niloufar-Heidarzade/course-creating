const {Router} = require("express");
const {
  getOneUser,
  getAllUsers,
  deleteUser,
  updateUser,
  registerNewUser,
  verifyUserEmail,
  loginUser,
  getAllCoursesOfOneUser
} = require("../controllers/user.controllers");
const verifyToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/" , getAllUsers);
router.get("/:id" , getOneUser);
router.put("/:id" , updateUser);
router.delete("/:id" , deleteUser);
router.post("/" , registerNewUser);
router.get("/verify/:id/:token" , verifyUserEmail);
router.post("/login" , loginUser);
router.get("/courses" , verifyToken , getAllCoursesOfOneUser);

module.exports = router;