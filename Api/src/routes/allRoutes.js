const express = require('express');
const router = express.Router();

const alumnos = require('../routes/router_alumnos')

router.use('/alumnos', alumnos); 

module.exports = router;