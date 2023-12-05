const express = require("express");
const facultyRoutes = express.Router();
const {
  createFacultyValidation,
  updateFacultyValidation,
  viewByIdFacultyValidation,
  deleteFacultyValidation,
  updateFacultyValidationId,
} = require("../schema/createSchema");
const { validate } = require("../middleware/validation");
const { faculty } = require("../controllers/index");

// create faculty Route

facultyRoutes.post(
  "/create",
  validate(createFacultyValidation, "body"),
  faculty.createFaculty
);

// view faculty Route
facultyRoutes.get("/view", faculty.viewFaculty);

// view facultyById Route
facultyRoutes.get(
  "/viewById/:id/",
  validate(viewByIdFacultyValidation, "params"),
  faculty.viewFacultyById
);

// update facultyById Route
facultyRoutes.put(
  "/updateById/:id/",
  validate(updateFacultyValidationId, "params"),
  validate(updateFacultyValidation, "body"),
  faculty.updateFacultyById
);

// delete facultyById Route
facultyRoutes.delete(
  "/deleteById/:id",
  validate(deleteFacultyValidation, "params"),
  faculty.deleteFacultyById
);

module.exports = { facultyRoutes };
