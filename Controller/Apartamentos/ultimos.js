const pg = require('../../Configuration/psConnection')
exports.ultimos = async function(req, res, next) {

  let data = await pg.func('app.ultimos').catch(err => {
    console.log(err);

    res.status(500).send({
      error: err,
      status: 500
    });
  })

  if (res.statusCode != 200) {
    return
  }
  console.log(data)
  try {
    data = await data[0].ultimos
  } catch (e) {}
  console.log(data)



  res.send(data)


  // busqueda_inteligente
}
