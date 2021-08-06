/*   ******* classe Commande ******   */

var Menu = require('./Menu').Menu

var Commande = function () {
  this.id = null
  this.Type = null
  this.Date_Commande = null
  this.Prix = null
}

Commande.prototype = new Menu()
Commande.prototype.constructor = Commande

Commande.prototype.Enregistrer = function () {}

module.exports = { Commande: Commande }
