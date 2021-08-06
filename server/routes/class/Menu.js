/*  ***** Class Menu ****** */
var fs = require('fs')

var Menu = function () {
  this.id = null
  this.Nom = null
  this.Prix = null
  this.photo = null
}

Menu.prototype = new Object()
//Menu.prototype.request = request()

Menu.prototype.AjouterMenu = function (req, res) {
  console.log('Fonction Ajouter Menu')
  console.log('Body:' + req.body + ' IF json ' + JSON.stringify(req.body))
  fs.writeFileSync('data.json', JSON.stringify(req.body))
}

Menu.prototype.ModifierMenu = function (req, res) {
  console.log('Fonction Modifier le menu')
}

Menu.prototype.SupprimerMenu = function (req, res) {
  console.log('Fonction Supprimer Menu')
}

module.exports = { Menu: Menu }
