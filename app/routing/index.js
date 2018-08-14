var router = require("express").Router();
var apiRoutes = require("./apiRoutes.js");

router.use("/", apiRoutes);


module.exports = router;