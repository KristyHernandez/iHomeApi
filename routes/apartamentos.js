var express = require('express');
var router = express.Router();
var ap = require('../Controller/Apartamentos/ap-controler')


router.post('/buscarApartamento', ap.buscarApartamento);
router.post('/apartamentoById', ap.apartamentoById);
router.post('/miLista', ap.miLista);


module.exports = router;