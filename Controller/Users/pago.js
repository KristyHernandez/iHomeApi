const pg = require('../../Configuration/psConnection')

exports.pago = async function(req, res, next) {
  console.log(req.body)

  let data = await pg.func('app.i_pago', [
         req.body.id,
         req.body.monto,
         req.body.user
         ]).catch(err => {
    console.log(err);
    res.status(500).send({
      error: err,
      status: 500
    });
  })

  if (res.statusCode != 200) {
    return
  }
  res.send({
    status: 'bien'
  })
}
