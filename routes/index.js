const express = require("express");
const { departmentRoutes } = require("./departments-routes");
const { facultyRoutes } = require("./faculty-route");
const { studentRoutes } = require("./students-routes");
const route = express.Router();

// department routes
route.use("/department", departmentRoutes);

// faculty route

route.use("/faculty", facultyRoutes);

// student route
route.use("/student", studentRoutes);
module.exports = route;
