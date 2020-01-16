const pg = require('../../Configuration/psConnection')
exports.buscarApartamento = async function(req, res, next) {

  let data = await pg.func('app.busqueda_inteligente', req.body.direccion).catch(err => {
    console.log(err);

    res.status(500).send({
      error: err,
      status: 500
    });
  })

  if (res.statusCode != 200) {
    return
  }

  try {
    data = await data[0]
  } catch (e) {}



  res.send(data)


  // busqueda_inteligente
}