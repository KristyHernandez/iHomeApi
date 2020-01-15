const pg = require('../../Configuration/psConnection')

exports.notificacion = async function(req, res, next) {
  //console.log(req.body.user, req.body.pass);
  
     let data = await pg.func('app.notificacion', [
         req.body.mensaje,
         req.body.telefono
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
