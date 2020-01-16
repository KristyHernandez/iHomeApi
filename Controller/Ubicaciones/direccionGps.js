const geolocation = require('./politicalPolice');
exports.direccionGps = async function(req, res, next) {
  // console.log(req.body)
  data = await geolocation.getPoliceRouter(req.body.latitud, req.body.longitud)

  res.send(data)
}