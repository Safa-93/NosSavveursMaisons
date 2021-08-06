/*  ***** Class Menu ****** */

var Menu = function () {
  this.id = null
  this.Nom = null
  this.Prix = null
  this.photo = null
}

Menu.prototype = new Object()
Menu.prototype.request = request()

Menu.prototype.Ajouter = function (req, res) {
  console.log('Fonction Ajouter Menu')
}

Menu.prototype.Modifier = function (req, res) {
  console.log('Fonction Modifier le menu')
  let response = {}
  response.resultat = 'Authentifier'
  res.end(JSON.stringify(response))
}

Menu.prototype.Supprimer = function (req, res) {
  console.log('Fonction Supprimer Menu')
}

module.exports = { Menu: Menu }
