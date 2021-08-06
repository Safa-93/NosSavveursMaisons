/* ****** class Supplement***** */

var Menu = require('./Menu').Menu

var Supplements = function () {
  this.id = null
  this.Nom = null
  this.prix = null
  this.nbCalorie = null
}

Supplements.prototype = new Menu()
Supplements.prototype.constructor = Supplements

Supplements.prototype.Ajouter = function (req, res) {
  console.log('Fonction Ajouter ')
}

module.exports = { Supplements: Supplements }
