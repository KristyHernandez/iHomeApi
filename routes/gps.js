var express = require('express');
var router = express.Router();
var gps = require('../Controller/Ubicaciones/gps-controler')


router.post('/direccionGps', gps.direccionGps);


module.exports = router;