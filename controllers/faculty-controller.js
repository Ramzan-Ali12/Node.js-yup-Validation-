const { faculty,departments } = require("../models/faculty-model");
const Status = require("../config/constant");
// createFaculty
const createFaculty = async (req, res) => {
  try {
    const { name, subject, departmentIds } = req.body;

    const facultyCreated = await faculty.create({
      name,
      subject,
      departmentIds,
    });

    // console.log(facultyCreated);
    return res.status(Status.SUCCESS.CREATED).send({
      msg: "faculty created!",
      faculty: facultyCreated,
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

// viewFaculty
const viewFaculty = async (req, res) => {
  try {
    // find the data from db
    // const getallFaculty = await faculty.find();
    // populate method
    const getallFaculty = await faculty.find().populate("departmentIds","name");
    // .then(p=>console.log(p)).catch(error=>console.log(error));
    // console.log(getallFaculty);
    // check if data not found in db
    if (!getallFaculty) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "faculty not found!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "faculty found!",
      faculty: getallFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// viewFacultyById
const viewFacultyById = async (req, res) => {
  try {
    const id = req.params.id;
    // find the data from db
    const getFacultyById = await faculty.findById(id).populate('departmentIds',"name");
    // console.log(getFacultyById);
    // check if data not found in db
    if (!getFacultyById) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "faculty not found!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "faculty found!",
      faculty: getFacultyById,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// updateFacultyById
const updateFacultyById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, subject, departmentIds } = req.body;
    // console.log(req.body);
    // find the data from db
    const updatedFaculty = await faculty.findByIdAndUpdate(
      id,
      {
        name,
        subject,
        departmentIds,
      },
      { new: true }
    );
    // console.log(updatedFaculty);
    // check if data not found in db
    if (!updatedFaculty) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "faculty not Updated!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "faculty Updated!",
      faculty: updatedFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

// deleteFacultyById
const deleteFacultyById = async (req, res) => {
  try {
    const id = req.params.id;
    // find the data from db
    const deletedFaculty = await faculty.findByIdAndDelete(id);
    // console.log(deletedFaculty);
    // check if data not found in db
    if (!deletedFaculty) {
      return res.status(Status.ERROR.NOT_FOUND).send({
        msg: "faculty not deleted Invalid id!",
      });
    }
    return res.status(Status.SUCCESS.OK).send({
      msg: "faculty deleted!",
      faculty: deletedFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(Status.ERROR.INTERNAL_SERVER_ERROR).send({
      msg: "Internal Server error!",
    });
  }
};

module.exports = {
  createFaculty,
  viewFaculty,
  viewFacultyById,
  updateFacultyById,
  deleteFacultyById,
};
