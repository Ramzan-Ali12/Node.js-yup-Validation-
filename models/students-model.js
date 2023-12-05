const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    age: {
      type: Number,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
    },
  },
  { timestamps: true }
);

const students = mongoose.model("student", studentSchema);
module.exports = { students };
