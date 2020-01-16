const pg = require('../../Configuration/psConnection')
exports.apartamentoById = async function(req, res, next) {

  let data = await pg.func('app.ft_get_apartamento_by_id', req.body.id).catch(err => {
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
    data = await data[0].ft_get_apartamento_by_id[0]
  } catch (e) {}



  res.send(data)


  // busqueda_inteligente
}