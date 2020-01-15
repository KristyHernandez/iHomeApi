var express = require('express');
var router = express.Router();
var user = require('../Controller/Users/user-controler')


router.get('/goLogin', user.login);
router.post('/goLoginPost', user.login);
router.post('/changePassword', user.changePassword);
router.post('/registrar', user.registrar);
router.post('/notificacion', user.notificacion);
router.post('/anuncio_foto', user.anuncio_foto);
router.post('/pago', user.pago);
router.post('/colonia_barrio', user.colonia_barrio);


module.exports = router;
