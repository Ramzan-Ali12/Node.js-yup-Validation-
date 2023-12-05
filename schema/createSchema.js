const yup = require("yup");

// create department Schema
const createDepartmentValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
});
// update department validation
const updateDepartmentValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
  // id:yup.string().matches(/^[a-f\d]{24}$/).length(24).typeError("Id must be required").required(),
});
// UPDATE Department validation for ID
const updateDepartmentValidationId = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});
const viewAllDepartmentValidation=yup.object({
  search:yup.string().typeError("search must be required").required(),
});
// viewById validation
const viewByIdDepartmentValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});

// delete department validation
const deleteDepartmentValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});

// create faculty Schema
const createFacultyValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
  subject: yup.string().typeError("subject must be required").required(),
  departmentIds: yup.array().typeError("department must be array").required(),
});
// videById faculty Schema
const viewByIdFacultyValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});

// delete faculty validation
const deleteFacultyValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});
// update faculty validation on params
const updateFacultyValidationId = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});


// update faculty validation on body
const updateFacultyValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
  subject: yup.string().typeError("subject must be required").required(),
  departmentIds: yup.array().typeError("department must be array").required(),
});



// createStudentValidation
const createStudentValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
  age: yup
    .number()
    .typeError("age must be required")
    .positive()
    .integer()
    .required(),
  status: yup.boolean().typeError("Value must be a boolean").required(),
  departmentId: yup
    .string()
    .typeError("departmentId must be required")
    .required(),
});

// createStudentValidation
const updateStudentValidation = yup.object({
  name: yup.string().typeError("Name must be required").required(),
  age: yup
    .number()
    .typeError("age must be required")
    .positive()
    .integer()
    .required(),
  status: yup.boolean().typeError("Value must be a boolean").required(),
  departmentId: yup
    .string()
    .typeError("departmentId must be required")
    .required(),
});

// sortby validation
const viewStudentValidation = yup.object({
  sortOn: yup
    .string()
    .oneOf(["createdAt", "name"])
    .typeError("sortOn must be createdAt or name")
    .required(),
  // validate sortBy and only allow asc or desc
  sortBy: yup
    .string()
    .oneOf(["asc", "desc"])
    .typeError("sortby must be asc or desc")
    .required(),
  // validation on status true or false or both
  // status: yup.array().of(yup.boolean().typeError("Value must be a boolean")).required(),
  search:yup.string().typeError("search must be required").required(),
});

const viewStudentByIdValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});

// update student validation on params
const updateStudentValidationId = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});


//deleteStudentByIdValidation
const deleteStudentByIdValidation = yup.object({
  id: yup
    .string()
    .matches(/^[a-f\d]{24}$/)
    .length(24)
    .typeError("Id must be required")
    .required(),
});

module.exports = {
  // departmentValidation
  createDepartmentValidation,
  viewByIdDepartmentValidation,
  updateDepartmentValidation,
  viewAllDepartmentValidation,
  updateDepartmentValidationId,
  deleteDepartmentValidation,
  // facultyValidation
  createFacultyValidation,
  viewByIdFacultyValidation,
  updateFacultyValidation,
  updateFacultyValidationId,
  deleteFacultyValidation,
  // studentValidation
  createStudentValidation,
  updateStudentValidation,
  updateStudentValidationId,
  viewStudentValidation,
  viewStudentByIdValidation,
  deleteStudentByIdValidation,
};
