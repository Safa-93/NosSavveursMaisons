/* ****** Classe Client ***** */

var Utilisateur = require('./Utilisateur').Utilisateur

var Client = function () {
  this.id = null
  this.nom = null
  this.prenom = null
  this.phone = null
}

Client.prototype = new Utilisateur()
Client.prototype.constructor = Client

Client.prototype.PasserCommande = function (req, rep) {
  console.log(' Fonction Passer une commande ')
}

Client.prototype.Payer = function (req, rep) {
  console.log('Payer une commande')
}

module.exports = { Client: Client }
