const express = require("express");
const router = express.Router();

const usersController = require("../controllers/userController");

router.get("/", usersController.getUsers);
router.get("/new", usersController.createUserGet);
router.post("/new", usersController.createUserPost);

module.exports = router;