const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    createNewUser,
    checkUser,
    deleteUser,
} = require("../controllers/user-controllers");

router.get("/allUsers", getAllUsers);
router.post("/createUser", createNewUser);
router.post("/checkUser", checkUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;