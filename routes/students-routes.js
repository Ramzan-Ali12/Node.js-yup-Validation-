const express = require("express");
const studentRoutes = express.Router();
const {
  createStudentValidation,
  updateStudentValidation,
  updateStudentValidationId,
  viewStudentValidation,
  viewStudentByIdValidation,
  deleteStudentByIdValidation,
} = require("../schema/createSchema");
const { validate, parseMiddleWare } = require("../middleware/validation");
const { students } = require("../controllers/index");

// create Student Route

studentRoutes.post(
  "/create",
  validate(createStudentValidation, "body"),
  students.createStudent
);

// viewAll Student Route
studentRoutes.get(
  "/viewAll",
  // parseMiddleWare(["status"]),
  validate(viewStudentValidation),
  students.viewAllStudents
);

// viewStudentById Route
studentRoutes.get(
  "/viewById/:id/",
  validate(viewStudentByIdValidation, "params"),
  students.viewStudentById
);

// updateStudentById Route
studentRoutes.put(
  "/updateById/:id/",
 validate(updateStudentValidationId,"params"), validate(updateStudentValidation, "body"),
  students.updateStudentById
);

//  deleteStudentById Route
studentRoutes.delete(
  "/deleteById/:id",
  validate(deleteStudentByIdValidation, "params"),
  students.deleteStudentById
);

module.exports = { studentRoutes };
