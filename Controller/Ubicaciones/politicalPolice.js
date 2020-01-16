// const pg = require('../../configuration/ps_connection');
const request = require('request');
const config = require('../../configuration/config')

exports.politicalPolice = async function(req, res, next) {
  res.send(await getPolice(req.body.latitud, req.body.longitud))
};

var getPolice = async function getPolice(p_latitud, p_longitud) {
  return new Promise(async (resolve, reject) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${p_latitud},${p_longitud}&sensor=true&key=${config.app.mapsApiKey}`
    // console.log(url)

    await request.get(url, async (err, httpResponse, data) => {
      if (!err) {
        if (httpResponse.statusCode == 200) {
          data = JSON.parse(data)

          ciudad =
            await data.results[0].address_components.filter((item) =>
              item.types[0] == 'locality' && item.types[1] == 'political'
            )[0]

          ciudad = ciudad != undefined ? ciudad.long_name : null

          direccion = await data.results[0].formatted_address

          departamento = await data.results[0].address_components.filter((item) =>
            item.types[0] == 'administrative_area_level_1' && item.types[1] == 'political'
          )[0]

          departamento = departamento != undefined ? departamento.long_name : null

          id_departamento = await data.results.filter((item) =>
            item.types[0] == 'administrative_area_level_1' && item.types[1] == 'political'
          )[0]

          id_departamento = id_departamento != undefined ? id_departamento.place_id : null

          resolve({
            ciudad: ciudad,
            direccion,
            direccion,
            departamento: departamento,
            id_departamento: id_departamento
          })
        } else {
          resolve({
            ciudad: null,
            direccion: null
          })
        }
      } else {
        resolve({
          ciudad: null,
          direccion: null
        })
      }
    })
  })
}

exports.getPoliceRouter = getPolice;