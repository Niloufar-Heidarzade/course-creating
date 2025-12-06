const {Router} = require("express");
const {
  getOneUser,
  getAllUsers,
  deleteUser,
  updateUser,
  registerNewUser
} = require("../controllers/user.controllers");

const router = Router();

router.get("/" , getAllUsers);
router.get("/:id" , getOneUser);
router.put("/:id" , updateUser);
router.delete("/:id" , deleteUser);
router.post("/" , registerNewUser);

module.exports = router;