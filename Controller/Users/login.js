const pg = require('../../Configuration/psConnection')

exports.login = async function(req, res, next) {
 
     let data = await pg.func('app.ft_proc_login',[req.body.user,req.body.pass]).catch(err => {
         console.log(err);
        
       res.status(500).send({
         error: err,
         status: 500
       });
     })

   if (res.statusCode != 200) {
     return
   }

   try{
     data=await data[0]
   }catch(e){}
   console.log(data)
  

  res.send(data)
}