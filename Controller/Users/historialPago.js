const pg = require('../../Configuration/psConnection')

exports.historialPago = async function(req, res, next) {
  let data = await pg.func('app.historial_pagos', req.body.id).catch(err => {
    console.log(err);

  })
  // console.log(data)
  // try {
  //   data = await data[0]["validaPago"]
  //   data = await {
  //     valor: pago
  //   }
  // } catch (e) {}
  // console.log("#")

  res.send(data)
}
