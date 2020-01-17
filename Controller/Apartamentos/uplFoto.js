const pg = require('../../Configuration/psConnection')
const fs = require('fs');
exports.uplFoto = async function(req, res, next) {

  let date = new Date()
  let dd = date.getDate()
  let mm = date.getMonth() + 1
  let yy = date.getFullYear()
  let dhh = date.getTime()
  let v_date = `${dd}_${mm}_${yy}_${dhh}`

  var img_nombre = `apartamento_${req.body.id}_${v_date}_img.jpg`

  // var ruta = `${config.patch_img}${img_nombre}`
  var ruta = `./${img_nombre}`
  let resp = await req.files.image.mv(`${ruta}`, function(err) {
    return 'error'
  })

  let data = await pg.func('app.asigna_img', [req.body.id, img_nombre]).catch(err => {})

  res.send({
    status: 'bien'
  })


}