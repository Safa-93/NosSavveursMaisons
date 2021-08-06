/* *******  classe Cuisinier ******** */

var Client = require('./Client').Client
var Cuisinier = function () {}

Cuisinier.prototype = new Client()

Cuisinier.prototype.constructor = Cuisinier

Cuisinier.prototype.ComposerMenu = function (req, rep) {
  console.log('Composer le menu')
}

Cuisinier.prototype.ModifierMenu = function (req, rep) {}

Cuisinier.prototype.ValiderMenu = function (req, rep) {
  console.log('Vlaider le menu')
}

module.exports = { Cuisinier: Cuisinier }
