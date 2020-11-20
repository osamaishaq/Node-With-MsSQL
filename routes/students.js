const express = require("express");

const studentsController = require("../controllers/students");

const router = express.Router();

router.get("/", studentsController.getAllStudents);

router.post("/create", studentsController.createStudent);

router.post("/delete", studentsController.deleteStudent);

module.exports = router;
