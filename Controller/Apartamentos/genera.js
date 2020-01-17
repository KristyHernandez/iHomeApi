const pg = require('../../Configuration/psConnection')
exports.genera = async function(req, res, next) {
  let data = await pg.func('app.ft_anuncio', `[${JSON.stringify(req.body)}]`).catch(err => {
    console.log(err);
  })


  try {
    data = await data[0].ft_anuncio
  } catch (e) {}

  res.send({
    id: data
  })
}