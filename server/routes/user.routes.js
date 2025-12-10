const {Router} = require("express");
const {
  getOneUser,
  getAllUsers,
  deleteUser,
  updateUser,
  registerNewUser,
  verifyUserEmail,
  loginUser
} = require("../controllers/user.controllers");

const router = Router();

router.get("/" , getAllUsers);
router.get("/:id" , getOneUser);
router.put("/:id" , updateUser);
router.delete("/:id" , deleteUser);
router.post("/" , registerNewUser);
router.get("/verify/:id/:token" , verifyUserEmail);
router.post("/login" , loginUser);

module.exports = router;