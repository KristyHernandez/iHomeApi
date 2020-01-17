const pg = require('../../Configuration/psConnection')
exports.update = async function(req, res, next) {
  let data = await pg.func('app.update_anuncio', `[${JSON.stringify(req.body)}]`).catch(err => {
    console.log(err);
  })

  res.send({
    id: 1
  })
}
