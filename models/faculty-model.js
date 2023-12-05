const mongoose = require("mongoose");
const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    subject: {
      type: String,
      require: true,
      unique: true,
    },
    departmentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
      },
    ],
  },
  { timestamps: true }
);

const faculty = mongoose.model("faculty", facultySchema);
module.exports = { faculty};
