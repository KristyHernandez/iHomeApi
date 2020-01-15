const pg = require('../../Configuration/psConnection')

exports.registrar = async function(req, res, next) {
   // console.log('app.users',req.body.user, req.body.pass);
  
        let data = await pg.func('app.registrar', [
         req.body.nombre,
         req.body.apellido,
         req.body.email,
         req.body.contrasena,
         //req.body.fecha_creado,
         req.body.usuario
     ]).catch(err => {
         console.log(err);
        
       res.status(500).send({
         error: err,
         status: 500
       });
     });

   if (res.statusCode != 200) {
     return;
   }

  res.send(data);
};