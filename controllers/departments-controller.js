const Status = require("../config/constant");
const { departments } = require("../models/departments-model");
// createDepartment

const createDepartment = async (req, res) => {
  try {
    const name = req.body;
    const departmentCreated = await departments.create(name);
    // console.log(departmentCreated);
    return res.status(Status.SUCCESS.CREATED).send({
      msg: "department created!",
      department: departmentCreated,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(Status.ERROR.UNAUTHORIZE).send({
        msg: "Duplicate key error. Document already exists!",
      });
    } else {
      console.log(error);
      res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
        msg: "Internal Server error!",
      });
    }
  }
};

// viewAllDepartmentS
const viewAllDepartments = async (req, res) => {
  try {
    // find the data from db
    const { search } = req.query;
    const query = {
      // use reset operator to search the specific record
      // ...(search && { name: search }),
      // add i fro case insensitive Search
      name: { $regex: search, $options: "i" },
    };
    const getAllDepartments = await departments.find(query);
    // check if data not found in db
    if (!getAllDepartments) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "departments not found!",
      });
    }
    return res.status(Status.SUCCESS.CREATED).send({
      msg: "departments found!",
      department: getAllDepartments,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// viewById Department
const viewByIdDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    // find the data from db
    const getDepartmentById = await departments.findById(id);
    // console.log(department);
    // check if data not found in db
    if (!getDepartmentById) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "department not found!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "department found!",
      department: getDepartmentById,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// updateDepartment
const updateByIdDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body;
    // find the data from db
    const updatedDepartment = await departments.findByIdAndUpdate(id, name, {
      new: true,
    });
    // console.log(department);
    // check if data not found in db
    if (!updatedDepartment) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "department not Updated!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "department Updated!",
      department: updatedDepartment,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(Status.ERROR.UNAUTHORIZE).send({
        msg: "Duplicate key error. Document already exists!",
      });
    } else {
      console.log(error);
      res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
        msg: "Internal Server error!",
      });
    }
  }
};

// delete departmentByID
const deleteByIdDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    // find the data from db
    const deleteDepartment = await departments.findByIdAndDelete(id);
    // console.log(department);
    // check if data not found in db
    if (!deleteDepartment) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "department not deleted Invalid id!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "department deleted!",
      department: deleteDepartment,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

module.exports = {
  createDepartment,
  viewAllDepartments,
  viewByIdDepartment,
  updateByIdDepartment,
  deleteByIdDepartment,
};
