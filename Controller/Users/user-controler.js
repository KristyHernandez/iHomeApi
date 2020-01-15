const login = require('./login')
const changePassword = require('./changePassword')
const registrar = require('./registrar')
const notificacion = require('./notificacion')
const pago = require('./pago')
const colonia_barrio = require('./colonia_barrio')
const anuncio_foto = require('./anuncio_foto')

exports.login = login.login
exports.changePassword = changePassword.changePassword
exports.registrar = registrar.registrar
exports.notificacion = notificacion.notificacion
exports.pago = pago.pago
exports.colonia_barrio = colonia_barrio.colonia_barrio
exports.anuncio_foto = anuncio_foto.anuncio_foto