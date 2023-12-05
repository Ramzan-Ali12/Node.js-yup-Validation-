const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const departments = mongoose.model("department", departmentSchema);
module.exports = { departments };
