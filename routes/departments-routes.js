const express = require("express");
const {validate} = require("../middleware/validation");
const {
  createDepartmentValidation,
  updateDepartmentValidation,
  updateDepartmentValidationId,
  viewAllDepartmentValidation,
  deleteDepartmentValidation,
  viewByIdDepartmentValidation,
} = require("../schema/createSchema");
const { departments } = require("../controllers/index");
const departmentRoutes = express.Router();

// create department Route
departmentRoutes.post(
  "/create",
  validate(createDepartmentValidation, "body"),
  departments.createDepartment
);

// view department Route
departmentRoutes.get("/view",validate(viewAllDepartmentValidation,"params") ,departments.viewAllDepartments);

// vewById department Route
departmentRoutes.get(
  "/viewById/:id/",
  validate(viewByIdDepartmentValidation, "params"),
  departments.viewByIdDepartment
);

// UpdateByIdDepartment Route
departmentRoutes.put(
  "/updateById/:id/",
  validate(updateDepartmentValidationId, "params"),
  validate(updateDepartmentValidation, "body"),
  departments.updateByIdDepartment
);

// DeleteByID department Route
departmentRoutes.delete(
  "/deleteById/:id/",
  validate(deleteDepartmentValidation, "params"),
  departments.deleteByIdDepartment
);

module.exports = { departmentRoutes };
