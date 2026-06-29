const express = require("express");
const router = express.Router();

const brandRoutes = require("./brandroutes");
const employeeRoutes = require("./Employeeroutes");
const taskRoutes = require("./Taskroutes");

router.use("/brands", brandRoutes);
router.use("/employees", employeeRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;




router.use('/auth', require('./auth.routes'));
// router.use('/employees', require('./employee.routes'));  // add later
// router.use('/stats',     require('./stats.routes'));     // add later

