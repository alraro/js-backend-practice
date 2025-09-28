const express = require("express");
const usersController = require("../controllers/userController");
const router = express.Router();

router.get("/", usersController.getAllUsers);

router.post("/", usersController.createUser);

router.get("/:id", usersController.getUserById);

module.exports = router;