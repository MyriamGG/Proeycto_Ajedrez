const { Router } = require("express");
const router = Router();

const alumnos = require('../routes/router_alumnos')

router.use('/alumnos', alumnos); 


module.exports = router;