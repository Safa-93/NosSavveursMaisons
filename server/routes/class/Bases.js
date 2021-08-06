/* ****** class Bases***** */

var Menu = require('./Menu').Menu

var Bases = function () {
  this.id = null
  this.Nom = null
  this.Description = null
  this.prix = null
  this.nbCalorie = null
}

Bases.prototype = new Menu()
Bases.prototype.constructor = Bases

Bases.prototype.Modifier = function (req, res) {
  console.log('Fonction Modifier')
}
Bases.prototype.Ajouter = function (req, res) {
  console.log('Fonction Ajouter ')
}

Bases.prototype.Supprimer = function (req, res) {
  console.log('Fonction Supprimer ')
}

module.exports = { Bases: Bases }
