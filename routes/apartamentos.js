var express = require('express');
var router = express.Router();
var ap = require('../Controller/Apartamentos/ap-controler')


router.post('/buscarApartamento', ap.buscarApartamento);
router.post('/apartamentoById', ap.apartamentoById);
router.post('/miLista', ap.miLista);
router.post('/genera', ap.genera);
router.post('/uplFoto', ap.uplFoto);
router.post('/update', ap.update);
router.post('/ultimos', ap.ultimos);

module.exports = router;
