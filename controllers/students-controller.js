const { students } = require("../models/students-model");
const Status = require("../config/constant");
// createStudent
const createStudent = async (req, res) => {
  try {
    const { name, age, status, departmentId } = req.body;
    // console.log(req.body);
    const studentCreated = await students.create({
      name,
      age,
      status,
      departmentId,
    });
    // console.log(studentCreated);
    return res.status(Status.SUCCESS.CREATED).send({
      msg: "Student created!",
      student: studentCreated,
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

// viewAllStudents
const viewAllStudents = async (req, res) => {
  try {
    // find the data from db
    const { sortOn, sortBy, status, search } = req.query;
    // console.log(sortOn, sortBy, status);
    console.log(search);
    const query = {
      // use reset operator to search the specific record
      ...(search && { name: search }),
      // add i fro case insensitive Search
      name: { $regex: search, $options: "i" },
      status: { $in: status },
    };
    console.log(query.name)
    // console.log(query);
    // 1. find and then sort the students in asc or desc order on the basis of createdAt or name
    // filter the students based on the status true or false or both
    const viewStudents = await students
      .find(query)
      .sort({ [sortOn]: sortBy === "asc" ? 1 : -1 })
      // sort from Uppercase to Lower Case
      .collation({ locale: "en" })
      .populate("departmentId");

    // console.log(viewStudents)
    // check if data not found in db
    if (!viewStudents) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "Students not found!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "Students found!",
      students: viewStudents,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// viewById student
const viewStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ msg: "Id is required" });
    }
    console.log(id);
    // find the data from db
    const viewOneStudent = await students.findById(id).populate("departmentId");
    // console.log(department);
    // check if data not found in db
    if (!viewOneStudent) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "Student not found!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "Student found!",
      student: viewOneStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// updateStudent
const updateStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, status, departmentId } = req.body;
    // find the data from db
    const updatedStudent = await students.findByIdAndUpdate(
      id,
      {
        name,
        age,
        status,
        departmentId,
      },
      { new: true }
    );
    // console.log(updatedStudent);
    // check if data not found in db
    if (!updatedStudent) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "student not Updated!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "student Updated!",
      student: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// deleteStudentById
const deleteStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    // find the data from db
    const deleteStudent = await students.findByIdAndDelete(id);
    // console.log(deleteStudent);
    // check if data not found in db
    if (!deleteStudent) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "Student not deleted Invalid id!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "Student deleted!",
      student: deleteStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

module.exports = {
  createStudent,
  viewAllStudents,
  viewStudentById,
  updateStudentById,
  deleteStudentById,
};
