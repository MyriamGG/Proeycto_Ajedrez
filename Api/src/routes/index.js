const express  = require("express");
const router = express.Router();

const allRoutes = require('./allRoutes');

router.use('/API', allRoutes);

module.exports = router;