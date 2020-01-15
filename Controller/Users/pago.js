const pg = require('../../Configuration/psConnection')

exports.pago = async function(req, res, next) {
  console.log(req.body.user, req.body.pass);
  
     let data = await pg.func('app.pago', [
         req.body.numero_factura,
         req.body.fecha,
         req.body.monto,
         req.body.id_user
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