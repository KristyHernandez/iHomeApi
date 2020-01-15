const pg = require('../../Configuration/psConnection')

exports.anuncio_foto = async function(req, res, next) {
  //console.log(req.body.user, req.body.pass);
  
     let data = await pg.func('app.anuncio_foto', [
         req.body.url_foto,
         req.body.activa
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
   res.send(data)
}