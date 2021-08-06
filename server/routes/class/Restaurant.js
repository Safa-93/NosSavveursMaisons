/* *****Restaurant ****** */

var Restaurant = function () {
  this.id = '1'
  this.nom = ' The Delight'
  this.Adress = 'xxxxx xxxxx xxxxxx'
  this.Description = 'djsifjdgfhjgfmhkmkffd'
  this.photo = 'image'
}

Restaurant.prototype = new Object()

Restaurant.prototype.request = request()

Restaurant.prototype.Modifier = function (req, res) {
  console.log('Fonction Modifier les données de restaurant')
  let response = {}
  response.resultat = 'Authentifier'
  res.end(JSON.stringify(response))
}
module.exports = { Restaurant: Restaurant }
