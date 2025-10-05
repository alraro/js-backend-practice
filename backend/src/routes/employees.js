const express = require("express");
const usersController = require("../controllers/employeesController");
const router = express.Router();

router.get("/", usersController.getAllEmployees);

router.post("/", usersController.createEmployee);

router.get("/:id", usersController.getEmployeeById);

module.exports = router;